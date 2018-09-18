var MyGrid = (function () {
    var myTable;
    var gridDef = [];
    var pageSize = 0;
    var startIndex = 0;
    var endIndex= 0;

    sortTable = function (props) {
        return function (x, y) {
            return ((x[props] === y[props]) ? 0 : ((x[props] > y[props]) ? 1 : -1));
        }
    }

    resetIndexValue = function() {
        startIndex = 0;
        endIndex = parseInt((startIndex + pageSize) > gridDef.datas.length ? gridDef.datas.length : (startIndex + pageSize));
        toggleButton();
    }

    toggleButton = function() {
        var prev = document.getElementsByClassName('previousButton')[0];
        var next = document.getElementsByClassName('nextButton')[0];
        if(startIndex == 0) {
            prev.disabled = true;
        } else {
            prev.disabled = false;
        }
        if(endIndex >= gridDef.datas.length) {
            next.disabled = true;
        } else {
            next.disabled = false;
        }
    }

    showNextPage = function() {
        startIndex = endIndex;
        endIndex = ((endIndex + pageSize) > gridDef.datas.length ? gridDef.datas.length : (endIndex + pageSize));
        toggleButton();
        reCreateGrid();
    }

    showPrevPage = function() {
        endIndex = startIndex;
        startIndex = ((startIndex - pageSize) <= 0 ? 0 : (startIndex - pageSize));
        toggleButton();
        reCreateGrid();
    }

    addPrevButton = function() {
        var prevButton = document.createElement('button');
        myDiv.appendChild(prevButton);
        prevButton.setAttribute("disabled", true);
        prevButton.setAttribute('class', 'previousButton');
        prevButton.innerHTML = 'Previous';
        prevButton.onclick = function() {
            showPrevPage();
        }
        return prevButton;
    }

    addNextButton = function() {
        var nextbutton = document.createElement('button');
        nextbutton.setAttribute('class', 'nextButton');
        nextbutton.innerHTML = 'Next';
        nextbutton.onclick = function() {
            showNextPage();
        }
        return nextbutton;
    }

    addDropDown = function() {
        var select = document.createElement('select');
        select.setAttribute('id', 'pageDropDown')
        select.onchange = function() {
            pageSize = document.getElementById("pageDropDown").value;
            resetIndexValue();
            reCreateGrid();
        }
        for(var i = 0, len = gridDef.pageSize.length; i < len; i++) {
            var options = document.createElement('option');
            options.innerHTML = gridDef.pageSize[i];
            select.appendChild(options);
        }
        return select;
    }

    addPaging = function() {
        pageSize = gridDef.pageSize[0];
        var myDiv = document.getElementById('myDiv');
        var prev = addPrevButton();
        var dropDown = addDropDown();
        var next = addNextButton();
        myDiv.appendChild(prev);
        myDiv.appendChild(dropDown);
        myDiv.appendChild(next);
        resetIndexValue();
        toggleButton();
    }

    initGrid = function () {
        if(gridDef.pagging) {
            addPaging();
        }
        var myDiv = document.getElementById('myDiv');
        myTable = document.createElement("table");
        myDiv.appendChild(myTable);
    }

    setGridAttributes = function (height = '400px', width = '400px') {
        myTable.setAttribute("id", 'myTable');
        myTable.setAttribute("border", "1");
        myTable.setAttribute('height', height);
        myTable.setAttribute('width', width);
    }

    setGridHeader = function () {
        var tr = document.createElement('tr');
        myTable.appendChild(tr);
        for (var i = 0, len = gridDef.columns.length; i < len; i++) {
            var th = document.createElement('th');
            tr.appendChild(th);
            th.setAttribute('width', gridDef.columns[i].width);
            th.innerHTML = gridDef.columns[i].title;
            if (gridDef.columns[i].sorting) {
                th.onclick = function() {
                    var data = gridDef.datas;
                    //data.sort(sortTable(gridDef.columns[i].field));
                    data.sort(sortTable(gridDef.columns[this.cellIndex].field));
                    gridDef.datas = data;
                    resetIndexValue();
                    toggleButton();
                    reCreateGrid();
                }
            }

        }
        if (gridDef.editable) {
            var th = document.createElement('th');
            tr.appendChild(th);
            th.innerHTML = 'Action';
        }
    }

    reCreateGrid = function() {
        deleteGridRows();
        setGridData();

    }

    deleteGridRows = function () {
        var table = document.getElementById('myTable');
        var tableRows = table.rows.length;
        for(var i = tableRows-1; i > 0; i--) {
            table.deleteRow(i);
        }
    }

    setGridData = function () {
        for (var index = startIndex; index < endIndex; index++) {
            var tr = document.createElement('tr');
            myTable.appendChild(tr);
            var rowData = gridDef.datas[index];
            for (var columnData in rowData) {
                var td = document.createElement('td');
                tr.appendChild(td);
                td.innerHTML = rowData[columnData];
            }
            if (gridDef.editable) {
                addActionButton(tr);
            }
        }
    }

    addActionButton = function (tr) {
        var btnEdit = document.createElement('button');
        tr.appendChild(btnEdit);
        btnEdit.setAttribute("class", "edit");
        btnEdit.innerHTML = 'Edit';
        btnEdit.onclick = function() {
            var updateButton = this.parentElement.getElementsByClassName('update');
            updateButton[0].disabled = false;
            var content = this.parentElement.getElementsByTagName('td');
            for (var i = 0, len = content.length; i < len; i++) {
                content[i].setAttribute('contenteditable', true);
            }
        }

        var btnUpdate = document.createElement('button');
        tr.appendChild(btnUpdate);
        btnUpdate.setAttribute("class", "update");
        btnUpdate.setAttribute("disabled", true);
        btnUpdate.innerHTML = 'Update';
        btnUpdate.onclick = function() {
            var content = this.parentElement.getElementsByTagName('td');
            for (var i = 0, len = content.length; i < len; i++) {
                content[i].setAttribute('contenteditable', false);
            }
            this.disabled = true;
        }

    }

    return {
        init: function (gridDefinition) {
            gridDef = gridDefinition;
            initGrid();
            setGridAttributes();
            setGridHeader();
            setGridData();
        }
    };

})();

MyGrid.init({
    gridWidth: "600px",
    gridHeight: "400px",
    pagging: true,
    pageSize: [2, 4, 6, 8],
    editable: true,
    columns: [
        {
            "field": "name",
            "title": "Name",
            "width": "100px",
            "sorting": true,
            "editor": "textinput"
        },
        {
            "field": "age",
            "title": "Age",
            "width": "50px",
            "sorting": true,
            "editor": "textinput"
        },
        {
            "field": "city",
            "title": "City",
            "width": "100px",
            "sorting": false,
            "editor": "textinput"
        },
        {
            "field": "language",
            "title": "Language",
            "width": "150px",
            "sorting": false,
            "editor": "textinput"
        }
    ],
    datas: [
        { name: 'Prem Sagar', age: 22, city: 'Jaipur', language: 'Hindi' },
        { name: 'Sunil Kumar', age: 18, city: 'Jaipur', language: 'English' },
        { name: 'Prem Prakash', age: 21, city: 'Delhi', language: 'Hindi' },
        { name: 'Ashish Mallik', age: 23, city: 'Mumbai', language: 'English' },
        { name: 'Amrit Nandan', age: 22, city: 'Ranchi', language: 'English' },
        { name: 'Alokik Pathak', age: 25, city: 'Banglore', language: 'Hindi' },
        { name: 'Praveen Kumar', age: 20, city: 'Hazaribagh', language: 'Hindi' }
    ]
});