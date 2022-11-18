function moverPosicionRandom(elm) {
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNO = document.getElementById("btn_no");
let divModoSex = document.getElementsByClassName("modo_sex")[0];

btnNO.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target)});

btnSi.addEventListener('click', function(e) {
    alert('Sabía que dirias que SI. Casemos ya y tengamos hijos. I LOVE YOU ❤️')

    divModoSex.style.display = 'block';
    const cancion = new Audio('img_modo_hot.mp3');
    cancion.play();
});