import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const refs = {
  gallery: document.querySelector('.gallery'),
};

const instance = basicLightbox.create(`<img class="basicLightbox_img" src="">`, {
  onShow: () => {
    window.addEventListener('keydown', onEscClick);
    console.log('keyboard eventListener add');
  },
  onClose: () => {
    window.removeEventListener('keydown', onEscClick);
    console.log('keyboard eventListener removed');
  },
});

function render(array) {
  const markup = array
    .map(
      element =>
        `<div class="gallery__item"><a class="gallery__link" href="${element.original}"><img class="gallery__image" src="${element.original}" data-source="${element.original}" alt="${element.description}"/></a></div>`
    )
    .join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

render(galleryItems);

refs.gallery.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.classList.value !== 'gallery__image') return;

  const bigImageURL = evt.target.dataset.source;

  instance.element().querySelector('.basicLightbox_img').setAttribute('src', bigImageURL);

  instance.show();
}

function onEscClick(evt) {
  console.log(`Pressed: ${evt.code}`);
  if (evt.code !== 'Escape') return;
  instance.close();
}
