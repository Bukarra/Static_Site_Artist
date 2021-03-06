function intitializeLazyLoading() {
    const lazyloadImages = document.querySelectorAll('.lazy');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.removeAttribute('data-src');
                    image.classList.remove('lazy');
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyloadImages.forEach(function (image) {
            imageObserver.observe(image);
        });
    } else {
        function lazyload() {
            const scrollTop = window.pageYOffset;
            lazyloadImages.forEach(function (img) {
                const isLowEnough = img.offsetTop < window.innerHeight + scrollTop;
                const notAlreadyReplaced = img.classList.contains('lazy');
                if (isLowEnough && notAlreadyReplaced) {
                    console.log(1);
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    img.classList.remove('lazy');
                }
            });
            if (lazyloadImages.length == 0) {
                document.removeEventListener('scroll', lazyload);
                window.removeEventListener('resize', lazyload);
                window.removeEventListener('orientationChange', lazyload);
            }
        }

        document.addEventListener('scroll', lazyload);
        window.addEventListener('resize', lazyload);
        window.addEventListener('orientationChange', lazyload);

        lazyload();
    }
}
