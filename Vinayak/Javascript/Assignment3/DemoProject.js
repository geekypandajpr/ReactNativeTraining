var MyGrid = (function(){
	
    function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
 while (switching) {
 switching = false;
    rows = table.rows;
    
    for (i = 0; i < (rows.length); i++) {
      shouldSwitch = false;
     
      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) { 
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  
}

var rowData =  [
    	["vinayak","Sharma"],
    	["Kartik","vyas"],
    	["Udit","Asopa"],
    	["Abhay","Kumar"]
    	];
    	
var headValue = ["Firstname","Lastname"];
    return {
     init : function()
     {
     	
     		 var body = document.getElementById('myDiv');
     		  var tbl = document.createElement("table");
              var tblBody = document.createElement("tbody");
              var thead=document.createElement("thead");
              tbl.appendChild(thead);
              for(var k=0;k<headValue.length;k++)
              {
              	var th=document.createElement("th");
              	th.textContent=headValue[k];
              	thead.appendChild(th);
              }
			  for (var i = 0; i < rowData.length; i++) 
			  {
			  	ArrayLen=rowData[i];
			    var row = document.createElement("tr");
			    for (var j = 0; j < ArrayLen.length; j++) 
			    {
			      var cell = document.createElement("td");
			      cell.textContent=ArrayLen[j]
			      row.appendChild(cell);
			      cell.onclick = function()
			      {
			      	sortTable();
			      	
			      }
			    }
			    tblBody.appendChild(row);
			  }
			  tbl.appendChild(tblBody);
			  body.appendChild(tbl);
			  tbl.setAttribute("border", "2");
			  tbl.setAttribute("id","myTable")
					    
	  }


}
})();

MyGrid.init();

