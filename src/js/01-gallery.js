import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainet = document.querySelector(".gallery");
const galleryItemsMarkup = createGalerryItemsMarkup(galleryItems);

galleryContainet.insertAdjacentHTML("beforeend", galleryItemsMarkup);
galleryContainet.addEventListener("click", OnGalleryContainetClick);

function createGalerryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` 
      <div class="gallery__item">
        <a class="gallery__link" href="${original}" target="_self">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
    `;
    })
    .join("");
}

function OnGalleryContainetClick(e) {
  e.preventDefault();

  const isGalleryImageEl = e.target.classList.contains("gallery__image");
  if (!isGalleryImageEl) {
    return;
  }

  openModal(e);
}

function openModal(e) {
  const linkOriginalImg = e.target.dataset.source;

  const instance = basicLightbox.create(`
      <img src="${linkOriginalImg}">
  `);

  instance.show();

  closeModal(instance);
}

function closeModal(instance) {
  window.addEventListener("keydown", OnCloseModal);

  function OnCloseModal(e) {
    if (e.code === "Escape") {
      window.removeEventListener("keydown", OnCloseModal);
      instance.close();
    }
  }
}
