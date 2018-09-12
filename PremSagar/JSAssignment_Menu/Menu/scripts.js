var dropDowns = document.getElementsByClassName("container");
for(var i = 0, length = dropDowns.length; i < length; i++) {
    dropDowns[i].getElementsByClassName("menuButton")[0].onclick = function(){
        var menus = document.getElementsByClassName("dropdown-menu");
        for(var j = 0, menuLength = menus.length; j < menuLength; j++) {
            menus[j].style.display = "none";
            var subMenus = document.getElementsByClassName("dropdown-submenu");
            for(var k = 0, subMenuLength = subMenus.length; k<subMenuLength; k++) {
                subMenus[k].getElementsByClassName("test")[0].onclick = function() {
                    if(this.parentElement.getElementsByClassName("dropdown-menu")[0].style.display == "none") {
                    this.parentElement.getElementsByClassName("dropdown-menu")[0].style.display = "block";
                    } else {
                        this.parentElement.getElementsByClassName("dropdown-menu")[0].style.display = "none";
                    }
                } 
            }
        }
        this.parentElement.getElementsByClassName("dropdown-menu")[0].style.display = "block";
    }
}