const toggleButton = document.getElementsByClassName('navbar-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-menu')[0];

toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('remove-menu')
})

function myFunction() {
    if (window.matchMedia('(max-width: 768px)').matches) {
        navbarLinks.classList.add('remove-menu');
    } else {
        navbarLinks.classList.add('add-menu');
    }
}
window.addEventListener('window', myFunction());
