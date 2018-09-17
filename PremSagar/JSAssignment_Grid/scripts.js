var MyGrid = (function () {
    var myTable;
    var gridDef = [];

    sortTable = function (props) {
        return function (x, y) {
            return ((x[props] === y[props]) ? 0 : ((x[props] > y[props]) ? 1 : -1));
        }
    }

    initGrid = function (myDivId) {
        var myDiv = document.getElementById(myDivId);
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
        for (var data in gridDef.datas) {
            var tr = document.createElement('tr');
            myTable.appendChild(tr);
            var rowData = gridDef.datas[data];
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
            initGrid('myDiv');
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
    pageSize: [5, 10, 15, 20],
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
            "editor": "select"
        }
    ],
    datas: [
        { name: 'Prem Sagar', age: 22, city: 'Jaipur', language: 'Hindi' },
        { name: 'Sunil Kumar', age: 18, city: 'Jaipur', language: 'English' },
        { name: 'Prem Prakash', age: 21, city: 'Delhi', language: 'Hindi' },
        { name: 'Ashish Mallik', age: 23, city: 'Mumbai', language: 'English' },
        { name: 'Amrit Nandan', age: 22, city: 'Ranchi', language: 'English' },
        { name: 'Alokik Pathak', age: 25, city: 'Banglore', language: 'Hindi' }
    ]
});