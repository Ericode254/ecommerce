const toggleButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
const navbar = document.getElementById('navbar-sticky');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
});
