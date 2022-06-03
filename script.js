// NAV RESPONSIVE
const menu = document.querySelector('#nav');
const cancelButton = document.querySelector('.cancel-btn');
const menuButton = document.querySelector('.menu-btn');

menuButton.addEventListener('click', () => {
    menu.style.left = '0%';
})

cancelButton.addEventListener('click', () => {
    menu.style.left = '-120%';
})