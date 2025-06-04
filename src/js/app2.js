const menuClick = document.getElementById("menubtn");
var show = {showdisplay: true}

// Menu hamburguer
menuClick.addEventListener('click', function (event){

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

// Mudança de tema
const secoes = [simulador, pesquisa]
const gradientes = [gradientebtn, gradientebtn1, gradiente, gradiente0, gradiente5, gradiente8]

let lightTheme = document.getElementById("claro");
let darkTheme = document.getElementById("escuro");
let greyTheme = document.getElementById("cinza");


lightTheme.addEventListener("click", changeBackgroundWhite);
darkTheme.addEventListener("click", changeBackgroundBlack);
greyTheme.addEventListener("click", changeBackgroundGrey);

function changeBackgroundWhite() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    document.getElementById(srclogo.id).src = "../assets/imgs/logo.png"

    document.getElementById(menubtn.id).style.backgroundColor = "#083d83";
    document.getElementById(menulist.id).style.backgroundColor = "#14488b";
    

    document.getElementById(h1inicio.id).style.color = "black";

    document.getElementById(gradientbtn0.id).style.color = "black";
    document.getElementById(gradientbtn0.id).style.borderColor = "black";
    document.getElementById(gradientbtn0.id).style.backgroundColor = "white";

    for (let i = 0; i < secoes.length; i++) {
        document.getElementById(secoes[i].id).style.backgroundColor = 'white';
    }
    for (let i = 0; i < secoes.length; i++) {
      document.getElementById(secoes[i].id).style.boxShadow = 'rgba(0, 0, 0, 0.3) 0px -10px 20px,  rgba(0, 0, 0, 0.22) 0px 19px 38px,rgba(0, 0, 0, 0.22) 0px 15px 12px';
    }  
    for (let i=0; i < gradientes.length; i++){
        document.getElementById(gradientes[i].id).style.backgroundImage = 'radial-gradient(rgb(48, 97, 164), rgb(5, 51, 113))';
    }

}

function changeBackgroundBlack() {
    document.body.style.backgroundColor = "rgb(4, 12, 22)";
    document.body.style.color = "white";

    document.getElementById(srclogo.id).src = "../assets/imgs/logo-dark.png"

    document.getElementById(menubtn.id).style.backgroundColor = "rgb(0, 25, 58)";
    document.getElementById(menulist.id).style.backgroundColor = "rgb(5, 32, 67)";

    document.getElementById(h1inicio.id).style.color = "white";

    document.getElementById(gradientbtn0.id).style.color = "white";
    document.getElementById(gradientbtn0.id).style.borderColor = "black";
    document.getElementById(gradientbtn0.id).style.backgroundColor = "rgb(4, 12, 22)";
   

    for (let i = 0; i < secoes.length; i++) {
        document.getElementById(secoes[i].id).style.backgroundColor = 'rgb(0, 15, 34)';
    }
    for (let i = 0; i < secoes.length; i++) {
      document.getElementById(secoes[i].id).style.boxShadow = 'rgba(3, 3, 3, 0.3) 0px 19px 38px, rgba(3, 3, 3, 0.22) 0px 15px 12px';
    }  
    for (let i=0; i < gradientes.length; i++){
        document.getElementById(gradientes[i].id).style.backgroundImage = 'radial-gradient(rgb(8, 40, 83),rgb(0, 25, 58)';
    }
}

function changeBackgroundGrey() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "white";

    document.getElementById(srclogo.id).src = "../assets/imgs/logo-allblack.png"

    document.getElementById(menubtn.id).style.backgroundColor = "rgb(0, 0, 0)";
    document.getElementById(menulist.id).style.backgroundColor = "rgb(0, 0, 0)";
    
    document.getElementById(h1inicio.id).style.color = "black";

    document.getElementById(gradientbtn0.id).style.color = "black";
    document.getElementById(gradientbtn0.id).style.borderColor = "black";
    document.getElementById(gradientbtn0.id).style.backgroundColor = "white";
    

    for (let i = 0; i < secoes.length; i++) {
        document.getElementById(secoes[i].id).style.backgroundColor = 'rgb(0, 0, 0)';
        document.getElementById(secoes[i].id).style.boxShadow = 'none';
    }
    for (let i=0; i < gradientes.length; i++){
        document.getElementById(gradientes[i].id).style.backgroundImage = 'radial-gradient(rgb(0, 0, 0),rgb(0, 0, 0)';
    }
}

