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

// SLIDER

let contagem = 0
document.getElementById("radio1").checked = true;
const totalSlide = document.querySelectorAll(".slide");

setInterval(function(){
    nextSlide();
}, 2000);

function nextSlide(){
    contagem = contagem + 1;
    if( contagem > totalSlide.length){
        contagem = 0;
    }
    document.getElementById("radio" + contagem).checked = true;
}