import { galleryItems } from './gallery-items.js';


console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(
      (item) => `
      <a class="gallery__item" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
      </a>
    `
    )
    .join('');
}

const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

gallery.addEventListener('click', (event) => {
  event.preventDefault();
  lightbox.open();
});
