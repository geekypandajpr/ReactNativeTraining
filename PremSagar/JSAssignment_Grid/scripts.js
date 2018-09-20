var MyGrid = (function () {
    var myTable;
    var dataGridDef = [];

    sortTable = function (props) {
        return function (x, y) {
            return ((x[props] === y[props]) ? 0 : ((x[props] > y[props]) ? 1 : -1));
        }
    }

    /**Function to create button
     * @param className is class name of button
     * @param buttonName is name of button 
     */
    addButton = function (buttonName, className) {
        var buttonRef = document.createElement('button');
        buttonRef.innerHTML = buttonName;
        buttonRef.setAttribute('class', className);
        return buttonRef;
    }

    getTotalPageNumber = function () {
        var totalPages = Math.floor(dataGridDef.datas.length / dataGridDef.currentPageSize);
        totalPages += (dataGridDef.datas.length % dataGridDef.currentPageSize) > 0 ? 1 : 0;
        return totalPages;
    }

    applyPagination = function (totalData) {
        var startIndex = (dataGridDef.currentPageNumber - 1) * dataGridDef.currentPageSize;
        var endIndex = startIndex + dataGridDef.currentPageSize;
        var totalPages = getTotalPageNumber();
        if (dataGridDef.currentPageNumber == totalPages) {
            endIndex = totalData.length;
        }

        var btnStartIndex = dataGridDef.currentPageNumber;
        var btnEndIndex = dataGridDef.currentPageNumber + 2;
        if (btnEndIndex > totalPages) {
            btnEndIndex = totalPages;
        }
        onPressMultiButton(btnStartIndex, btnEndIndex);
        return totalData.slice(startIndex, endIndex);
    }

    showFirstPage = function () {
        dataGridDef.currentPageNumber = 1;
        reCreateGrid(applyPagination(dataGridDef.datas));
    }

    showPrevPage = function () {
        if (dataGridDef.currentPageNumber > 1) {
            dataGridDef.currentPageNumber -= 1;
        }
        reCreateGrid(applyPagination(dataGridDef.datas));
    }

    showNextPage = function () {
        var totalPages = getTotalPageNumber();
        if (dataGridDef.currentPageNumber < totalPages) {
            dataGridDef.currentPageNumber += 1;
        }
        reCreateGrid(applyPagination(dataGridDef.datas));
    }

    showLastPage = function () {
        var totalPages = getTotalPageNumber();
        dataGridDef.currentPageNumber = totalPages;
        reCreateGrid(applyPagination(dataGridDef.datas));
    }

    addPageDropDown = function () {
        var select = document.createElement('select');
        select.setAttribute('id', 'pageDropDown')
        select.onchange = function () {
            dataGridDef.currentPageSize = parseInt(this.value);
            dataGridDef.currentPageNumber = 1;
            reCreateGrid(applyPagination(dataGridDef.datas));
        }
        for (var i = 0, len = dataGridDef.pageSize.length; i < len; i++) {
            var options = document.createElement('option');
            options.innerHTML = dataGridDef.pageSize[i];
            select.appendChild(options);
        }
        return select;
    }

    onPressMultiButton = function (start, end) {
        buttons = document.getElementsByClassName('button');
        for(var i = 0;i < buttons.length; i++) {
            buttons[i].style.visibility = "hidden";
            buttons[i].style.backgroundColor = '#ffffff';
        }
        var k = 0;
        for (var i = start; i <= end; i++) {
            if(i == dataGridDef.currentPageNumber) {
                buttons[k].style.backgroundColor = "red";
            }
            buttons[k].style.visibility = "visible";
            buttons[k].innerHTML=i;
            buttons[k].onclick = function() {
                dataGridDef.currentPageNumber = parseInt(this.innerHTML);
                reCreateGrid(applyPagination(dataGridDef.datas));
            }
            k++;
        }

        onPressDotButton(start, end);
    }

    onPressDotButton = function(start, end) {
        prevDotBtn = document.getElementsByClassName('prev_button_dot')[0];
        prevDotBtn.onclick = function() {
            dataGridDef.currentPageNumber = parseInt(start-2);
            reCreateGrid(applyPagination(dataGridDef.datas));
        }
        nextDotBtn = document.getElementsByClassName('next_button_dot')[0];
        nextDotBtn.onclick = function() {
            dataGridDef.currentPageNumber = parseInt(start+2);
            reCreateGrid(applyPagination(dataGridDef.datas));
        }
        if(start < 3) {
            prevDotBtn.style.visibility = "hidden";
        } else {
            prevDotBtn.style.visibility = "visible";
        }

        var totalPages = getTotalPageNumber();
        if(end == totalPages) {
            nextDotBtn.style.visibility = "hidden";
        } else {
            nextDotBtn.style.visibility = "visible";
        }
    }

    addMultiButton = function (myDiv) {
        var totalPages = getTotalPageNumber();
        prevDotBtn = addButton('...', 'prev_button_dot');
        myDiv.appendChild(prevDotBtn);
        prevDotBtn.style.visibility = "visible";


        if (totalPages > 3) {
            for (var i = 1; i <= 3; i++) {
                var btn = addButton(i, 'button');
                btn.style.backgroundColor = '#FFFFFF';
                myDiv.appendChild(btn);
                btn.style.visibility = "hidden";
            }
        } else {
            for (var i = 1; i <= totalPages; i++) {
                var btn = addButton(i, 'button');
                btn.style.backgroundColor = '#FFFFFF';
                myDiv.appendChild(btn);
                btn.style.visibility = "hidden";
            }
        }

        nextDotBtn = addButton('...', 'next_button_dot');
        myDiv.appendChild(nextDotBtn);
        nextDotBtn.style.visibility = "visible";
    }

    addPaging = function () {
        var myDiv = document.getElementById('myDiv');
        var firstButton = addButton('First', 'first_button');
        firstButton.onclick = function () { showFirstPage() };
        var prevButton = addButton('Previous', 'previous_button');
        prevButton.onclick = function () { showPrevPage() };
        var nextButton = addButton('Next', 'next_button');
        nextButton.onclick = function () { showNextPage() };
        var lastButton = addButton('Last', 'last_button');
        lastButton.onclick = function () { showLastPage() };
        var pageDropDown = addPageDropDown();
        myDiv.appendChild(pageDropDown);
        myDiv.appendChild(firstButton);
        myDiv.appendChild(prevButton);
        addMultiButton(myDiv);
        myDiv.appendChild(nextButton);
        myDiv.appendChild(lastButton);
    }

    initDataGrid = function () {
        var myDiv = document.getElementById('myDiv');
        myTable = document.createElement("table");
        myDiv.appendChild(myTable);
        if (dataGridDef.pagging) {
            addPaging();
        }
    }

    setGridAttributes = function () {
        myTable.setAttribute("id", 'myTable');
        myTable.setAttribute("border", "1");
        myTable.setAttribute('height', dataGridDef.gridHeight);
        myTable.setAttribute('width', dataGridDef.gridWidth);
    }

    setGridHeader = function () {
        var tr = document.createElement('tr');
        myTable.appendChild(tr);
        for (var i = 0, len = dataGridDef.columns.length; i < len; i++) {
            var th = document.createElement('th');
            tr.appendChild(th);
            th.setAttribute('width', dataGridDef.columns[i].width);
            th.setAttribute("id", dataGridDef.columns[i].field);
            th.innerHTML = dataGridDef.columns[i].title;
            if (dataGridDef.columns[i].sorting) {
                th.onclick = function () {
                    var data = applyPagination(dataGridDef.datas);
                    data.sort(sortTable(this.id));
                    reCreateGrid(data);
                }
            }
        }
        if (dataGridDef.editable) {
            var th = document.createElement('th');
            tr.appendChild(th);
            th.innerHTML = 'Action';
        }
    }

    reCreateGrid = function (filteredData) {
        deleteGridRows();
        setGridData(filteredData);
    }

    deleteGridRows = function () {
        var table = document.getElementById('myTable');
        var tableRows = table.rows.length;
        for (var i = tableRows - 1; i > 0; i--) {
            table.deleteRow(i);
        }
    }

    setGridData = function (filteredData) {
        for (var data in filteredData) {
            var tr = document.createElement('tr');
            myTable.appendChild(tr);
            var rowData = filteredData[data];
            for (var columnData in rowData) {
                var td = document.createElement('td');
                tr.appendChild(td);
                td.innerHTML = rowData[columnData];
            }
            if (dataGridDef.editable) {
                tr.appendChild(addEditButton());
                tr.appendChild(addUpdateButton());
            }
        }
    }

    addEditButton = function () {
        var btnEdit = addButton('Edit', 'edit_button');
        btnEdit.onclick = function () {
            var content = this.parentElement.getElementsByTagName('td');
            for (var i = 0, len = content.length; i < len; i++) {
                var prevValue = content[i].innerHTML;
                content[i].innerHTML = "<input type='text' value='" + prevValue + "'>";
            }
            this.parentElement.getElementsByClassName('update_button')[0].disabled = false;
            this.disabled = true;
        }
        return btnEdit;
    }

    addUpdateButton = function () {
        var btnUpdate = addButton('Update', 'update_button');
        btnUpdate.setAttribute("disabled", true);
        btnUpdate.onclick = function () {
            var content = this.parentElement.getElementsByTagName('td');
            var arr = getUpdatedValue();
            for (var i = 0, len = content.length; i < len; i++) {
                content[i].innerHTML = arr[i];
            }
            var newData = { "name": arr[0], "age": arr[1], "city": arr[2], "language": arr[3] }
            this.parentElement.getElementsByClassName('edit_button')[0].disabled = false;
            this.disabled = true;
        }
        return btnUpdate;
    }

    getUpdatedValue = function () {
        var inputTags = document.getElementsByTagName('input');
        var values = [];
        for (var i = 0, len = inputTags.length; i < len; i++) {
            values[i] = inputTags[i].value;
        }
        return values;
    }

    return {
        init: function (gridDefinition) {
            dataGridDef = gridDefinition;
            initDataGrid();
            setGridAttributes();
            setGridHeader();
            setGridData(applyPagination(dataGridDef.datas));
        }
    };

})();

