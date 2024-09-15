
"use strict";
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");

const debugcontent = document.getElementById("debugcontent");

// 获取选项卡元素
const tabs = document.querySelectorAll('.nav-link');

// 整个文档截图
// document.getElementById('screenshotButton333').addEventListener('click', () => {
//   chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//     chrome.debugger.attach({tabId: tabs[0].id}, "1.3", () => {
//       chrome.debugger.sendCommand({tabId: tabs[0].id}, "Page.captureScreenshot", {}, (result) => {
//         const screenshotUrl = 'data:image/png;base64,' + result.data;
//         const img = new Image();
//         img.src = screenshotUrl;
//         document.body.appendChild(img);
//         chrome.debugger.detach({tabId: tabs[0].id});
//       });
//     });
//   });
// });

// 截图文档
document.getElementById('screenshotButton').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.debugger.attach({ tabId: tabs[0].id }, "1.3", () => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
        return;
      }

      chrome.debugger.sendCommand({ tabId: tabs[0].id }, "DOM.getDocument", {}, (doc) => {
        chrome.debugger.sendCommand({ tabId: tabs[0].id }, "DOM.querySelector", {
          nodeId: doc.root.nodeId,
          selector: "nav"
        }, (result) => {
          if (!result.nodeId) {
            console.error("No <nav> element found");
            chrome.debugger.detach({ tabId: tabs[0].id });
            return;
          }

          chrome.debugger.sendCommand({ tabId: tabs[0].id }, "DOM.getBoxModel", { nodeId: result.nodeId }, (boxModel) => {
            const { model } = boxModel;
            const clip = {
              x: model.content[0],
              y: model.content[1],
              width: model.width,
              height: model.height,
              scale: 1
            };

            chrome.debugger.sendCommand({ tabId: tabs[0].id }, "Page.captureScreenshot", { clip }, (screenshot) => {
              const screenshotUrl = 'data:image/png;base64,' + screenshot.data;
              const img = new Image();
              img.src = screenshotUrl;
              document.body.appendChild(img);
              chrome.debugger.detach({ tabId: tabs[0].id });
            });
          });
        });
      });
    });
  });
});



document.getElementById('screenshotButton2').addEventListener('click', () => {
  chrome.tabs.captureVisibleTab(null, {format: 'png'}, (dataUrl) => {
    const img = new Image();
    img.src = dataUrl;
    document.body.appendChild(img);
  });
});


// 为每个选项卡添加点击事件监听器
tabs.forEach(tab => {
    tab.addEventListener('mouseenter', function (event) {
        var tabTrigger = new bootstrap.Tab(this);
        tabTrigger.show();
    });
});


document.getElementById('toggle-button').addEventListener('click', function () {
    var leftColumn = document.getElementById('left-column');
    leftColumn.style.display = leftColumn.style.display === 'none' ? '' : 'none';
});



button7.addEventListener('click', async () => {
    let tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    let activeTab = tabs[0];
    chrome.tabs.create({ url: "runexe:hhhhh" + tabs[0].url });
})

// content-script.js通信
button6.addEventListener('click', async () => {
    let tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    let activeTab = tabs[0];

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let json = { dog: '男人', message: '汪汪汪汪(我喜欢你)' }
        chrome.tabs.sendMessage(
            activeTab.id,
            json,
            function (response) {
                console.log('她的回复:', response);
            }
        );
    });
})


// 执行js代码
button5.addEventListener('click', async () => {
    let tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    let activeTab = tabs[0];
    chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        function: function () {
            alert('当前页执行js函数');
        }
    });
})

// 获取选中文字
function getSelected_Text() {
    let selectedText = "";
    console.log(window.getSelection());
    // debugcontent.innerText = window.getSelection().toString();
    // alert(window.getSelection().toString())
    // debugcontent.innerText = "hello";
    // console.log(window.getSelection());
    // if (window.getSelection) {
    //     selectedText = window.getSelection().toString();
    //     debugcontent.innerText = selectedText;
    // } else {
    //     debugcontent.innerText = "未选择";
    // }
}


// 获取所选文本的内容
button4.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { method: "getSelectedText" }, function (response) {
            if (response && response.text) {
                alert("popup右键菜单Selected text: " + response.text);
            }
        });
    });
});


// 修改当前页面的背景色
button3.addEventListener('click', async () => {
    // await getCurrentTab_bkcolor();
    await getCurrentTab_button();
    debugcontent.innerText = '修改背景色成功';

})

