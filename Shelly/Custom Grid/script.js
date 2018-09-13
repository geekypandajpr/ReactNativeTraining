var modular = (function () {
    var grid = function (Table) {
        var divElement = document.getElementById("container");
        for (i = 0; i < obj.length; i++) {
            var row = Table.insertRow(i);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            cell1.innerHTML = obj[i].id;
            cell2.innerHTML = obj[i].name;
            cell3.innerHTML = obj[i].category;
            cell4.innerHTML = obj[i].color;

        }
        divElement.appendChild(Table);
    }

    var sorting = function () {
        var tables, rows, switching, i, x, y, shouldSwitch;
        tables = document.getElementById("tableone");
        switching = true;

        while (switching) {

            switching = false;
            rows = tables.rows;

            for (i = 1; i < (rows.length - 1); i++) {

                shouldSwitch = false;

                x = rows[i].getElementsByTagName("TD")[0];
                y = rows[i + 1].getElementsByTagName("TD")[0];

                if (x.innerHTML.toLowerCase()> y.innerHTML.toLowerCase()) {

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





    return {
        init: function () {


            var Table = document.createElement("table");
           Table.setAttribute("id","tableone")
            Table.setAttribute("border", "1");
            var thVar1 = document.createElement("th");
            thVar1.innerHTML = "Id";
            var thVar2 = document.createElement("th");
            thVar2.innerHTML = "Name";
            var thVar3 = document.createElement("th");
            thVar3.innerHTML = "Category";
            var thVar4 = document.createElement("th");
            thVar4.innerHTML = "Color";
            


            Table.appendChild(thVar1).onclick = function () { sorting() }

            Table.appendChild(thVar2).onclick = function () { sorting() };
            Table.appendChild(thVar3).onclick = function () { sorting() };
            Table.appendChild(thVar4).onclick = function () { sorting() };
            grid(Table);
        }

    };
})();


var obj = [
    {
        id: "001",
        name: "apple",
        category: "fruit",
        color: "red"
    },
    {
        id: "004",
        name: "melon",
        category: "fruit",
        color: "green"
    },
    {
        id: "003",
        name: "banana",
        category: "fruit",
        color: "yellow"
    }
];

modular.init();