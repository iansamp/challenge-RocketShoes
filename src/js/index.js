$(document).ready(function(){
    $('.hamburguer').click(function(){
        $(this).toggleClass('active');
        $(".navbar").toggleClass('active');
        $(".fa-solid").toggleClass('active');
    })
})

const mainImg = document.getElementById('main-img');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');

img1.addEventListener('click', () => {
    mainImg.src = "./img/tenis-1-galeria.png";
})

img2.addEventListener('click', () => {
    mainImg.src = "./img/tenis-2-galeria.png";
})

img3.addEventListener('click', () => {
    mainImg.src = "./img/tenis-3-galeria.png";
})