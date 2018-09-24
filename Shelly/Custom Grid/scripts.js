var MyGrid = (function () {
    var _myGrid;
    var _defaultprop = {
        sorting: false,
        paging: true,
        currentPageNumber : 1,
        currentPageSize   : 5,
        currentSortingKey : '',
        isPreviousActive  : true,
        isNextAcitve      : true,
        pageSize: [5, 10, 15,20],
        inlineEditing: false,
        colums: [
            { "field": "firstname", "lable": "First Name", "width": "100px", "sorting": true },
            { "field": "lastname", "lable": "Last Name", "width": "100px", "sorting": true },
            { "field": "age", "lable": "Age", "width": "100px", "sorting": true },
            { "field": "Editing", "lable": "Editing", "width": "100px" }
        ],
        data: [
        { "firstname": "shaili", "lastname": "Mittal", "age": "21" },
        { "firstname": "vinayak", "lastname": "Sharma", "age": "22" },
        { "firstname": "Rupali", "lastname": "pandaey", "age": "29" },
        { "firstname": "Swati", "lastname": "mohanty", "age": "27" },
        { "firstname": "prem", "lastname": "choudary", "age": "27" },

        { "firstname": "shaili 1", "lastname": "Mittal", "age": "21" },
        { "firstname": "vinayak 1", "lastname": "Sharma", "age": "22" },
        { "firstname": "Rupali 1", "lastname": "pandaey", "age": "29" },
        { "firstname": "Swati 1", "lastname": "mohanty", "age": "27" },
        { "firstname": "Swatids 1", "lastname": "mohanty", "age": "27" },

        { "firstname": "vinayak 2", "lastname": "Sharma", "age": "22" },
        { "firstname": "Rupali 2", "lastname": "pandaey", "age": "29" },
        { "firstname": "Swati 2", "lastname": "mohanty", "age": "27" },
        { "firstname": "Swatids 2", "lastname": "mohanty", "age": "27" },

        { "firstname": "vinayak 3", "lastname": "Sharma", "age": "22" },
        { "firstname": "Rupali 3", "lastname": "pandaey", "age": "29" },
        { "firstname": "Swati 3", "lastname": "mohanty", "age": "27" },
        { "firstname": "Swatids 3", "lastname": "mohanty", "age": "27" },
        
        
        ]
    };

    _createTable = function () {
        

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
                    _reCreateTable(_applyPagination(data));
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
    _deleteTableRows = function(){

        var table = document.getElementById('myTable');
        var tableRows = table.rows.length;
        for (var i = tableRows - 1; i > 0; i--) {
            table.deleteRow(i);
        }
    };

    _reCreateTable = function(filteredData){
        _deleteTableRows();
        _addTableData(filteredData);
    };

    _applyPagination = function(totalData){
        var startIndex = (_defaultprop.currentPageNumber - 1) * _defaultprop.currentPageSize;
        var endIndex = startIndex + _defaultprop.currentPageSize ;
        var totalPages = Math.floor(_defaultprop.data.length / _defaultprop.currentPageSize);
        totalPages += (_defaultprop.data.length % _defaultprop.currentPageSize) > 0 ? 1 : 0;
        if(_defaultprop.currentPageNumber == totalPages) {
            endIndex = totalData.length;
        }
        return totalData.slice(startIndex,endIndex);
    };



    _addTableData = function (filteredData) 
    {
       
        for (var obj in filteredData) 
            {
            var row = document.createElement('tr');
            row.setAttribute("id", "row1");
            _myGrid.appendChild(row);
            var rowData = filteredData[obj];
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
        init: function (jsonOjbect) 

        {
               document.getElementById("page_number").onchange = function(){
                _defaultprop.currentPageSize = this.value;               
                 _defaultprop.currentPageNumber=1;
                 
               _reCreateTable(_applyPagination(_defaultprop.data));
            };

            var first = document.createElement("button");
            first.innerHTML = "First";
            var div = document.getElementById("container");
            div.appendChild(first);
            first.onclick = function()
             {
                _defaultprop.currentPageNumber = 1;
             _reCreateTable(_applyPagination(_defaultprop.data));

            };

            var prev = document.createElement("button");
            prev.innerHTML = "previous";
            var div = document.getElementById("container");
            div.appendChild(prev);
            prev.onclick = function()
            {
                    if(_defaultprop.currentPageNumber  > 1) {
                   _defaultprop.currentPageNumber -= 1;
                   }
             _reCreateTable(_applyPagination(_defaultprop.data));
            };

     
            var totalPages = Math.floor(_defaultprop.data.length / _defaultprop.currentPageSize);
            totalPages += (_defaultprop.data.length % _defaultprop.currentPageSize) > 0 ? 1 : 0;
            for(var i=1; i<=totalPages; i++)
            {
                var Btn = document.createElement("button");
                Btn.innerHTML = i;
                div.appendChild(Btn);
                Btn.setAttribute("id","Btns")
                Btn.onclick = function(){
                   // this.style.backgroundColor =  "#0000ff";
                    _defaultprop.currentPageNumber = this.innerHTML;
                    _BtnColor();
                    _reCreateTable(_applyPagination(_defaultprop.data));
                }             
             }

             _BtnColor = function()
             {
                 var BtnColour = document.getElementById("Btns");
                 BtnColour.style.background = "#0000ff";
             }

            var next= document.createElement("button");
            next.innerHTML = "Next";
            var div = document.getElementById("container");
            div.appendChild(next);
            next.onclick = function()
            {
                var totalPages = Math.floor(_defaultprop.data.length / _defaultprop.currentPageSize);
                totalPages += (_defaultprop.data.length % _defaultprop.currentPageSize) > 0 ? 1 : 0;
                if (_defaultprop.currentPageNumber < totalPages) {
                    _defaultprop.currentPageNumber += 1;
                }
                _reCreateTable(_applyPagination(_defaultprop.data));

            };

            var Last = document.createElement("button");
            Last.innerHTML = "Last";
            var div = document.getElementById("container");
            div.appendChild(Last);
            Last.onclick = function() {
               _defaultprop.currentPageNumber = totalPages;
                
             _reCreateTable(_applyPagination(_defaultprop.data));

            };

               _createTable();
            _createTableHeader();
            _addTableData(_applyPagination(_defaultprop.data));
            document.getElementById("container").appendChild(_myGrid);
       
    }
    };  
})();
MyGrid.init();