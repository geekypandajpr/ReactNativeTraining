
    var menu=document.getElementsByClassName("dropdown");
    for(var i=0, length=menu.length;i<length;i++){
        menu[i].getElementsByClassName("dropbtn")[0].onclick=function(){
            var options=document.getElementsByClassName("dropdown-content");
            for(var j=0, optionLength=options.length;j<optionLength;j++){
                options[j].style.display="none";
                this.parentElement.getElementsByClassName("dropdown-content")[0].style.display="block";
               /* options[j].getElementsByClassName("dropdown-content")[0].onclick=function(){
                    var menuoptions=document.getElementsByClassName("dropdown-content");
                    for(var k=0, menuLength=menuoptions.length;k<menuLength;k++){
                        menuoptions[k].style.display="none";
                        this.parentElement.getElementsByClassName("dropdown-content")[0].style.display="block";
                }
            }*/
        }
    }
}


    var menu=document.getElementsByClassName("menu");
    for(var i=0, length=menu.length;i<length;i++){
        menu[i].getElementsByClassName("menubtn")[0].onclick=function(){
            var options=document.getElementsByClassName("submenu");
            for(var j=0, optionLength=options.length;j<optionLength;j++){
                options[j].style.display="none";
                this.parentElement.getElementsByClassName("submenu")[0].style.display="block";
                }
        }
    }

   