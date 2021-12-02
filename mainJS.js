//  toTop Btn --------------------------->

const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', function() {
    if(window.pageYOffset > 150) {
        toTop.classList.add('active');
    }else {
        toTop.classList.remove('active');
    }
})

//Btn Burger

const iconMenu = document.querySelector(".nav_btn");
const menuBody = document.querySelector(".menu");
const nav = document.querySelector('.menu')
const navBar = document.querySelectorAll('.menu li')

if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        nav.classList.toggle('nav-active');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');     
    })
}