//Nav Menu

const navbutton = document.querySelector('.ham');
const navbars = document.querySelector('.menuicon');
const navclose = document.querySelector('.closeicon');
const mainnav = document.querySelector('.navigation');

navbutton.addEventListener('click', () => {mainnav.classList.toggle('responsive');
navbars.classList.toggle('open'); navbars.classList.toggle('hide'); navclose.classList.toggle('close')}, false);

window.onresize = () => {if (window.innerWidth > 550) mainnav.classList.remove('responsive'); navclose.classList.remove('close'); navbars.classList.remove('hide')};