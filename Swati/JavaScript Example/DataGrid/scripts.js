var MyGrid = (function () {
   var _myGrid;
   var  _defaultprop = {
        sorting: false,
        paging: false,
        editable: true,
        columns: [
            { "field": "firstname", "label": "First Name", "width": "100px", "sorting": true  },
            { "field": "lastname", "label": "Last Name", "width": "100px", "sorting": true },
            { "field": "age", "label": "Age", "width": "100px", "sorting": true }
                        
        ],
        data: [{ "firstname": "vinayak", "lastname": "sharma", "age": "21" },
            { "firstname": "SHAILI", "lastname": "mittal", "age": "22" },
            { "firstname": "Rupali", "lastname": "pandaey", "age": "29" },
            { "firstname": "Swati", "lastname": "mohanty", "age": "20" }
    ]
    };

    _createSearchBar = function () {
        var searchInput = document.createElement("input");
        showData.appendChild(searchInput);
        searchInput.setAttribute("class", "input");
        searchInput.setAttribute("placeholder", "Search here...");
        searchInput.setAttribute("id", "searchData");
       /* var input, filter, table, tr, td, i;
        input = document.getElementById("searchData");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("td");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }*/
    }
    

    _createTable = function()
    {
        _myGrid = document.createElement("table");
        _myGrid.cellSpacing=0;
        _myGrid.setAttribute("border","3");
        _myGrid.setAttribute("id","myTable");
        
    }
    _createTableHeader = function()
    {
        var tHead =_myGrid.insertRow();
        for(var obj in _defaultprop.columns)
        {
            var th = tHead.insertCell(obj);
            th.setAttribute("class","mygrid_th");
            th.style.width = _defaultprop.columns[obj].width;
            th.innerHTML = _defaultprop.columns[obj].label;
            th.setAttribute("id",_defaultprop.columns[obj].field);
            if(_defaultprop.columns[obj].sorting){
                th.onclick = function(){                   
                    var data = _defaultprop.data;
                    data.sort(_sortTable(this.id));                   
                    _reCreateTable();
                }
            }
        }   
    }
    _sortTable = function(prop){
        return function(a, b) {  
            if (a[prop] > b[prop]) {  
                return 1;  
            } else if (a[prop] < b[prop]) {  
                return -1;  
            }  
            return 0;  
        }   
    }
    _deleteTableRows = function(){
        var length = _defaultprop.data.length;
        for(var i = length; i>0 ; i--){
            _myGrid.deleteRow(i);
        }
    }
    _reCreateTable = function(){
        _deleteTableRows();
        _addTableData();
    }
    _addTableData = function(){        
        for(var obj in _defaultprop.data)
        {
            var tBodyRow =_myGrid.insertRow();
            var rowData = _defaultprop.data[obj];
            for (var columnData in rowData) {
                var td = tBodyRow.insertCell();
                td.setAttribute("class","mygrid_td");                           
                td.innerHTML = rowData[columnData];               
                if (_defaultprop.editable) {
                    td.ondblclick = function () {
                        var data = this.parentElement.getElementsByTagName('td');
                        for (var i = 0, len = data.length; i < len; i++) {
                            data[i].setAttribute('contenteditable', true);
                        }
                        _editTableData();
                    }
                    //alert("hello");
                }
            }           
        }
    }
    _editTableData = function () {
      /*  var data = this.parentElement.getElementsByTagName('td');
        for (var i = 0, len = data.length; i < len; i++) {
            data[i].setAttribute('contenteditable', true);
        }*/
        var editButton = document.createElement("button");
        _myGrid.appendChild(editButton);
        editButton.setAttribute("class", "editBtn");
        editButton.innerHTML = "Save";
        editButton.onclick = function() {
            var data = this.parentElement.getElementsByTagName('td');
            for (var i = 0, len = data.length; i < len; i++) {
                data[i].setAttribute('contenteditable', false);                             
            }
            _myGrid.removeChild(editButton);
            //alert("hello");
        }
    }

    return {
        init: function (jsonOjbect) {
            _createSearchBar();
            _createTable();
            _createTableHeader();
            _addTableData();
            
            document.getElementById("showData").appendChild(_myGrid);
        }
    };

})();
MyGrid.init();