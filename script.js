const menu = document.querySelector('.menu');
const NaveMenu = document.querySelector('.nave-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NaveMenu.classList.toggle('ativo');
})