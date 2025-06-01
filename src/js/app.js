const menuClick = document.getElementById("menubtn");
var show = {showdisplay: true}


menuClick.addEventListener('click', function (event){
    displaymenu = document.getElementById("menulist");

    event.preventDefault();
    if (show.showdisplay == true){
    menulist.style.display = 'flex';
    show.showdisplay = false
    }
    else{
    menulist.style.display = 'none';
    show.showdisplay = true
    }

})