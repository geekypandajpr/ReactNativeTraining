var MyGrid = (function () {
    var _myGrid;
    var _defaultprop = {
        sorting: false,
        paging: true,
        pageSize: [5, 10, 15,20],
        inlineEditing: false,
        colums: [
            { "field": "firstname", "lable": "First Name", "width": "100px", "sorting": true },
            { "field": "lastname", "lable": "Last Name", "width": "100px", "sorting": true },
            { "field": "age", "lable": "Age", "width": "100px", "sorting": true },
            { "field": "Editing", "lable": "Editing", "width": "100px" }

        ],
        data: [{ "firstname": "shaili", "lastname": "Mittal", "age": "21" },
        { "firstname": "vinayak", "lastname": "Sharma", "age": "22" },
        { "firstname": "Rupali", "lastname": "pandaey", "age": "29" },
        { "firstname": "Swati", "lastname": "mohanty", "age": "27" },
        { "firstname": "prem", "lastname": "choudary", "age": "27" },
        { "firstname": "shaili", "lastname": "Mittal", "age": "21" },
        { "firstname": "vinayak", "lastname": "Sharma", "age": "22" },
        { "firstname": "Rupali", "lastname": "pandaey", "age": "29" },
        { "firstname": "Swati", "lastname": "mohanty", "age": "27" }
        ]
    };

    _paginator = function() 
    {
        var buttonPrev = document.createElement('button');
        buttonPrev.innerHTML = 'Prev';
        var div = document.getElementById("container");
        div.appendChild(buttonPrev);
        buttonPrev.onclick = function() {
            console.log('next');
        } 

        var buttonNext= document.createElement('button');
        buttonNext.innerHTML = 'Next';
        var div =  document.getElementById("container");
        div.appendChild(buttonNext);
        buttonNext.onclick = function() {
            console.log('next');
        } 
    }
    _createTable = function () {
        if(_defaultprop.paging) {
            _paginator();
        }
      
        _myGrid = document.createElement("table");
        _myGrid.setAttribute("border", "1");
        _myGrid.setAttribute("id", "myTable");
        _myGrid.cellSpacing = 0;
    }
  
    _createTableHeader = function () {
       
        var tHead = _myGrid.insertRow();
        for (var obj in _defaultprop.colums)
         {
            var th = tHead.insertCell(obj);
            th.setAttribute("class", "mygrid_th");
            th.style.width = _defaultprop.colums[obj].width;
            th.innerHTML = _defaultprop.colums[obj].lable;
            th.setAttribute("id", _defaultprop.colums[obj].field);
            if (_defaultprop.colums[obj].sorting) 
            {
                th.onclick = function ()
                {
                    var data = _defaultprop.data;
                    data.sort(_sortTable(this.id));
                    _reCreateTable();
                }
            }
        }
    }
    

    _sortTable = function (prop) {
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            } else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        }
    }
    _deleteTableRows = function () {
        var length = _defaultprop.data.length;
        for (var i = length; i > 0; i--) {
            _myGrid.deleteRow(i);
        }
    }
    _reCreateTable = function () {
        _deleteTableRows();
        _addTableData();
    }

    _addTableData = function () 
    {
       
        for (var obj in _defaultprop.data) 
            {
            var row = document.createElement('tr');
            row.setAttribute("id", "row1");
            _myGrid.appendChild(row);
            var rowData = _defaultprop.data[obj];
            for (var columnData in rowData)
                {
                    var cell = document.createElement('td');
                    row.appendChild(cell);
                    cell.innerHTML = rowData[columnData];
                }


            var buttonEdit = document.createElement("button");
            buttonEdit.innerHTML = "Edit";
            row.appendChild(buttonEdit);           
            buttonEdit.onclick = function ()
                {
                var list = this.parentElement.getElementsByTagName("td");
                for (var i = 0; i < list.length; i++) 
                {
                    var SaveButton = this.parentElement.getElementsByClassName("Saves");
                    SaveButton[0].disabled = false;
                    var value = list[i].innerHTML;
                    list[i].innerHTML = "<input type='text'  value='" + value + "'  id='text'>";
                    
                }
                this.disabled = true;
                
            }

            var buttonSave = document.createElement("button");
            row.appendChild(buttonSave);
            buttonSave.setAttribute("class","Saves");
            buttonSave.innerHTML = "Save";
            buttonSave.disabled = true;
            buttonSave.onclick = function () 
            {
                
                var edited = document.getElementsByTagName("input");
                var arr = [];
                for (var i = 0; i < edited.length; i++)
                {
                    arr[i] = edited[i].value;
                }
                var list1 = this.parentElement.getElementsByTagName("td");
                for (var j = 0; j < list1.length; j++) 
                {
                    list1[j].innerHTML = arr[j];
                }  
                this.disabled = true;           
            }

            var buttonDelete = document.createElement("button");
            buttonDelete.innerHTML = "Delete";
            row.appendChild(buttonDelete);
            buttonDelete.onclick = function ()
                {
                    document.getElementById("row1").outerHTML = "";
                }
            }  
    }

    return {
        init: function (jsonOjbect) {
            _createTable();
            _createTableHeader();
            _addTableData();
            document.getElementById("container").appendChild(_myGrid);
            document.getElementById("container2")
        }
    };
})();
MyGrid.init();