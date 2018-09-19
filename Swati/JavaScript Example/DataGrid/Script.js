
var MyGrid=(function(){
var person = [
    {
        "Name": "Swati",
        "Age": "23",
        "Weight": "48",       
    },
    {
        "Name": "Hejal",
        "Age": "5",
        "Weight": "14",       
    },
    {
        "Name": "Paavni",
        "Age": "4",
        "Weight": "13",       
    }
]

var col = [
   
   ];
 /*  Grid.init({
    gridWidth : "500px",
    gridHeight : "700px",
    columns : [{
    "code" : "name",
    "headerName" : "Name",
    "width" : "100", 
    "sorting" : true/ false,
    "editor" : "textinput/select/boolean/none"
    },{
    "code" : "age",
    "headerName" : "Age",
    "width" : "100", 
    "sorting" : true/ false,
    "editor" : "textinput/select/boolean/none"
    },{
    "code" : "city",
    "headerName" : "City",
    "width" : "100",
    "sorting" : true/ false,
    "editor" : "textinput/select/boolean/none"
    }],
    pagging : true/false,
    pageSize : [5,10,15,20],
    editable : true/false
    });*/
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch,dir,switchcount=0;
    table = document.getElementById("myData");
    switching = true; 
    dir="asc";   
    while (switching) {      
      switching = false;
      rows = table.rows;     
      for (i = 1; i < (rows.length-1); i++) {       
       shouldSwitch = false;        
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];   
        if(dir=="asc"){     
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {         
                shouldSwitch = true;
                break;
            }
        } else if (dir=="desc"){
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {         
                shouldSwitch = true;
                break; 
            }
          }
       }
      if (shouldSwitch) {       
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      }else{
          if(switchcount==0 && dir== "asc"){
              dir="desc";
              switching=true;
          }
        }
    }
  }
  

return{
    init:function(){
for (var i = 0; i < person.length; i++) {
    for (var key in person[i]) {
        if (col.indexOf(key) === -1) {
            col.push(key);
        }
    }
}

var table = document.createElement("table");
table.setAttribute("border","2");

var tr = table.insertRow(-1);                  

for (var i = 0; i <col.length; i++) {
    var th = document.createElement("th");     
    th.innerHTML = col[i];
    tr.appendChild(th);    
    
}

for (var i = 0; i < person.length; i++) {

    tr = table.insertRow(-1);

    for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = person[i][col[j]];
        tr.onclick=function(){
            sortTable();     
    }
    }
}

        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
        table.setAttribute("id","myData");
    }
}
})();

MyGrid.init();