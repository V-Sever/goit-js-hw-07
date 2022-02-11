import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const refs = {
  gallery: document.querySelector('.gallery'),
  galleryLinks: [],
};

let instance = null;

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

refs.galleryLinks = document.querySelectorAll('.gallery__link');

refs.galleryLinks.forEach(link => link.addEventListener('click', evt => evt.preventDefault()));

refs.gallery.addEventListener('click', onClick);

function onClick(evt) {
  if (evt.target.classList.value !== 'gallery__image') return;
  //   console.log(evt.target);
  const bigImageURL = evt.target.dataset.source;
  //   console.log(bigImageURL);
  instance = basicLightbox.create(`
    <img src="${bigImageURL}">
`);

  instance.show(() => {
    document.addEventListener('keydown', onEscape);
    console.log('keyboard eventListener add');
  });
}

function onEscape(evt) {
  console.log(evt.code);
  if (evt.code !== 'Escape') return;
  instance.close(document.removeEventListener('keydown', onEscape));
  console.log('keyboard eventListener removed');
}
