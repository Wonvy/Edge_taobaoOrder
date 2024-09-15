
// Function to check if the URL matches the pattern
function isUrlMatchingPattern(url, pattern) {
  const regex = new RegExp(pattern.replace('*', '.*').replace(/\./g, '\\.'));
  return regex.test(url);
}


const URL_PATTERN = 'https://buyertrade.taobao.com/*';


// Allows users to open the side panel by clicking on the action toolbar icon
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  if (!tab.url) return;
  const currentUrl = new URL(tab.url).href;
  if (isUrlMatchingPattern(currentUrl, URL_PATTERN)) {
    await chrome.sidePanel.setOptions({
      tabId,
      path: 'sidepanel.html',
      enabled: true
    });
  } else {
    await chrome.sidePanel.setOptions({
      tabId,
      enabled: false
    });
  }
});

// 添加图片
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "captureScreenshot" && request.selector) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const tabId = tabs[0].id;
            chrome.debugger.attach({ tabId }, "1.3", () => {
                chrome.debugger.sendCommand({ tabId: tabId }, "DOM.enable", () => {
                    // 首先获取文档的根节点
                    chrome.debugger.sendCommand({ tabId: tabId }, "DOM.getDocument", {}, (doc) => {
                        if (chrome.runtime.lastError) {
                            console.error(chrome.runtime.lastError.message);
                            return;
                        }

                        // 使用根节点的 nodeId 进行后续操作
                        const rootNodeId = doc.root.nodeId;
                        // console.log('doc', doc);
                        // console.log('rootNodeId', rootNodeId);
                        // console.log('request.selector', request.selector);

                        // 然后使用选择器在根节点下查询特定的元素
                        chrome.debugger.sendCommand({ tabId: tabId }, "DOM.querySelector", {
                            nodeId: rootNodeId,
                            selector: request.selector
                        }, (result) => {
                            if (chrome.runtime.lastError || !result.nodeId) {
                                console.error(chrome.runtime.lastError ? chrome.runtime.lastError.message : "No element found for the selector");
                                return;
                            }

                            const nodeId = result.nodeId;
                            // console.log('result', result);

                            // 获取nodeid html内容
                            chrome.debugger.sendCommand({ tabId: tabId }, "DOM.getOuterHTML", {
                                nodeId: nodeId
                            }, (outerHTMLResult) => {
                                if (chrome.runtime.lastError) {
                                    console.error(chrome.runtime.lastError.message);
                                    return;
                                }

                                const outerHTML = outerHTMLResult.outerHTML;
                                // console.log('Outer HTML of the element:', outerHTML);
                                // 现在你可以使用 outerHTML 变量，它包含了元素的 HTML 内容

                                chrome.scripting.executeScript({
                                    target: { tabId: tabId },
                                    func: () => ({ scrollX: window.scrollX, scrollY: window.scrollY })
                                }, (result) => {
                                    if (chrome.runtime.lastError) {
                                        console.error(chrome.runtime.lastError.message);
                                        return;
                                    }

                                    const { scrollX, scrollY } = result[0].result;
                                    // console.log("result[0].result", result[0].result);

                                    chrome.debugger.sendCommand({ tabId: tabId }, "DOM.getBoxModel", { nodeId }, (boxModel) => {
                                        if (chrome.runtime.lastError) {
                                            console.error(chrome.runtime.lastError.message);
                                            return;
                                        }

                                        const { model } = boxModel;
                                        const clip = {
                                            x: model.content[0] + scrollX,
                                            y: model.content[1] + scrollY,
                                            width: model.width,
                                            height: model.height,
                                            scale: 1
                                        };

                                        chrome.debugger.sendCommand({ tabId: tabId }, "Page.captureScreenshot", { clip }, (screenshot) => {
                                            if (chrome.runtime.lastError) {
                                                console.error(chrome.runtime.lastError.message);
                                                return;
                                            }

                                            const base64Image = screenshot.data;
                                            const screenshotUrl = 'data:image/png;base64,' + screenshot.data;


                                            // 存储截图数据和其他数据到 chrome.storage.local
                                            chrome.storage.local.get(['tableData'], (result) => {

                                                let tableData = result.tableData || [];
                                                
                                                // 检查是否已经存在相同的订单
                                                const isDuplicate = tableData.some(item => item.id === request.dataId);
                                                
                                                if (isDuplicate) {
                                                    console.log('Duplicate entry found. Skipping.');
                                                    chrome.debugger.detach({ tabId });
                                                    return; // 退出函数，不添加重复数据
                                                }

                                                tableData.unshift({
                                                    time: request.dataTime,
                                                    price: request.dataPrice,
                                                    shop: request.dataShop,
                                                    id: request.dataId,
                                                    image: screenshotUrl
                                                });

                                                chrome.storage.local.set({ tableData: tableData }, () => {
                                                    // console.log('Table data updated');
                                                    // 发送消息给 sidepanel 更新表格
                                                    chrome.runtime.sendMessage({ message: "updateTable" });
                                                });
                                            });
   
                                            chrome.downloads.download({
                                                url: screenshotUrl,
                                                filename: `${request.dataTime}_¥${request.dataPrice}_${request.dataShop}_${request.dataId}.png`,
                                                saveAs: false
                                            }, (downloadId) => {
                                                // console.log(`Download started with ID ${downloadId}`);
                                                chrome.debugger.detach({ tabId });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
            sendResponse({ status: "done" }); // 消息处理完成
        });
        return true; // 保持通信通道开启状态
    }
});



// Example data
const exampleData = [
  { id: '1', name: 'Item 1', value: 'Value 1' },
  { id: '2', name: 'Item 2', value: 'Value 2' },
  { id: '3', name: 'Item 3', value: 'Value 3' }
];

// Listen for messages from the side panel
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getData') {
    // Send example data in response
    sendResponse(exampleData);
  }
});

// Optional: Function to update data (can be called by other scripts or events)
function updateData(newData) {
  // Replace the example data with new data
  exampleData.length = 0;
  exampleData.push(...newData);
}

// 页面快捷键
chrome.commands.onCommand.addListener(function (command) {
  switch (command) {
    case "open_google":
      chrome.tabs.create({ url: "https://www.google.com" });
      break;
    case "open_baidu":
      // chrome.tabs.create({ url: "https://www.baidu.com" });
      break;
  }
});


// 创建菜单
chrome.runtime.onInstalled.addListener(async () => {

  chrome.contextMenus.create({
    id: "menurihgt",
    type: 'normal',
    title: "扩展的右键菜单",
    contexts: ["action"]
  });
  chrome.contextMenus.create({
    id: "myMenu1_1",
    type: 'checkbox',
    parentId: 'menurihgt',
    title: "第二个按钮",
    contexts: ["action"]
  });
  chrome.contextMenus.create({
    id: "myMenu1_2",
    type: 'separator',
    parentId: 'menurihgt',
    title: "第二个按钮",
    contexts: ["action"]
  });
  chrome.contextMenus.create({
    id: "myMenu1_3",
    type: 'radio',
    parentId: 'menurihgt',
    title: "选项一",
    contexts: ["action"]
  });
  chrome.contextMenus.create({
    id: "myMenu1_31",
    type: 'radio',
    parentId: 'menurihgt',
    title: "选项二",
    contexts: ["action"]
  });
  chrome.contextMenus.create({
    id: "myMenu1_4",
    type: 'radio',
    parentId: 'menurihgt',
    title: "选项三",
    contexts: ["action"]
  });
  chrome.contextMenus.create({
    id: "myMenu1_21",
    type: 'separator',
    parentId: 'menurihgt',
    title: "第二个按钮",
    contexts: ["action"]
  });
  chrome.contextMenus.create({
    id: "myMenu1_5",
    type: 'radio',
    parentId: 'menurihgt',
    title: "选项四",
    contexts: ["action"]
  });
  chrome.contextMenus.create({
    id: "myMenu1_6",
    type: 'radio',
    parentId: 'menurihgt',
    title: "选项五",
    contexts: ["action"]
  });


  // chrome.contextMenus.create({
  //   id: "myMenu_launcher",
  //   title: "launcher: 不知道",
  //   type: 'normal',
  //   contexts: ["launcher"]
  // });


  chrome.contextMenus.create({
    id: "myMenu",
    title: "page: 页面空白部分",
    type: 'normal',
    contexts: ["page"]
  });

  chrome.contextMenus.create({
    id: "menu" + Math.random(),
    title: "link: 链接",
    type: 'normal',
    contexts: ["link"],
  });

  chrome.contextMenus.create({
    id: "myMenu_image",
    title: "image: 图片",
    type: 'normal',
    contexts: ["image"]
  });

  chrome.contextMenus.create({
    id: "myMenu_frame",
    title: "frame: 框架",
    type: 'normal',
    contexts: ["frame"]
  });

  chrome.contextMenus.create({
    id: "myMenu_selection",
    title: "selection: 文本1",
    type: 'normal',
    contexts: ["selection"]
  });

  chrome.contextMenus.create({
    id: "getHtml",
    title: "获取选中部分的HTML",
    type: 'normal',
    contexts: ["selection"]
  });


  chrome.contextMenus.create({
    id: "myMenu_video",
    title: "video: 视频",
    type: 'normal',
    contexts: ["video"]
  });

  chrome.contextMenus.create({
    id: "myMenu_editableo",
    title: "editable: 表格",
    type: 'normal',
    contexts: ["editable"]
  });

  chrome.contextMenus.create({
    id: "myMenu_audio",
    title: "audio: 音频",
    type: 'normal',
    contexts: ["audio"]
  });


  chrome.contextMenus.create({
    id: 'fz1',
    title: '二级菜单 normal',
    type: 'normal',
    contexts: ['selection'],
    parentId: 'myMenu'
  });


  chrome.contextMenus.create({
    id: 'fz3',
    title: '二级菜单 checkbox',
    type: 'checkbox',
    contexts: ['selection'],
    parentId: 'myMenu'
  });

  chrome.contextMenus.create({
    id: 'fz2',
    type: 'separator',
    parentId: 'myMenu'
  });

  chrome.contextMenus.create({
    id: 'fz4',
    title: '二级菜单 radio',
    type: 'radio',
    contexts: ['selection'],
    parentId: 'myMenu'
  });




});

chrome.contextMenus.onClicked.addListener((info, tab) => {

  if (info.menuItemId === "myMenu_selection") {
    // console.log('window.getSelection()', window.getSelection());
    console.log('info', info);
    // 使用chrome.scripting.executeScript代替chrome.tabs.executeScript
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: alertSelectedText,
      args: [info.selectionText]
    });
  };

  if (info.menuItemId === "getHtml") {
    chrome.tabs.sendMessage(tab.id, { method: "getSelectedHtml" });
  }


});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const { type } = request;
  if (type === "open_set_page") {
    chrome.runtime.openOptionsPage(); // 打开设置页
  };

  if (type === "selectedHtml") {
    console.log(request.content);
    const htmlcontent = request.content;

    let yuqueData = {
      "title": "标题",
      "slug": "描述",
      "format": 'html',
      "folder": htmlcontent
    }

    let curboxData = {
      "type": "memo",
      "content": htmlcontent,
      "title": "标题",
      "description": "描述",
      "tags": ["标签A", "标签B", "标签C"],
      "folder": "浏览器"
    };

    // sendPostRequest('https://cubox.pro/c/api/save/xc8qhzfi3d1lle', curboxData);
  };

});

function sendPostRequest(url, data) {
  fetch(url, {
    method: 'POST', // 设置请求方法为POST
    headers: {
      'Content-Type': 'application/json' // 设置内容类型为JSON
    },
    body: JSON.stringify(data) // 将数据转换为JSON字符串
  })
    .then(response => response.json()) // 解析JSON响应
    .then(data => console.log('Success:', data)) // 处理成功响应
    .catch((error) => console.error('Error:', error)); // 处理错误响应
}


function alertSelectedText(selectedText) {
  alert("页面右键菜单: " + selectedText);
};

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: contentScriptFunc,
    args: ['action'],
  });
});

function contentScriptFunc(name) {
  alert(`"${name}" executed`);
}

// chrome.runtime.onInstalled.addListener(async () => {
//   chrome.contextMenus.create({
//     title: "Click me!",
//     contexts: ["browser_action"],
//     onclick: function () {
//       console.log("Clicked!");
//     }
//   });
// });
