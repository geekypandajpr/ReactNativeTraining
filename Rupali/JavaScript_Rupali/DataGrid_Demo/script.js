var container = document.getElementById("container");
    var GridData = (function()
    {
    tableSort = function() 
        {
            var switching, i, x, y, shouldSwitch;
            var table = document.getElementsByTagName("table");
            var rows = document.getElementsByTagName('tr');
            switching = true;
            while (switching)
            {
                switching = false;
                    row = table.row;
                    for (i = 0; i < (rows.length - 1); i++) 
                    {
                        shouldSwitch = false;
                        x = rows[i].getElementsByTagName("TD")[0];
                        y = rows[i + 1].getElementsByTagName("TD")[0];
                        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
                        {
                            shouldSwitch = true;
                            break;
                        }
                    }
                    if (shouldSwitch) 
                    { 
                        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                        switching = true;
                    }
            }
            container.appendChild(table);
        };
        var ProductArray = [
            ["4", "Vinayak", "Sharma", "CS"],
            ["2", "Shaili", "Mittal", "CS"],
            ["1", "Rupali", "Pandey", "IT"],
            ["5", "Anmol", "Bansal", "ME"],
            ["3", "Mayank", "Jain", "EC"]
            ];
        var ProductArrayHeader = ["S.No","First Name","Last Name","Branch"];
        return {
            display : function()
                {
                    var container = document.getElementById('container');
                    var table = document.createElement('table');
                    table.setAttribute("border","1");
                    var tbody = document.createElement('tbody');
                    var thead = document.createElement('thead');
                    table.appendChild(thead);
                
                    for(var i=0; i<ProductArrayHeader.length; i++)
                    {
                        thead.appendChild(document.createElement("th")).
                        appendChild(document.createTextNode(ProductArrayHeader[i]));
                    }
                    for (i = 0; i < ProductArray.length; i++)
                    {
                        var vals = ProductArray[i];
                        var row = document.createElement('tr');
                        for (var b = 0; b < vals.length; b++) 
                        {
                            var cell = document.createElement('td');
                            cell.textContent = vals[b];
                            row.appendChild(cell);
                            cell.onclick = function()
                            {
                                tableSort();
                            }
                        }
                        tbody.appendChild(row);
                    }
                    table.appendChild(tbody);
                    container.appendChild(table);
                }
            };
        })();
GridData.display();








