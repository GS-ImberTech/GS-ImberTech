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

let slideAtual = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");

btnNext.addEventListener('click', function() {
    nextSlide();
});

btnPrev.addEventListener('click', function() {
    prevSlide();
});

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    slideAtual = (slideAtual + 1) % totalSlides;
    showSlide(slideAtual);
}

function prevSlide() {
    slideAtual = (slideAtual - 1 + totalSlides) % totalSlides;
    showSlide(slideAtual);
}

// Automático
setInterval(nextSlide, 5000)

