const hamburguer = document.querySelector('.hamburguer');
const nav = document.querySelector('.nav');
const cerrar = document.querySelector('.close');

hamburguer.addEventListener('click', () => {
    nav.style.display = 'block';
    hamburguer.style.display = 'none';
    cerrar.style.display = 'inherit';
})

cerrar.addEventListener('click', () => {
    nav.style.display = 'none';
    hamburguer.style.display = 'inherit';
    cerrar.style.display = 'none';
})