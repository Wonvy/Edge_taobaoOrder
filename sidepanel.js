function updateTable() {
    chrome.storage.local.get(['tableData'], (result) => {
        if (chrome.runtime.lastError) {
            console.error('Error getting storage:', chrome.runtime.lastError);
        } else {
            let tableData = result.tableData || [];
            let tableBody = document.querySelector('#data-table tbody');
            let totalPrice = 0;

            // 清空表格
            tableBody.innerHTML = '';

            // 插入数据（从最新到最旧）
            tableData.forEach((row, index) => {
                let tr = document.createElement('tr');

                Object.keys(row).forEach(key => {
                    let td = document.createElement('td');
                    if (key === 'image') {
                        let img = document.createElement('img');
                        img.src = row[key];
                        img.style.width = '100px';

                        img.addEventListener('mouseover', () => showPreview(row[key]));
                        img.addEventListener('mouseout', hidePreview);

                        td.appendChild(img);
                    } else {
                        td.textContent = row[key];
                        if (key === 'price') {
                            totalPrice += parseFloat(row[key]);
                        }
                    }
                    tr.appendChild(td);
                });

                // 添加删除按钮
                let deleteTd = document.createElement('td');
                let deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('delete-button');
                deleteButton.addEventListener('click', () => deleteRow(index));
                deleteTd.appendChild(deleteButton);
                tr.appendChild(deleteTd);
                tableBody.appendChild(tr);


            });


            // 添加保存为 Excel 按钮事件
            document.querySelector('#save-excel').addEventListener('click', () => {
                saveTableAsExcel(tableData);
            });

            // 更新总价格
            document.getElementById('total-price').textContent = totalPrice.toFixed(2);
        }
    });
}


function saveTableAsExcel(tableData) {
    // 转换表格数据为工作表
    let ws = XLSX.utils.json_to_sheet(tableData, {
        header: ["time", "price", "shop", "id"]
         // header: ["time", "price", "shop", "id", "image"]
    });
   

    // 创建新的工作簿
    let wb = XLSX.utils.book_new();
    
    // 将工作表添加到工作簿中
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // 写入 Excel 文件
    XLSX.writeFile(wb, 'tableData.xlsx');
}


function deleteRow(index) {
    chrome.storage.local.get(['tableData'], (result) => {
        if (chrome.runtime.lastError) {
            console.error('Error getting storage:', chrome.runtime.lastError);
        } else {
            let tableData = result.tableData || [];
            tableData.splice(index, 1);

            chrome.storage.local.set({ tableData: tableData }, () => {
                console.log('Row deleted');
                updateTable();
            });
        }
    });
}

function showPreview(src) {
    const previewImg = document.getElementById('preview-img');
    previewImg.src = src;
    previewImg.style.display = 'block';
}

function hidePreview() {
    const previewImg = document.getElementById('preview-img');
    previewImg.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', updateTable);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "updateTable") {
        updateTable();
    }
});
