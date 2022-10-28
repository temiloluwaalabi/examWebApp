const toggleOpen = document.querySelector('.toggle__btn');
const mobileMenu = document.querySelector('.navbar__mobile')
const toggleClose = document.querySelector('.navbar__close')

let menu = false;

toggleOpen.addEventListener('click', () => {
    mobileMenu.classList.toggle('navbar__mobile-open')
    menu = true;
})

toggleClose.addEventListener('click', ()=>{
    mobileMenu.classList.remove('navbar__mobile-open');
    menu = false;
})