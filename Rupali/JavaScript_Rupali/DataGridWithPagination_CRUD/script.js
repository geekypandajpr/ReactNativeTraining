var MyGrid = (function () 
{
    var _myGrid;
    var _tBodyRow;
  //  no_of_pages = Math.ceil( _defaultprop.maxPageSize/_defaultprop.currentPageSize),
    results = [];
    var  _defaultprop = 
    {
        sorting: false,
        paging: false,
        inlineEditing: false,
        currentPageNumber : 1,
        currentPageSize   : 5,
        maxPageSize: 100,
        currentSortingKey : '',
        isPreviousActive  : true,
        isNextAcitve      : true,
        colums: [
            { "field": "firstname", "label": "First Name", "width": "100px", "sorting": true, "isPreviousActive":true, "isNextAcitve" :true },
            { "field": "lastname", "label": "Last Name", "width": "100px", "sorting": true, "isPreviousActive":true, "isNextAcitve" :true  },
            { "field": "age", "label": "Age", "width": "100px", "sorting": true,  "isPreviousActive":true, "isNextAcitve" :true   }                
        ],
        data: [{ "firstname": "Vinayak", "lastname": "Sharma", "age": "21" },
            { "firstname": "Shaili", "lastname": "Mittal", "age": "22" },
            { "firstname": "Rupali", "lastname": "Pandey", "age": "19" },
            { "firstname": "Swati", "lastname": "Mohanty", "age": "17" },
            { "firstname": "Rupali", "lastname": "pandaey", "age": "29" },
            { "firstname": "Swati", "lastname": "mohanty", "age": "27" },
             { "firstname": "SHAxxILI", "lastname": "mittal", "age": "22" },
            { "firstname": "Rupaffli", "lastname": "pandaey", "age": "29" },
        ]
    };
    _createTable = function()
    {
        _myGrid = document.createElement("table");
        _myGrid.setAttribute("border","1");
        _myGrid.setAttribute("id", "TraineeTable"); 
        _myGrid.cellSpacing=0;
    };
    _createTableHeader = function()
    {
        var tHead =_myGrid.insertRow();
        for(var obj in _defaultprop.colums)
        {
            var th = tHead.insertCell(obj);
            th.setAttribute("class","mygrid_th");
            th.style.width = _defaultprop.colums[obj].width;
            th.innerHTML = _defaultprop.colums[obj].label;
            th.setAttribute("id",_defaultprop.colums[obj].field);
            if(_defaultprop.colums[obj].sorting)
            {
                th.onclick = function()
                {                   
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
        var endIndex = startIndex + _defaultprop.currentPageSize - 1;
        var totalPages = Math.floor(_defaultprop.data.length / _defaultprop.currentPageSize);
        totalPages += (_defaultprop.data.length % _defaultprop.currentPageNumber) > 0 ? 1 : 0;
        if(_defaultprop.currentPageNumber == totalPages) 
        {
            endIndex = totalData.length - 1;
        }
        return totalData.slice(startIndex,endIndex);
    };
    _sortTable = function(prop)
    {
        return function(a, b) {  
            if (a[prop] > b[prop]) 
            {  
                return 1;  
            } 
            else if (a[prop] < b[prop]) 
            {  
                return -1;  
            }  
            return 0;  
        }   
    };
    _deleteTableRows = function()
    {
        var length = _defaultprop.data.length;
        for(var i = length; i>0 ; i--)
        {
            _myGrid.deleteRow(i);
        }
    };
    _reCreateTable = function(filteredData)
    {
        _deleteTableRows(filteredData.length);
        _addTableData(filteredData);
    };
  
    _addTableData = function(filteredData)
    {        
        for(var obj in filteredData)
        {
            _tBodyRow =_myGrid.insertRow();
            var rowData = _defaultprop.data[obj];
          
            for (var columnData in rowData)
            {
                var tabCell = _tBodyRow.insertCell();
                tabCell.setAttribute("class","mygrid_td");            
                tabCell.innerHTML = rowData[columnData]; 
            } 

            this.td = document.createElement('td');
            _tBodyRow.appendChild(this.td);

            var btSave = document.createElement('input');
            btSave.setAttribute('type','button');    
            btSave.setAttribute('value','Save');
            btSave.setAttribute('id','Save'+obj);
            btSave.setAttribute('style', 'display:none;');
            btSave.setAttribute('onclick','_Save(this)');       
            this.td.appendChild(btSave);
           

            var btUpdate = document.createElement('input');
            btUpdate.setAttribute('type', 'button');    
            btUpdate.setAttribute('value', 'Update');
            btUpdate.setAttribute('id', 'Edit'+obj);
            btUpdate.setAttribute('style', 'background-color:#44CCEB;');
            btUpdate.setAttribute('onclick','_Update(this)'); 
            this.td.appendChild(btUpdate);    
        }
    };        
    _Update = function (oButton) 
    {
        var activeRow = oButton.parentNode.parentNode.rowIndex;
        var tab = document.getElementById('TraineeTable').rows[activeRow];
        for (i = 0; i < _defaultprop.colums.length; i++) 
        { 
            var td = tab.getElementsByTagName("td")[i];
            var ele = document.createElement('input');      
            ele.setAttribute('type', 'text');
            ele.setAttribute('value', td.innerText);
            td.innerText = '';
            td.appendChild(ele);
        }
       var btSave = document.getElementById('Save' + (activeRow - 1));
       btSave.setAttribute('style', 'display:block; margin-left:30px; float:left; background-color:#2DBF64;');
       oButton.setAttribute('style', 'display:none;');
    };   
    _Save = function (oButton)
    {
        var activeRow = oButton.parentNode.parentNode.rowIndex;
        var tab = document.getElementById('TraineeTable').rows[activeRow];
        for (i = 0; i < 3; i++) 
        {
            var td = tab.getElementsByTagName("td")[i];
            if (td.childNodes[0].getAttribute('type') == 'text' || td.childNodes[0].tagName == 'SELECT') 
            { 
                _defaultprop.data[activeRow - 1][_defaultprop.colums[i].field] = td.childNodes[0].value
            }
        }
        _reCreateTable();
    };  
    
   

    return {
        init: function (jsonOjbect) 
        {
            document.getElementById("page_number").onclick = function(){
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
           
            _createTable();
            _createTableHeader();
            _addTableData(_applyPagination(_defaultprop.data));
            document.getElementById("container").appendChild(_myGrid);
        }
    };
 })();

 MyGrid.init();