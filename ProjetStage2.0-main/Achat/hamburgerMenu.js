const hamburger = document.querySelector('#hamburger-menu');
const closeIcon = document.querySelector('#close-icon');
const mobileNav = document.querySelector('.nav__right');

hamburger.addEventListener('click',() =>{
    hamburger.style.display = 'none';
    closeIcon.style.display = 'block';
    mobileNav.classList.remove('hide');
    mobileNav.classList.add('show');
});

closeIcon.addEventListener('click',() =>{
    hamburger.style.display = 'flex';
    closeIcon.style.display = 'none';
    mobileNav.classList.remove('show');
    mobileNav.classList.add('hide');
});