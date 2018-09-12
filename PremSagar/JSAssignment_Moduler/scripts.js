var tableData = [
    { firstName: 'Prem', lastName: 'Sagar', age: 22, salary: 1000 },
    { firstName: 'Sunil', lastName: 'Kumar', age: 18, salary: 2000 },
    { firstName: 'Prem', lastName: 'Prakash', age: 21, salary: 1500 },
    { firstName: 'Ashish', lastName: 'Mallik', age: 23, salary: 2000 },
    { firstName: 'Amrit', lastName: 'Nandan', age: 22, salary: 1200 },
    { firstName: 'Alokik', lastName: 'Pathak', age: 25, salary: 1100 }
];

//MODULER DESIGN
var MyGrid = (function () {
    var headers = ["firstName", "lastName", "age", "salary"];
    var jsonArray = [];

    createHeader = function () {
        var myDiv = document.getElementById("myDiv");
        var myTable = document.createElement("table");
        myTable.setAttribute("id", "myTable");
        myTable.setAttribute("border", "5px");

        var tr = document.createElement('tr');
        for (var i = 0, len = headers.length; i < len; i++) {
            var th = document.createElement('th');
            var text = document.createTextNode(headers[i]);
            th.appendChild(text);
            tr.appendChild(th);
        }
        myTable.appendChild(tr);
        myDiv.appendChild(myTable);

        var tableHeader = document.getElementsByTagName('th');
        for(var j = 0, length = tableHeader.length; j < length; j++){
            tableHeader[j].onclick = function() {
                sortTable(this.cellIndex);
            }
        }
        return myTable;
    }

    sortTable = function(index) {
        var myTable = document.getElementById("myTable");
        var isSwitching = true;
        while(isSwitching) {
            isSwitching = false;
            var rows = myTable.rows;
            for(var i = 1, len = rows.length-1; i<len; i++) {
                var row1 = rows[i].getElementsByTagName("td")[index];
                var row2 = rows[i+1].getElementsByTagName("td")[index];
                if(row1.innerHTML.toUpperCase() > row2.innerHTML.toUpperCase()) {
                    rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
                    isSwitching = true;
                }
            }
        }
    }

    insertDatas = function (myTable) {
        for (var i = 0, len = jsonArray.length; i < len; i++) {
            var tr = document.createElement('tr');

            var firstNameCell = document.createElement('td');
            var firstNameText = document.createTextNode(jsonArray[i].firstName);
            firstNameCell.appendChild(firstNameText);
            tr.appendChild(firstNameCell);

            var lastNameCell = document.createElement('td');
            var lastNameText = document.createTextNode(jsonArray[i].lastName);
            lastNameCell.appendChild(lastNameText);
            tr.appendChild(lastNameCell);

            var ageCell = document.createElement('td');
            var ageCellText = document.createTextNode(jsonArray[i].age);
            ageCell.appendChild(ageCellText);
            tr.appendChild(ageCell);

            var salaryCell = document.createElement('td');
            var salaryCellText = document.createTextNode(jsonArray[i].salary);
            salaryCell.appendChild(salaryCellText);
            tr.appendChild(salaryCell);

            myTable.appendChild(tr);
        }
    }

    return {
        init: function (jsonArr) {
            jsonArray = jsonArr;
            var myTable = createHeader();
            insertDatas(myTable);
        }
    };

})();

MyGrid.init(tableData);