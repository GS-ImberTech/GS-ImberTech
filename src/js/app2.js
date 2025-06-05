const menuClick = document.getElementById("menubtn");
var show = { showdisplay: true }

// Menu hamburguer
menuClick.addEventListener('click', function (event) {

    event.preventDefault();
    if (show.showdisplay == true) {
        menulist.style.display = 'flex';
        show.showdisplay = false
    }
    else {
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
    for (let i = 0; i < gradientes.length; i++) {
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
    for (let i = 0; i < gradientes.length; i++) {
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
    for (let i = 0; i < gradientes.length; i++) {
        document.getElementById(gradientes[i].id).style.backgroundImage = 'radial-gradient(rgb(0, 0, 0),rgb(0, 0, 0)';
    }

}
const dados = [
    { id: '08225300.2', categoria: 'alto', cepid: '08225300', pct: "99" },
    { id: '08265601', categoria: 'alto', cepid: '08265601', pct: "98" },
    { id: '08225310', categoria: 'alto', cepid: '08225310', pct: "96" },
    { id: '08225310.2', categoria: 'alto', cepid: '08225310', pct: "92" },
    { id: '08143977', categoria: 'media', cepid: '08143977', pct: "68" },
    { id: '08452110', categoria: 'media', cepid: '08452110', pct: "57" },
    { id: '08452129', categoria: 'media', cepid: '08452129', pct: "55" },
    { id: '08452129.2', categoria: 'media', cepid: '08452129', pct: "52" },
    { id: '08452123', categoria: 'baixa', cepid: '08452123', pct: "16" },
    { id: '08225300', categoria: 'baixa', cepid: '08225300', pct: "5" },
    { id: '08225310.3', categoria: 'baixa', cepid: '08225310', pct: "2" }
];

//Pesquisa de dados

const filtroClick = document.getElementById('btnfiltro');
const apagarClick = document.getElementById('btnapagar');

function apagar(reset) {
    document.getElementById('nenhumdisp').style.display = 'none';
    document.getElementById('pctsistema').style.display = 'none';

    for (let i = 0; i < dados.length; i++) {
        document.getElementById(dados[i].id).style.display = 'flex';
    }

    if (reset == 'sim') { document.querySelector('form').reset(); }
}

apagarClick.addEventListener('click', function (event) {
    event.preventDefault();
    apagar('sim');
})

filtroClick.addEventListener('click', function (event) {

    const cat = document.getElementById('categoria').value;
    const cep = document.getElementById('cep').value;

    event.preventDefault();
    apagar();

    //Busca por CEP
    if (cep.length != 8 && cep != '') {
        alert(`O CEP "${cep}" não é válido\nPor gentileza, insira um CEP composto por 8 digítos numéricos`)
    }
    if (cep.length == 8) {
        for (let i = 0; i < dados.length; i++) {
            document.getElementById(dados[i].id).style.display = 'flex';
        }

        for (let i = 0; i < dados.length; i++) {
            if (dados[i].cepid != cep) {
                document.getElementById(dados[i].id).style.display = 'none';
            }
        }
    }

    //Busca por situação
    if (cat == 'cat1') {
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].categoria != 'baixa') {
                document.getElementById(dados[i].id).style.display = 'none';
            }
        }
    }
    if (cat == 'cat2') {
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].categoria != 'media') {
                document.getElementById(dados[i].id).style.display = 'none';
            }
        }
    }
    if (cat == 'cat3') {
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].categoria != 'alto') {
                document.getElementById(dados[i].id).style.display = 'none';
            }
        }
    }

    //Contagem de itens ocultados para exibição de mensagem
    let total = 0;
    for (let i = 0; i < dados.length; i++) {
        if (document.getElementById(dados[i].id).style.display == 'none') {
            total++;
        }
    }
    if (total == dados.length) {
        document.getElementById('pctsistema').style.display = 'none';
        document.getElementById('nenhumdisp').style.display = 'flex';
    }
    else {
        document.getElementById('nenhumdisp').style.display = 'none';
    }

    if ((cep.length == 8) && (cat == '')) {
        const valores = []
        let totalpcts = 0;
        for (let i = 0; i < dados.length; i++) {
            if (document.getElementById(dados[i].id).style.display == 'flex') {
                valores.push(dados[i].pct)
                totalpcts++;
            }
        }
        let media = 0
        for (let i = 0; i < valores.length; i++) {
            media = media + Number(valores[i]);
        }
        mediaValores = Math.round(media / valores.length);
        console.log(mediaValores)
        pctsistema.innerHTML = `O sistema de drenagem do CEP ${cep} está ${mediaValores}% obstruído`;
        if (!isNaN(mediaValores)){
        document.getElementById('pctsistema').style.display = 'flex';}
    }
    else {
        document.getElementById('pctsistema').style.display = 'none';
    }
   
})

var ordenar = { inverte: true }

precoClick = document.getElementById('btnordem');

precoClick.addEventListener('click', function (event) {
    event.preventDefault();

    const btnordem = document.getElementById('btnordem');

    if (ordenar.inverte === true) {
        document.getElementById('containerdados').style.flexDirection = 'column-reverse';
        btnordem.innerHTML = "Do mais limpo para o mais entupido ";
        ordenar.inverte = false;
    }
    else {
        document.getElementById('containerdados').style.flexDirection = 'column';
        btnordem.innerHTML = "Do mais entupido para o mais limpo";
        ordenar.inverte = true;
    }
});

