import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const refs = {
  gallery: document.querySelector('.gallery'),
  galleryLinks: [],
};

let bigImageURL = null;

function render(arr) {
  const markup = arr
    .map(
      elmnt =>
        `<a class="gallery__item" href="${elmnt.original}"><img class="gallery__image" src="${elmnt.preview}" alt="${elmnt.description}" /></a>`
    )
    .join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

render(galleryItems);

refs.galleryLinks = document.querySelectorAll('.gallery__item');

refs.galleryLinks.forEach(link => link.addEventListener('click', onLinkClick));

function onLinkClick(evt) {
  evt.preventDefault();
  bigImageURL = evt.currentTarget.getAttribute('href');
}

refs.gallery.addEventListener('click', onClick);

function onClick(evt) {
  //   console.log(evt.target);
  if (!evt.target.classList.contains('gallery__image')) return;
  console.log(bigImageURL);
}
