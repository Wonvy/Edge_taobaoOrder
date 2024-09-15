// 审查元素功能

let inspectEnabled = false;

document.addEventListener('mouseover', handleMouseover);
document.addEventListener('mouseout', handleMouseout);

document.addEventListener('click', handleClick);
function handleClick(event) {
    inspectEnabled = false;
}

function handleMouseover(event) {
    if (!inspectEnabled) return;
    const targetElement = event.target; // 获取鼠标悬停的元素

    // 获取元素的尺寸和位置
    const rect = targetElement.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const top = rect.top + window.scrollY;
    const left = rect.left + window.scrollX;
    const strPath = getPath(event.target);

    // 创建或更新显示信息的元素
    let infoBox = document.getElementById('extension-infobox');
    if (!infoBox) {
        infoBox = document.createElement('div');
        infoBox.id = 'extension-infobox';
        let el_p = document.createElement('p');
        el_p.textContent = `Size: ${width}x${height}, Class: ${targetElement.className}`;
        // infoBox_p.textContent = `${strPath},Size: ${width}x${height}, Class: ${targetElement.className}`;
        infoBox.appendChild(el_p);
        document.body.appendChild(infoBox);
    }

    let infoBox_p = infoBox.querySelector('p');

    // 设置信息和样式
    // infoBox.textContent = `${strPath},Size: ${width}x${height}, Class: ${targetElement.className}`;
    infoBox.style.cssText = `
        position: absolute;
        top: ${top}px;
        left: ${left}px;
        width:${width}px;
        height:${height}px;
        border: 1px solid red;
        background-color: rgba(73, 151, 217,0.5);
        z-index: 10000;
        font-size:8px;
        font-weight:bold;
        pointer-events: none; // 防止自身成为hover目标
    `;

    infoBox_p.style.cssText = `
        position: absolute;
        top: -25px;
        left: 0px;
        width: 300px;
        background: #fdfdfd;
        padding: 3px 10px;
        font-size: 12px;
        font-weight: bold;
        color: blue;
    `;




}

// 处理鼠标移出事件函数
function handleMouseout(event) {
    // 如果检查功能未启用，则直接返回
    if (!inspectEnabled) return;
    // 获取扩展信息框元素
    const infoBox = document.getElementById('extension-infobox');
    // 如果信息框存在，则移除
    if (infoBox) {
        infoBox.remove();
    }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log('你有新的消息:', request);
    if (request.dog === '男人') {
        sendResponse({ message: '今天天气真好' });
    }

    if (request.method === "getSelectedText") {
        const selectedText = window.getSelection().toString();
        sendResponse({ text: selectedText });
    }

    if (request.method === "getSelectedHtml") {
        const selection = window.getSelection();
        console.log('gethtml', selection);
        const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
        if (range) {
            const container = document.createElement("div");
            container.appendChild(range.cloneContents());
            // console.log('container', container);

            const html2 = extractHTMLStructure(container.innerHTML)

            chrome.runtime.sendMessage({
                type: "selectedHtml",
                content: html2
            });
            sendResponse({ selectedHtml: container.innerHTML });
        }
    }

    if (request.action === "toggleInspect") {
        inspectEnabled = !inspectEnabled;
    }
});

// 获取元素路径字符串
function getPath(element) {
    if (element.tagName === 'HTML') {
        return 'html';
    }
    let path = element.tagName.toLowerCase();
    if (element.id) {
        path += "#" + element.id;
    } else if (element.className) {
        path += "." + element.className.trim().split(/\s+/).join('.');
    }

    return getPath(element.parentElement) + ' > ' + path;
}

function createStructureString(element, depth = 0) {
    let structure = "";
    let indent = "--".repeat(depth); // 创建缩进

    // 检查并格式化类名和ID
    const classes = element.className && typeof element.className === 'string' ?
        '.' + element.className.trim().split(/\s+/).join(' .') : '';
    const id = element.id ? '#' + element.id : '';
    const classAndId = (classes || id) ? ` (${classes}${classes && id ? ' ' : ''}${id})` : '';

    structure += indent + element.tagName.toLowerCase() + classAndId + '\n'; // 添加标签名和样式

    element.childNodes.forEach(child => {
        if (child.nodeType === Node.ELEMENT_NODE) {
            structure += createStructureString(child, depth + 1); // 递归调用以添加子元素
        }
    });

    return structure;
}

function extractHTMLStructure(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return createStructureString(doc.documentElement); // 从根元素开始
}

// 页面主入
function getSelectionHTML() {
    alert(111)
    // console.log(window.getSelection);
    // var userSelection;
    // if (window.getSelection) {
    //     // W3C Ranges
    //     userSelection = window.getSelection();
    //     // Get the range:
    //     if (userSelection.getRangeAt)
    //         var range = userSelection.getRangeAt(0);
    //     else {
    //         var range = document.createRange();
    //         range.setStart(userSelection.anchorNode, userSelection.anchorOffset);
    //         range.setEnd(userSelection.focusNode, userSelection.focusOffset);
    //     }
    //     // And the HTML:
    //     var clonedSelection = range.cloneContents();
    //     var div = document.createElement('div');
    //     div.appendChild(clonedSelection);
    //     return div.innerHTML;
    // } else if (document.selection) {
    //     // Explorer selection, return the HTML
    //     userSelection = document.selection.createRange();
    //     return userSelection.htmlText;
    // } else {
    //     return '';
    // }
}





// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     $("body").prepend(
//         `<img  src="${request.url}" id="${request.imageDivId}"
//              class="slide-image" /> `
//     );
//     $("head").prepend(
//         `<style>
//         .slide-image {
//             height: auto;
//             width: 100vw;
//         }
//       </style>`
//     );
//     $(`#${request.imageDivId}`).click(function () {
//         $(`#${request.imageDivId}`).remove(`#${request.imageDivId}`);
//     });
//     sendResponse({ fromcontent: "这个消息来自 content.js" });
// });




// chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
//     if (request.method == "getSelection") {
//         var selection = window.getSelectionHTML();
//         sendResponse({ body: selection, url: window.location.href, subject: document.title });
//     }
//     else
//         sendResponse({}); // snub them.
// });







// chrome.runtime.onMessage.addListener(data)






// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     // 当收到扩展进程或页面脚本（content script）的消息时触发。
//     // https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
//     $("body").prepend( //插入在第一个子节点之前
//         `<img  src="${request.url}" id="${request.imageDivId}"
//                class="slide-image" /> `
//     );
//     $("head").prepend(
//         `<style>
//           .slide-image {
//               height: auto;
//               width: 100vw;
//           }
//         </style>`
//     );

//     console.log('11111111111111');

//     $(`#${request.imageDivId}`).click(function () {
//         $(`#${request.imageDivId}`).remove(`#${request.imageDivId}`);
//     });
//     sendResponse({ fromcontent: "这里有个消息" });
// });