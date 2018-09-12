
// function Fruit()
// {
// 	 var x = document.getElementById("FruitList1");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }
function Fruit(id) 
{
	var x = document.getElementById("FruitList1");
	x.style.display = 'block';
	// 	 for(var j = 0, len = show.length; j < len; j++)
	// 	  {
	// 	     show[j].style.display = 'block';
	// 	      // if(show[j].id==id)
	//        //    {
	//        //      show[j].style.display = 'block';
	//        //    }
	//        //   else 
	//        //   {
	//        //      show[j].style.display = "none";
	//        //   }
		      
 //    	}
    var menus = document.getElementsByClassName("fruit");
    for(var i = 0, len = menus.length; i < len; i++) 
    {
	         if(menus[i].id==id)
	          {
	            menus[i].style.display = 'block';
	          }
	         else 
	         {
	            menus[i].style.display = "none";
	         }
    }
}
// function header(id) {
//     var menus = document.getElementsByClassName("list");
//     for(var i = 0, len = menus.length; i < len; i++) {
//         if(menus[i].id==id) {
//             menus[i].style.display = 'block'
//         } else {
//             menus[i].style.display = "none";
//         }
//     }
// }
// var list = document.getElementByClassName("list");
// for(var i=0,length=list.length;i<length;i++)
// {
// 	list[i].getElementByClassName("list-button")[0].onclick=function()
// 	{
// 		var menu=document.getElementByClassName("list-cont");
// 		for(var j=0,divlength=menu.length;j<divlength;j++)
// 		{
// 			menu[j].style.display="none";
// 		}
// 		this.parentElement.getElementByClassName("list-cont")[0].style.display="block";
// 	}
// }