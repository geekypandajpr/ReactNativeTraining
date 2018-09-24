var MyGrid = (function () 
{
    var btnNumbers;
     var _myGrid;
     var  _defaultprop = {
        sorting: false,
        paging: false,
        inlineEditing: false,
        currentPageNumber : 1,
        currentPageSize   : 5,
        currentSortingKey : '',
        isPreviousActive  : true,
        isNextAcitve      : true,
        colums: [
            { "field": "firstname", "lable": "First Name", "width": "100px", "sorting": true },
            { "field": "lastname", "lable": "Last Name", "width": "100px", "sorting": true },
            { "field": "age", "lable": "Age", "width": "100px", "sorting": true }
                        
        ],
        data: [{ "firstname": "vinayak", "lastname": "Don", "age": "21" },
            { "firstname": "SHAILI", "lastname": "mittal", "age": "22" },
            { "firstname": "Rupali", "lastname": "pandaey", "age": "29" },
            { "firstname": "Swati", "lastname": "mohanty", "age": "27" },
             { "firstname": "SHAxxILI", "lastname": "mittal", "age": "22" },
            { "firstname": "Rupaffli", "lastname": "pandaey", "age": "29" },
            { "firstname": "Swati", "lastname": "mohanty", "age": "27" },
            { "firstname": "Swati", "lastname": "mohanty", "age": "27" },
            { "firstname": "SHAxxILI", "lastname": "mittal", "age": "22" },
           { "firstname": "Rupaffli", "lastname": "pandaey", "age": "29" },
           { "firstname": "Swati", "lastname": "mohanty", "age": "27" },
           { "firstname": "Swati", "lastname": "mohanty", "age": "27" },
           { "firstname": "SHAxxILI", "lastname": "mittal", "age": "22" },
          { "firstname": "Rupaffli", "lastname": "pandaey", "age": "29" },
          { "firstname": "Swati", "lastname": "mohanty", "age": "27" },
             { "firstname": "SvvvHAILI", "lastname": "mittal", "age": "22" },
            { "firstname": "Rupddali", "lastname": "pandaey", "age": "29" },
            { "firstname": "Swaddti", "lastname": "mohanty", "age": "27" },
             { "firstname": "SHAILI", "lastname": "mittal", "age": "22" },
            { "firstname": "dd", "lastname": "pandaey", "age": "29" },
            { "firstname": "vx", "lastname": "mohanty", "age": "27" },

    ]
    };
    var totalPages = Math.floor(_defaultprop.data.length / _defaultprop.currentPageSize);
    _createTable = function()
    {
        _myGrid = document.createElement("table");
        _myGrid.setAttribute('id', 'booksTable'); 
        _myGrid.cellSpacing = 0;
    }
    _createTableHeader = function()
    {
        var tHead =_myGrid.insertRow();
        for(var obj in _defaultprop.colums)
        {
            var th = tHead.insertCell(obj);
            th.setAttribute("class","mygrid_th");
            th.style.width = _defaultprop.colums[obj].width;
            th.innerHTML = _defaultprop.colums[obj].lable;
            th.setAttribute("id",_defaultprop.colums[obj].field);
            if(_defaultprop.colums[obj].sorting){
                th.onclick = function(){                   
                    var data = _defaultprop.data;
                    data.sort(_sortTable(this.id)); 
                    _reCreateTable(_applyPagination(data));
                }
            }
        }   
    };

    _applyPagination = function(totalData)
    {
        var startIndex = (_defaultprop.currentPageNumber - 1) * _defaultprop.currentPageSize;
        var endIndex = startIndex + _defaultprop.currentPageSize;
        
         totalPages += (_defaultprop.data.length % _defaultprop.currentPageNumber) > 0 ? 1 : 0;
         if(_defaultprop.currentPageNumber == totalPages) {
             endIndex = totalData.length - 1;
        }
        return totalData.slice(startIndex,endIndex);
    };

    _addTableData = function(filteredData){        
        for(var obj in filteredData)
        {
            var tBodyRow =_myGrid.insertRow();
            var rowData = _defaultprop.data[obj];
            for (var columnData in rowData) {
                var td = tBodyRow.insertCell();
                td.setAttribute("class","mygrid_td");            
                td.innerHTML = rowData[columnData];
            } 
            td = document.createElement('td');
            tBodyRow.appendChild(td);
            var btSave = document.createElement('input');
            btSave.setAttribute('type', 'button');    
            btSave.setAttribute('value', 'Save');
            btSave.setAttribute('id', 'Save' + obj);
            btSave.setAttribute('style', 'display:none;');
            btSave.setAttribute('onclick', 'Save(this)');       
            td.appendChild(btSave);
            tBodyRow.appendChild(td);
            var btUpdate = document.createElement('input');
            btUpdate.setAttribute('type', 'button');    
            btUpdate.setAttribute('value', 'Update');
            btUpdate.setAttribute('id', 'Edit' + obj);
            btUpdate.setAttribute('style', 'background-color:#44CCEB;');
            btUpdate.setAttribute('onclick', 'Update(this)');   
            td.appendChild(btUpdate);    
        }
    };
    Update = function (oButton) {
        var activeRow = oButton.parentNode.parentNode.rowIndex;
       // alert(activeRow);
        var tab = document.getElementById('booksTable').rows[activeRow];
        for (i = 0; i < _defaultprop.colums.length; i++) 
        {  
                var td = tab.getElementsByTagName("td")[i];
                var ele = document.createElement('input');      
                ele.setAttribute('type','text');
                ele.setAttribute('value',td.innerText);
                td.innerText = '';
                td.appendChild(ele);
        }
        var btSave = document.getElementById('Save' + (activeRow - 1));
        btSave.setAttribute('style', 'display:block; margin-left:30px; float:left; background-color:#2DBF64;');
        oButton.setAttribute('style', 'display:none;');
    };

    Save = function (oButton)
     {

        var activeRow = oButton.parentNode.parentNode.rowIndex;
        var tab = document.getElementById('booksTable').rows[activeRow];
        for (i = 0; i < _defaultprop.colums.length; i++) 
        {
            var td = tab.getElementsByTagName("td")[i];
            if (td.childNodes[0].getAttribute('type') == 'text' || td.childNodes[0].tagName == 'SELECT') 
            { 
                _defaultprop.data[(activeRow - 1)][_defaultprop.colums[i].field] = td.childNodes[0].value;   
            }
        }
        _deleteTableRows();
        _addTableData();
    };
    _sortTable = function(prop){
        return function(a, b) 
        {  
            if (a[prop] > b[prop]) {  
                return 1;  
            } else if (a[prop] < b[prop]) {  
                return -1;  
            }  
            return 0;  
        }   
    };

     _deleteTableRows = function(){
        var length = _myGrid.rows.length - 1;
        for(var i = length; i > 0 ; i--){
            _myGrid.deleteRow(i);
        }
    };
    _reCreateTable = function(filteredData){
        _deleteTableRows(filteredData.length);
        _addTableData(filteredData);
    };

    // toggleButton = function()
    //  {
    //     var prev = document.getElementsByClassName('previousButton')[0];
    //     var next = document.getElementsByClassName('nextButton')[0];
    //     if(startIndex == 0) {
    //         prev.disabled = true;
    //     } else {
    //         prev.disabled = false;
    //     }
    //     if(endIndex >= _defaultprop.data.length) {
    //         next.disabled = true;
    //     } else {
    //         next.disabled = false;
    //     }
    // }
 

    _prevButton = function() 
    {
        var prevButton = document.createElement('button');
        _myGrid.appendChild(prevButton);
        prevButton.setAttribute("disabled", true);
        prevButton.setAttribute('id', 'btn_prev');
        prevButton.innerHTML = 'Previous';
        prevButton.onclick = function() {
            showPrevPage();
        }
        return prevButton;
    }

    _nextButton = function() 
    {
        var nextbutton = document.createElement('button');
        nextbutton.setAttribute('id', 'btn_next');
        nextbutton.innerHTML = 'Next';
        nextbutton.onclick = function() {
            showNextPage();
        }
        return nextbutton;
    }

            
    return {
        init: function (jsonOjbect) 
        {

            window.onload = function() {
                document.getElementById("page_number").onchange = function(){
                    _defaultprop.currentPageSize = this.value;
                    alert( _defaultprop.currentPageSize);
                    _defaultprop.currentPageNumber = 1;
                    _reCreateTable(_applyPagination(_defaultprop.data));
                };
    
    
                document.getElementById("btn_prev").onclick = function()
                {
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
            };
             _createTable();
            _createTableHeader();
            _addTableData(_applyPagination(_defaultprop.data));
            document.getElementById("container").appendChild(_myGrid);
        }
    };  
    

})();
MyGrid.init();




