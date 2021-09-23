/* Calling elements from HTML */
const iconMenu = document.getElementById('toggle-menu');
const mainMenu = document.getElementById('navbar');
const mainLogo = document.getElementById('logo');


/* Calling the events */
iconMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('show');
    iconMenu.classList.toggle('toggle-responsive');
    mainLogo.classList.toggle('logo');
})