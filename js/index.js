const toggleButton = document.getElementsByClassName('navbar-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-menu')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});
