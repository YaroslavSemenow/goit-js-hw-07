import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainet = document.querySelector(".gallery");
const galleryItemsMarkup = createGalerryItemsMarkup(galleryItems);

galleryContainet.insertAdjacentHTML("beforeend", galleryItemsMarkup);

function createGalerryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` 
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>
    `;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {
  gallery.options.captionsData = "alt";
  gallery.options.captionDelay = 250;
});
