const imgURL = 'https://my-json-server.typicode.com/Bukarra/Static_Site_Artist/data';
const imageGallery = document.querySelector('.gallery');
let imgData = [];

function renderImage(imageURL, imageTitle, imageDescription) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('gallery__item');

    const img = document.createElement('img');
    img.classList.add('medium-zoom-image');
    img.setAttribute('data-src', imageURL);
    img.alt = imageTitle;
    img.classList.add('lazy');

    const headerMobile = document.createElement('h2');
    headerMobile.classList.add('gallery_item-headline_mobile');
    headerMobile.textContent = imageTitle;

    const imgDetails = document.createElement('div');
    imgDetails.classList.add('gallery__item-details');

    const about = document.createElement('div');
    about.classList.add('gallery__item-info');

    const title = document.createElement('h2');
    title.classList.add('gallery__item-headline');
    if (imageTitle === '') {
        title.textContent = 'Картина';
    } else {
        title.textContent = imageTitle;
    }

    const description = document.createElement('p');
    description.classList.add('gallery__item-description');
    description.textContent = imageDescription;

    if (imageTitle === '' && imageDescription === '') {
        imgDetails.remove();
        about.append(title, description);
        imgDetails.append(about);
        wrapper.append(img, headerMobile);
    } else {
        about.append(title, description);
        imgDetails.append(about);
        wrapper.append(img, headerMobile, imgDetails);
    }

    return [wrapper];
}

async function renderImagestoGallery() {
    const responce = await fetch(imgURL);
    const data = await responce.json();
    data.forEach((item) => {
        imgData.push(item);
    });

    const images = [];

    data.forEach((image) => {
        const [elem] = renderImage(image.url_small, image.name, image.description);
        images.push(elem);
    });

    imageGallery.append(...images);

    intitializeLazyLoading();
}

renderImagestoGallery();
