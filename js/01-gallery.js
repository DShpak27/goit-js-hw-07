import { galleryItems } from './gallery-items.js';

const galleryParentDivRef = document.querySelector('.gallery');
// Создали и присвоили значению переменной galleryParentDivRef ссылку на родительский элемент для будущей галереи.

let instance;
// Создали глобальную переменную которой будет позже присваиваться обьект библиотеки LoghtBox.

function makeGalleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(
            ({ preview, original, description }) =>
                `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt="${description}"
                />
            </a>
        </div>`
        )
        .join('');
}
// Создали функцию, которая из коллекции обьектов создает строку с разметкой для последующей присвоения свойству innerhtml родительского элемента галереи результата данной функции.

function onEscapeDown(evt) {
    if (evt.code === 'Escape') {
        instance.close(() => {
            galleryParentDivRef.removeEventListener('keydown', onEscapeDown);
            // после применения метода instance.close() будет удвляться слушатель события "нажания клавиши Escape".
        });
    }
}
// Создали функции для слушателя события "нажания клавиши Escape"

galleryParentDivRef.innerHTML = makeGalleryItemsMarkup(galleryItems);
// Присвоили свойству innerHTML родительского элемента галереи результат выполенния функции

galleryParentDivRef.addEventListener('click', evt => {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" style="width: 900px; height=auto">
`);

    instance.show(() => galleryParentDivRef.addEventListener('keydown', onEscapeDown));
    // после применения метода instance.show() будет удвляться слушатель события "нажания клавиши Escape".
});
