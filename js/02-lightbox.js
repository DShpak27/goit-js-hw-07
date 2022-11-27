import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryParentUlRef = document.querySelector('.gallery');
// Создали и присвоили значению переменной galleryParentDivRef ссылку на родительский элемент для будущей галереи.

function makeGalleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(
            ({ preview, original, description }) =>
                `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}"  />
                </a>`
        )
        .join('');
}

galleryParentUlRef.innerHTML = makeGalleryItemsMarkup(galleryItems);
// Присвоили свойству innerHTML родительского элемента галереи результат выполенния функции

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
// инициализировали обьект библиотеки
