function toggleMenu(id) {
    var menus = document.getElementsByClassName("menu");
    for(var i = 0, len = menus.length; i < len; i++) {
        if(menus[i].id==id) {
            menus[i].style.display = 'block'
        } else {
            menus[i].style.display = "none";
        }
    }
}