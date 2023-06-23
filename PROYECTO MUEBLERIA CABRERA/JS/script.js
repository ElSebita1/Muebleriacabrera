let menu = document.querySelector('#menu-icon')
let navegador = document.querySelector('.navegador')
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navegador.classList.toggle('open');
};
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset:false
});
sr.reveal('.monitoinicio-texto', {delay:200, origin:'left'})
sr.reveal('.monitoinicio-img', {delay:450, origin:'top'})
sr.reveal('.volver-arriba', {delay:500, origin:'right'})
sr.reveal('.muestrario', {delay:200, origin:'bottom'})
sr.reveal('.variedad', {delay:200, origin:'top'})
sr.reveal('.textoinicio', {delay:200, origin:'right'})
sr.reveal('.caja-prin', {delay:300, origin:'bottom'})