/* Footer Appear */

const footerNav = document.querySelector('.footer__items');

window.addEventListener('scroll', footerAppear);

function footerAppear() {
    if (window.scrollY >= 200) {
        footerNav.classList.add('footer__nav_visible');
    } else {
        footerNav.classList.remove('footer__nav_visible');
    }
}

/* Navigation Mobile */

const navItems = document.querySelectorAll('.header__item-mobile_active');
const navGroup = document.querySelector('.header__item-group-mobile');

navGroup.addEventListener('click', navItemsMobileAppear);

function navItemsMobileAppear() {
    navItems.forEach((i) => i.classList.toggle('header__item-mobile_hidden'));
}

/* API */

/* async function getURLsforImages() {
    const responce = await fetch('https://mockend.com/Bukarra/Static_Site_Artist/posts');
    const json = await responce.json();
    return json;
} */

console.log(getURLsforImages());

/* Image Zoom */

mediumZoom('.gallery__item img');
