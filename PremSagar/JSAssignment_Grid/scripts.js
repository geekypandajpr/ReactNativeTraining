var tableData = [
    { name : 'Prem Sagar',     age : 22,  city : 'Jaipur',    language : ['Hindi', 'English']},
    { name : 'Sunil Kumar',    age : 18,  city : 'Jaipur',    language : ['Hindi', 'English']},
    { name : 'Prem Prakash',   age : 21,  city : 'Delhi' ,    language : ['Hindi', 'English']},
    { name : 'Ashish Mallik',  age : 23,  city : 'Mumbai',    language : ['Hindi', 'English']},
    { name : 'Amrit Nandan',   age : 22,  city : 'Ranchi',    language : ['Hindi', 'English']},
    { name : 'Alokik Pathak',  age : 25,  city : 'Banglore',  language : ['Hindi', 'English']},
];

//MODULER DESIGN
var MyGrid = (function () {

    var gridDefinition = [];

    sortTable = function (index) {
        var myTable = document.getElementById("myTable");
        var isSwitching = true;
        while (isSwitching) {
            isSwitching = false;
            var rows = myTable.rows;
            for (var i = 1, len = rows.length - 1; i < len; i++) {
                var row1 = rows[i].getElementsByTagName("td")[index];
                var row2 = rows[i + 1].getElementsByTagName("td")[index];
                if (row1.innerHTML.toUpperCase() > row2.innerHTML.toUpperCase()) {
                    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    isSwitching = true;
                }
            }
        }
    }

    initGrid = function (myDivId) {
        var myDiv = document.getElementById(myDivId);
        var myTable = document.createElement("table");
        myDiv.appendChild(myTable);
        return myTable;
    }

    setGridAttributes = function (tableRef, height = '400px', width = '400px') {
        tableRef.setAttribute("id", 'myTable');
        tableRef.setAttribute("border", "5px");
        tableRef.setAttribute('height', height);
        tableRef.setAttribute('width', width);
    }

    setGridHeader = function (tableRef, headerDef) {
        var tr = document.createElement('tr');
        for (var i = 0, len = headerDef.columns.length; i < len; i++) {
            var th = document.createElement('th');
            th.setAttribute('width', headerDef.columns[i].width);
            var text = document.createTextNode(headerDef.columns[i].title);
            th.appendChild(text);
            if(headerDef.columns[i].sorting) {
                th.setAttribute('onclick','sortTable(this.cellIndex)');
            }
            tr.appendChild(th);
        }
        if (headerDef.editable) {
            var th = document.createElement('th');
            var text = document.createTextNode('Action');
            th.appendChild(text);
            tr.appendChild(th);
        }
        tableRef.appendChild(tr);
    }

    setGridData = function (tableRef, jsonData) {
        for (var i = 0, len = jsonData.length; i < len; i++) {
            var tr = document.createElement('tr');
            tableRef.appendChild(tr);
            for (var j = 0, len1 = gridDefinition.columns.length; j < len1; j++) {
                if(gridDefinition.columns[j].editor == 'select') {
                    var td = document.createElement('td');
                    var select = document.createElement('select');
                    select.disabled = true;
                    for(var k = 0; k < Object.values((jsonData[i]))[j].length; k++) {
                        var option = document.createElement('option');
                        var text = document.createTextNode((Object.values(jsonData[i]))[j][k]);
                        option.appendChild(text);
                        select.appendChild(option);
                    }
                    td.appendChild(select);
                    tr.appendChild(td);
                } else {
                    var td = document.createElement('td');
                    var text = document.createTextNode((Object.values(jsonData[i]))[j]);
                    td.appendChild(text);
                    tr.appendChild(td);
                }
            }
            if (gridDefinition.editable) {
                addActionButton(tr);
            }
        }
    }

    addActionButton = function (tr) {
        var btnEdit = document.createElement('button');
        btnEdit.setAttribute("class", "edit");
        var textEdit = document.createTextNode('Edit');
        btnEdit.appendChild(textEdit);

        var btnUpdate = document.createElement('button');
        btnUpdate.setAttribute("class", "update");
        btnUpdate.setAttribute("disabled", true);
        var textUpdate = document.createTextNode('Update');
        btnUpdate.appendChild(textUpdate);

        tr.appendChild(btnEdit);
        tr.appendChild(btnUpdate);

        onEditButtonClick();
        onUpdateButtonClick();
    }

    onEditButtonClick = function () {
        var buttons = document.getElementsByClassName('edit');
        for (var j = 0, length = buttons.length; j < length; j++) {
            buttons[j].onclick = function () {
                var updateButton = this.parentElement.getElementsByClassName('update');
                updateButton[0].disabled = false;

                var content = this.parentElement.getElementsByTagName('td');
                for(var i = 0, len = content.length; i < len; i++) {
                    content[i].setAttribute('contenteditable', true);
                }

                var dropdows = this.parentElement.getElementsByTagName('select');
                for(var j=0;j<dropdows.length;j++) {
                    dropdows[j].removeAttribute('disabled');
                }

            }
        }
    }

    onUpdateButtonClick = function () {
        var buttons = document.getElementsByClassName('update');
        for (var j = 0, length = buttons.length; j < length; j++) {
            buttons[j].onclick = function () {
                var content = this.parentElement.getElementsByTagName('td');
                for(var i = 0, len = content.length; i < len; i++) {
                    content[i].setAttribute('contenteditable', false);
                }

                var dropdows = this.parentElement.getElementsByTagName('select');
                for(var j=0;j<dropdows.length;j++) {
                    dropdows[j].disabled = true;
                }

                this.disabled = true;
            }
        }
    }


    return {
        init: function (gridDef) {
            gridDefinition = gridDef;
            var tableRef = initGrid('myDiv');
            setGridAttributes(tableRef, gridDef.gridHeight, gridDef.gridWidth);
            setGridHeader(tableRef, gridDef);
            return tableRef;
        },
        setData: function (tableRef, datas) {
            setGridData(tableRef, datas);
        }
    };

})();

var ref = MyGrid.init({
    gridWidth: "600px",
    gridHeight: "400px",
    columns: [
        {
            "field"  : "name",
            "title"  : "Name",
            "width"  : "100px",
            "sorting": true,
            "editor" : "textinput"
        },
        {
            "field"  : "age",
            "title"  : "Age",
            "width"  : "50px",
            "sorting": true,
            "editor" : "textinput"
        },
        {
            "field"  : "city",
            "title"  : "City",
            "width"  : "100px",
            "sorting": false,
            "editor" : "textinput"
        },
        {
            "field"  : "language",
            "title"  : "Language",
            "width"  : "150px",
            "sorting": false,
            "editor" : "select"
        }
    ],
    pagging: true,
    pageSize: [5, 10, 15, 20],
    editable: true
});

MyGrid.setData(ref, tableData);