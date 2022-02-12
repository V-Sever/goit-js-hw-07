import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const refs = {
  gallery: document.querySelector('.gallery'),
};

function render(arr) {
  const markup = arr
    .map(
      elmnt =>
        `<a class="gallery__item" href="${elmnt.original}"><img class="gallery__image" src="${elmnt.preview}" alt="${elmnt.description}" title="${elmnt.description}" /></a>`
    )
    .join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

render(galleryItems);

let gallery = new SimpleLightbox('.gallery a', { captionDelay: 250 });
