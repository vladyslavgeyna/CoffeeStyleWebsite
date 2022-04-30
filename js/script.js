let header__burger = document.querySelectorAll('.header__burger');
let header_menu = document.querySelector('.header-menu');
let header__user = document.querySelector('.header__user');
let back = document.querySelector('body');
header__burger.forEach(function (item) {
    item.onclick = function () {
        item.classList.toggle('active');
        header_menu.classList.toggle('active');
        header__user.classList.toggle('active');
        back.classList.toggle('lock');
    }
});