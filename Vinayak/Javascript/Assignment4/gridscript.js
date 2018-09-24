var MyGrid = (function () 
{
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
        data: [
        	
        	{ "firstname": "A", "lastname": "mohanty", "age": "27" },
             { "firstname": "B", "lastname": "mittal", "age": "22" },
            { "firstname": "C", "lastname": "pandaey", "age": "29" },
            { "firstname": "D", "lastname": "mohanty", "age": "27" },
        	{ "firstname": "E", "lastname": "Don", "age": "21" },
            { "firstname": "F", "lastname": "mittal", "age": "22" },
            { "firstname": "G", "lastname": "pandaey", "age": "29" },
            { "firstname": "H", "lastname": "mohanty", "age": "27" },
        	{ "firstname": "I", "lastname": "Don", "age": "21" },
            { "firstname": "J", "lastname": "mittal", "age": "22" },
            { "firstname": "K", "lastname": "pandaey", "age": "29" },
             { "firstname": "L", "lastname": "mittal", "age": "22" },
            { "firstname": "M", "lastname": "pandaey", "age": "29" },
            { "firstname": "N", "lastname": "mohanty", "age": "27" },
             { "firstname": "O", "lastname": "mittal", "age": "22" },
            { "firstname": "P", "lastname": "pandaey", "age": "29" },
            { "firstname": "Q", "lastname": "mohanty", "age": "27" },
            { "firstname": "I", "lastname": "Don", "age": "21" },
            { "firstname": "J", "lastname": "mittal", "age": "22" },
            { "firstname": "K", "lastname": "pandaey", "age": "29" },
             { "firstname": "L", "lastname": "mittal", "age": "22" },
            { "firstname": "M", "lastname": "pandaey", "age": "29" },

    ]
    };
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

    _applyPagination = function(totalData){
        var startIndex = (_defaultprop.currentPageNumber - 1) * _defaultprop.currentPageSize;
        var endIndex = startIndex + _defaultprop.currentPageSize;
        // var totalPages = Math.floor(_defaultprop.data.length / _defaultprop.currentPageSize);
        // totalPages += (_defaultprop.data.length % _defaultprop.currentPageNumber) > 0 ? 1 : 0;
        // if(_defaultprop.currentPageNumber == totalPages) {
        //     endIndex = totalData.length - 1;
        // }
        return totalData.slice(startIndex,endIndex);
    };

    _addTableData = function(filteredData){        
        for(var obj in filteredData)
        {
            var tBodyRow =_myGrid.insertRow();
            var rowData = filteredData[obj];
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
                ele.setAttribute('type', 'text');
                ele.setAttribute('value', td.innerText);
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
               // alert("hiii"+_defaultprop.colums[i].field);     
            }
        }
        _deleteTableRows();
        _addTableData(_indexPagination(1,_defaultprop.data));
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
        console.log(filteredData);
        _addTableData(filteredData);
    };

    _indexPagination =function (indexValue,totalData)
    {
    	
    	var start=(indexValue-1)*_defaultprop.currentPageSize;
    	var end=start+_defaultprop.currentPageSize;
    	
    	return totalData.slice(start,end);
    }

    _createPaginationDropDown = function()
    {
    	var selectOption;
    	var pageDiv = document.createElement("div");
    	var selectDrop =document.createElement("select");
    	selectDrop.setAttribute("id","page_number");
    	var selectOption =document.createElement("option");
    	pageDiv.appendChild(selectDrop);

    	var totalPages = Math.floor(_defaultprop.data.length / _defaultprop.currentPageSize);
    	for(i=0;i<=totalPages;i++)
    	{
    			selectOption =document.createElement("option");
    			selectOption.text = (i+1)*5;
    			selectOption.value = (i+1)*5;
    			selectDrop.options.add(selectOption);
    	}
    	
    	_myGrid.appendChild(pageDiv);

    }

_createPageTable = function()
{

	var inputContain;
	var ulContain = document.createElement("ul");
	ulContain.setAttribute("id","PageID");
	var liContain = document.createElement("li");
	var PreButton = document.createElement("input");
	PreButton.type="button";
	PreButton.value="Previous";
	PreButton.id="btn_prev";
	PreButton.onclick=function()
	{
		 if(_defaultprop.currentPageNumber > 1) {
                    _defaultprop.currentPageNumber -= 1;
                }
		_reCreateTable(_indexPagination(this.id,_defaultprop.data));
	}
	liContain.appendChild(PreButton);
	var totalPages = Math.ceil(_defaultprop.data.length / _defaultprop.currentPageSize);
	//totalPages += (_defaultprop.data.length % _defaultprop.currentPageNumber) > 0 ? 1 : 0;
	
	for(var i =1 ; i<=totalPages;i++)
	{
		inputContain= document.createElement("input");
		inputContain.type = "button";
		inputContain.value =i;
		inputContain.id =i;
		inputContain.onclick=function()
		{
			//alert(Math.ceil(_defaultprop.data.length / _defaultprop.currentPageSize));
			_defaultprop.currentPageNumber=this.id;
			_reCreateTable(_indexPagination(this.id,_defaultprop.data));
		}
		liContain.appendChild(inputContain);
	}
	var nextButton = document.createElement("input");
	nextButton.type="button";
	nextButton.value="Next";
	nextButton.id="btn_next";
	nextButton.onclick=function()
	{
		 if(_defaultprop.currentPageNumber < totalPages) {
                    _defaultprop.currentPageNumber += 1;
            }
		_reCreateTable(_indexPagination(this.id,_defaultprop.data));
	}
	liContain.appendChild(nextButton);
	ulContain.appendChild(liContain);
	_myGrid.appendChild(ulContain);
};

_removeElement=function() {
    var element = document.getElementById("PageID");
    element.parentNode.removeChild(element);
}
            
    return {
        init: function (jsonOjbect) 
        {
            
            window.onload = function() 
            {
				   document.getElementById("page_number").onchange = function(){
                _defaultprop.currentPageSize = this.value;
                _defaultprop.currentPageNumber = 1;
                _removeElement();
                _createPageTable();
                _reCreateTable(_applyPagination(_defaultprop.data));
            };


            document.getElementById("btn_prev").onclick = function(){
            	
                if(_defaultprop.currentPageNumber > 1) {
                    _defaultprop.currentPageNumber -= 1;
                }
                alert(_defaultprop.currentPageNumber);
                _reCreateTable(_applyPagination(_defaultprop.data));

            };

            document.getElementById("btn_next").onclick = function(){
                var totalPages = Math.ceil(_defaultprop.data.length / _defaultprop.currentPageSize);
               // totalPages += (_defaultprop.data.length % _defaultprop.currentPageNumber) > 0 ? 1 : 0;
                if(_defaultprop.currentPageNumber < totalPages) {
                    _defaultprop.currentPageNumber += 1;
                }
                alert(_defaultprop.currentPageNumber);
                _reCreateTable(_applyPagination(_defaultprop.data));
            };



			}
            
			 _createTable();
            _createTableHeader();
            _addTableData(_applyPagination(_defaultprop.data));
            _createPaginationDropDown();
            _createPageTable();	
            document.getElementById("container").appendChild(_myGrid);

            
            
        }
    };  
    

})();

MyGrid.init();




