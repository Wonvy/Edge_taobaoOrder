// 封装注入代码的函数
function injectScript() {
    // 获取所有的 js-order-container 元素
    const containers = document.querySelectorAll('.index-mod__order-container___1ur4-.js-order-container');

    // 为每个元素添加 hover 效果
    containers.forEach(container => {
        // 检查按钮是否已存在，避免重复添加
        if (container.querySelector('.export-button')) return;

        container.style.boxShadow = 'none';
        container.style.position = 'relative';
        container.style.transition = 'box-shadow 0.1s';
        container.addEventListener('mouseover', function() {
            this.style.boxShadow = '0 0 0 2px #1C9EFF';
        });
        container.addEventListener('mouseout', function() {
            this.style.boxShadow = 'none';
        });

        // 创建导出图片按钮
        const exportButton = document.createElement('button');
        exportButton.textContent = '导出图片';
        exportButton.className = 'export-button';  // 添加 class 名，便于查找和去重
        exportButton.style.position = 'absolute';
        exportButton.style.bottom = '10px';
        exportButton.style.right = '-80px';
        exportButton.style.zIndex = '1000';
        exportButton.style.backgroundColor = '#fff';
        exportButton.style.border = '1px solid #ccc';
        exportButton.style.padding = '5px 10px';
        exportButton.style.cursor = 'pointer';

        // 为按钮添加点击事件
        exportButton.addEventListener('click', function(e) {
            const order1 = e.target.offsetParent;

            const order_number = order1.firstElementChild.getAttribute('data-id');
            const order_time = order1.querySelector('[class^="bought-wrapper-mod__create-time"]');
            const order_price = order1.querySelector('[class^="price-mod__price"] strong');
            const order_shop = order1.querySelector('[class^="seller-mod__container"]');

            const order_tbody = order1.querySelectorAll('tbody');
            const order_tbody_trs = order_tbody[1].querySelectorAll('tr');

            const dataId = order_number;
            const dataPrice = order_price.children[1].textContent;
            const dataTime = order_time.textContent;
            const dataShop = order_shop.textContent;
            
            // const selector = `.js-order-container > div[data-id="${dataId}"]`; 
            const selector = `div[data-id="${dataId}"]`; 

            order_tbody_trs.forEach(tbody_tr => {
                console.log(tbody_tr);
            });

            console.log('订单号：' + order_number);
            console.log('订单名称：' );
            console.log('时间：' + order_time.textContent);
            console.log('总价格：' + order_price.children[0].textContent + order_price.children[1].textContent);
            console.log('店铺：' + order_shop.textContent);
          
            chrome.runtime.sendMessage({ message: "captureScreenshot", selector, dataId, dataTime, dataShop,dataPrice}, (response) => {
                console.log("Screenshot captured and downloaded.");
            });
        });

        // 添加鼠标悬浮和鼠标离开事件
        exportButton.addEventListener('mouseover', function() {
            exportButton.style.color = '#fff';
            exportButton.style.backgroundColor = '#66B6FF';
        });

        exportButton.addEventListener('mouseout', function() {
            exportButton.style.color = '#333';
            exportButton.style.backgroundColor = '#fff';
        });

        // 将按钮添加到容器中
        container.appendChild(exportButton);
    });
}

// 首次运行注入代码
injectScript();

// 创建 MutationObserver 监听 DOM 变动
const observer = new MutationObserver((mutations) => {
    let shouldInject = false;
    mutations.forEach((mutation) => {
        if (mutation.addedNodes.length || mutation.removedNodes.length) {
            shouldInject = true;
        }
    });
    if (shouldInject) {
        // 使用 setTimeout 进行去抖动
        setTimeout(() => {
            injectScript();
        }, 100);
    }
});

// 配置 MutationObserver 监听子节点和子树的变动
const config = { childList: true, subtree: true };

// 开始监听
observer.observe(document.body, config);
