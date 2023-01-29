// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log('111');
// Change code below this line
const gallery = document.querySelector('.gallery');

const imgElemenst = galleryItems.map(image => `
<a class="gallery__item" href="${image.original}">
	<img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`).join("");

gallery.insertAdjacentHTML("beforeend", imgElemenst);

new SimpleLightbox('.gallery a',
	{captionDelay: 250,captionsData: 'alt',captionPosition: 'bottom'});
