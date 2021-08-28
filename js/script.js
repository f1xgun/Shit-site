let btn = document.getElementById('js-menu-btn');
let navLinks = document.getElementsByClassName('nav__links')[0];
btn.addEventListener('click', () => {
   navLinks.classList.toggle('active');
})