MyGrid.init({
    //gridWidth: "600px",
    //gridHeight: "400px",
    pagging: true,
    currentPageNumber: 1,
    currentPageSize: 2,
    pageSize: [2, 4, 6, 8, 10],
    editable: true,
    columns: [
        { field: "name", title: "Name", width: "100px", sorting: true, editor: "textinput" },
        { field: "age", title: "Age", width: "50px", sorting: true, editor: "textinput" },
        { field: "city", title: "City", width: "100px", sorting: false, editor: "textinput" },
        { field: "language", title: "Language", width: "150px", sorting: true, editor: "textinput" }
    ],
    datas: [
        { name: 'Prem Sagar', age: 22, city: 'Jaipur', language: 'Hindi' },
        { name: 'Sunil Kumar', age: 18, city: 'Jaipur', language: 'English' },
        { name: 'Prem Prakash', age: 21, city: 'Delhi', language: 'Hindi' },
        { name: 'Ashish Mallik', age: 23, city: 'Mumbai', language: 'English' },
        { name: 'Amrit Nandan', age: 22, city: 'Ranchi', language: 'English' },
        { name: 'Alokik Pathak', age: 25, city: 'Banglore', language: 'Hindi' },
        { name: 'Praveen Kumar', age: 20, city: 'Hazaribagh', language: 'Hindi' },
        { name: 'Prem', age: 19, city: 'Hazaribagh', language: 'English' },
        { name: 'Shaili', age: 22, city: 'jaipur', language: 'English' },
        { name: 'Rupali', age: 23, city: 'Mumbai', language: 'French' },
        { name: 'Vinayak', age: 24, city: 'Pune', language: 'Sanskrit' },
        { name: 'Swati', age: 24, city: 'Bhubaneshwar', language: 'All' }
    ]
});