// 修改当前页面的背景色
async function getCurrentTab_button() {
    let tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    let activeTab = tabs[0];
    // console.log('', activeTab.url)
    // console.log('当前页面地址:', activeTab.url)
    // console.log('当前页面ID:', activeTab.id)
    chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        func: setBackgroundColor2,
        args: [30, 20, 10]
    });
}
function setBackgroundColor2(r, g, b) {
    let buttons = document.querySelectorAll('li[id^="chat-messages-"] div[id^="message-content-"]');

    buttons.forEach((button) => {
        button.style.backgroundColor = "rgb(255,0,0)"
    });
}

// 修改当前页面的背景色
async function getCurrentTab_bkcolor() {
    let tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    let activeTab = tabs[0];
    // console.log('', activeTab.url)
    // console.log('当前页面地址:', activeTab.url)
    // console.log('当前页面ID:', activeTab.id)
    chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        func: setBackgroundColor,
        args: [30, 20, 10]
    });
}
function setBackgroundColor(r, g, b) {
    console.log('rgb(' + r + ',' + g + ',' + b + ')');
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}




// 创建桌面通知
button1.addEventListener('click', function () {
    chrome.notifications.create(
        "",
        {
            type: 'basic',
            title: '时间轴',
            message: "Everyday I'm Guzzlin'!",
            iconUrl: "/icons/wonvy32.png"
        }
    );
    // 监听桌面通知的点击事件
    chrome.notifications.onClicked.addListener(function (notificationId) {
        console.log("用户点击了通知：" + notificationId);
    });
    debugcontent.innerText = '创建通知';
})


//获取当前标签页
button2.addEventListener('click', async () => {
    let tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    let activeTab = tabs[0];
    debugcontent.innerText = activeTab.url
    console.log('当前页面地址:', activeTab.url)
    console.log('当前页面ID:', activeTab.id)
})

document.getElementById('toggle-inspect').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "toggleInspect" });
    });
});



// popup.js
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.selectedHtml) {
            console.log("收到的HTML: ", request.selectedHtml);
            // 可以将HTML显示在弹出页面的某个元素中
            document.getElementById("debugcontent").textContent = request.selectedHtml;
        }
    }
);


document.getElementById('getClassesAndIds').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: getAllClassesAndIds
        }, (results) => {
            // 输出结果到弹出页面
            const outputElement = document.getElementById('output');
            outputElement.textContent = JSON.stringify(results[0].result, null, 2);
        });
    });
});

function getAllClassesAndIds() {
    const allElements = document.querySelectorAll('*');
    const classes = new Set();
    const ids = new Set();

    allElements.forEach(el => {
        // 确保className是字符串
        if (typeof el.className === 'string') {
            el.className.trim().split(/\s+/).forEach(className => {
                if (className) {
                    classes.add('.' + className);
                }
            });
        }

        // 添加ID
        if (el.id) {
            ids.add('#' + el.id);
        }
    });

    return {
        class: Array.from(classes),
        id: Array.from(ids)
    };
}
















// return
// console.log(getCurrentTab());
// let queryOptions = { active: true, currentWindow: true };
// `tab` will either be a `tabs.Tab` instance or `undefined`.
// let tabs = chrome.tabs.query(queryOptions);

// const tabs = chrome.tabs.query({
//     url: [
//         "https://developer.chrome.com/docs/webstore/*",
//         "https://developer.chrome.com/docs/extensions/*",
//     ],
// });
// console.log(chrome.tabs);
// chrome.action.setBadgeBackgroundColor(
//     { color: '#00FF00' },  // Also green
//     () => { /* ... */ },
// );
// chrome.tabs.onActivated.addListener(moveToFirstPosition);

// chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//     console.log(tabs);
//     console.log('tabs');
//     alert(tabs[0].id);
// chrome.tabs.sendMessage(
//     tabs[0].id,
//     {
//         url: chrome.runtime.getURL("images/stars.jpeg"),
//         imageDivId: `${guidGenerator()}`,
//         tabId: tabs[0].id
//     },
//     function (response) {
//         // window.close(); //关闭窗口
//     }
// );
// function guidGenerator() {
//     const S4 = function () {
//         return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
//     };
//     return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
// }
//         });

//     };
// }





// async function moveToFirstPosition(activeInfo) {
//     try {
//         await chrome.tabs.move(activeInfo.tabId, { index: 0 });
//         console.log('Success.');
//     } catch (error) {
//         if (error == 'Error: Tabs cannot be edited right now (user may be dragging a tab).') {
//             setTimeout(() => moveToFirstPosition(activeInfo), 50);
//         } else {
//             console.error(error);
//         }
//     }
// }