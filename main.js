// Footer Appear

const footerNav = document.querySelector('#footer-menu');

window.addEventListener('scroll', footerAppear);

function footerAppear() {
    if (window.scrollY >= 200) {
        footerNav.classList.add('footer__nav_visible');
    } else {
        footerNav.classList.remove('footer__nav_visible');
    }
}

// Image Zoom

mediumZoom('.gallery__item img');
