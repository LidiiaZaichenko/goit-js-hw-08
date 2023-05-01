// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryContainer = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryContainer);



function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox(".gallery__link", {
    captionsData: "alt",
    captionDelay: 250,
  })