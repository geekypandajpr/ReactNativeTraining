var MyGrid = (function () {
    var _myGrid;
    var _defaultprop = {
        sorting: false,
        paging: false,
        editable: true,
        pageSize:[3,5,8,10,14,17],
        currentPageNumber : 1,
        currentPageSize   : 5,
        currentSortingKey : '',
        isPreviousActive  : true,
        isNextAcitve      : true,
        columns: [
            { "field": "firstname", "label": "First Name", "width": "100px", "sorting": true },
            { "field": "lastname", "label": "Last Name", "width": "100px", "sorting": true },
            { "field": "age", "label": "Age", "width": "100px", "sorting": true }

        ],
        data: [{ "firstname": "vinayak", "lastname": "sharma", "age": "21" },
        { "firstname": "SHAILI", "lastname": "mittal", "age": "22" },
        { "firstname": "Rupali", "lastname": "pandaey", "age": "29" },
        { "firstname": "Swati", "lastname": "mohanty", "age": "20" },
        { "firstname": "vxy", "lastname": "sharma", "age": "21" },
        { "firstname": "SHA", "lastname": "mittal", "age": "22" },
        { "firstname": "Rupa", "lastname": "pandaey", "age": "29" },
        { "firstname": "Swa", "lastname": "mohanty", "age": "20" },
        { "firstname": "Abc", "lastname": "sharma", "age": "21" },
        { "firstname": "Xyz", "lastname": "mittal", "age": "22" },
        { "firstname": "Pqr", "lastname": "pandaey", "age": "29" },
        { "firstname": "Lmn", "lastname": "mohanty", "age": "20" },
        { "firstname": "Mama", "lastname": "sharma", "age": "21" },
        { "firstname": "Hejal", "lastname": "mittal", "age": "22" },
        { "firstname": "Paavni", "lastname": "pandaey", "age": "29" },
        { "firstname": "Nihar", "lastname": "mohanty", "age": "20" },
        { "firstname": "Supreet", "lastname": "mohanty", "age": "20" }
        ]
    };

    _createSearchBar = function () {
        var myData = document.getElementById("showData");
        var searchInput = document.createElement("input");
        myData.appendChild(searchInput);
        searchInput.setAttribute("class", "input");
        searchInput.setAttribute("placeholder", "Search here...");
        searchInput.setAttribute("id", "searchData");
        searchInput.onclick = function(){
         var input, filter, table, tr, td, i;
         input = document.getElementById("searchData");
         filter = input.value.toUpperCase();
         table = document.getElementById("myTable");
         var tr = document.createElement("tr");
         table.appendChild(tr);
         tr = table.getElementsByTagName("tr");
         for (i = 0; i < tr.length; i++) {
             td = tr[i].getElementsByTagName("td")[0];
             if (td) {
                 if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                     tr[i].style.display = "";
                 } else {
                     tr[i].style.display = "none";
                 }
             }
         }
        }
    }

    _addPagination = function(){
        var myData = document.getElementById("showData");
        var prevbtn = document.createElement("button");
        myData.appendChild(prevbtn);
        prevbtn.innerHTML = "Previous";
        prevbtn.setAttribute("id","btn_prev");
        var dropdown = document.createElement("select");
        myData.appendChild(dropdown);
        dropdown.setAttribute("id","page_number");
        for(var i = 0, len = _defaultprop.pageSize.length; i < len; i++) {
            var options = document.createElement('option');
            options.innerHTML = _defaultprop.pageSize[i];
            dropdown.appendChild(options);
        }
        var nxtbtn = document.createElement("button");
        myData.appendChild(nxtbtn);
        nxtbtn.innerHTML = "Next";
        nxtbtn.setAttribute("id","btn_next");
        document.getElementById("page_number").onchange = function(){
            _defaultprop.currentPageSize = this.value;
            _defaultprop.currentPageNumber = 1;
            _reCreateTable(_applyPagination(_defaultprop.data));
        };
        document.getElementById("btn_prev").onclick = function(){
            if(_defaultprop.currentPageNumber > 1) {
                _defaultprop.currentPageNumber -= 1;
            }

            _reCreateTable(_applyPagination(_defaultprop.data));

        };

        document.getElementById("btn_next").onclick = function(){
            var totalPages = Math.floor(_defaultprop.data.length / _defaultprop.currentPageSize);
            totalPages += (_defaultprop.data.length % _defaultprop.currentPageNumber) > 0 ? 1 : 0;
            if(_defaultprop.currentPageNumber < totalPages) {
                _defaultprop.currentPageNumber += 1;
            }

            _reCreateTable(_applyPagination(_defaultprop.data));
        };
    }

    _applyPagination = function(totalData){
        var startIndex = (_defaultprop.currentPageNumber - 1) * _defaultprop.currentPageSize;
        var endIndex = startIndex + _defaultprop.currentPageSize - 1;
        var totalPages = Math.floor(_defaultprop.data.length / _defaultprop.currentPageSize);
        totalPages += (_defaultprop.data.length % _defaultprop.currentPageNumber) > 0 ? 1 : 0;
        if(_defaultprop.currentPageNumber == totalPages) {
            endIndex = totalData.length - 1;
        }
        return totalData.slice(startIndex,endIndex);
    };

    _createTable = function () {
        _myGrid = document.createElement("table");
        _myGrid.cellSpacing = 0;
        _myGrid.setAttribute("border", "3");
        _myGrid.setAttribute("id", "myTable");

    }
    _createTableHeader = function () {
        var tHead = _myGrid.insertRow();
        for (var obj in _defaultprop.columns) {
            var th = tHead.insertCell(obj);
            th.setAttribute("class", "mygrid_th");
            th.style.width = _defaultprop.columns[obj].width;
            th.innerHTML = _defaultprop.columns[obj].label;
            th.setAttribute("id", _defaultprop.columns[obj].field);
            if (_defaultprop.columns[obj].sorting) {
                th.onclick = function () {
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
    _deleteTableRows = function () {
        var length = _myGrid.rows.length - 1;
        for (var i = length; i > 0; i--) {
            _myGrid.deleteRow(i);
        }
    }
    _reCreateTable = function (filteredData) {
        _deleteTableRows(filteredData.length);
        _addTableData(filteredData);
    }
    _addTableData = function (filteredData) {
        for (var obj in filteredData) {
            var tBodyRow = _myGrid.insertRow();
            var rowData = _defaultprop.data[obj];
            for (var columnData in rowData) {                
                var td = tBodyRow.insertCell();
                td.setAttribute("class", "mygrid_td");
                td.innerHTML = rowData[columnData];
                if (_defaultprop.editable) {
                    td.ondblclick = function () {
                        var data = this.parentElement.getElementsByTagName('td');
                        for (var i = 0, len = data.length; i < len; i++) {
                            data[i].setAttribute('contenteditable', true);
                        }
                        _editTableData(_applyPagination(_defaultprop.data));
                        //_reCreateTable();
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
        editButton.onclick = function () {
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
           // console.log(document.getElementById("b"));
            console.log("hello");
          /*  document.getElementById("page_number").onchange = function(){

                _defaultprop.currentPageSize = this.value;
                _defaultprop.currentPageNumber = 1;
                _reCreateTable(_applyPagination(_defaultprop.data));
            };


            document.getElementById("btn_prev").onclick = function(){
                if(_defaultprop.currentPageNumber > 1) {
                    _defaultprop.currentPageNumber -= 1;
                }

                _reCreateTable(_applyPagination(_defaultprop.data));

            };

            document.getElementById("btn_next").onclick = function(){
                var totalPages = Math.floor(_defaultprop.data.length / _defaultprop.currentPageSize);
                totalPages += (_defaultprop.data.length % _defaultprop.currentPageNumber) > 0 ? 1 : 0;
                if(_defaultprop.currentPageNumber < totalPages) {
                    _defaultprop.currentPageNumber += 1;
                }

                _reCreateTable(_applyPagination(_defaultprop.data));
            };*/
     
            _createSearchBar();            
            _createTable();
            _createTableHeader();
            _addTableData(_applyPagination(_defaultprop.data));            
            document.getElementById("showData").appendChild(_myGrid);
            _addPagination();
        }
    };

})();
MyGrid.init();