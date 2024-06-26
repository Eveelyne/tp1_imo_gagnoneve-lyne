/**
 * @description Code pour les boutons permettant de changer la vue entre liste et grille.
 */

const gridViewBtn = document.querySelector('.btn_grid-view');
const listViewBtn = document.querySelector('.btn_list-view');
const productContainer = document.querySelector('.best-products');
const cardContainers = document.querySelectorAll('.card--product');
const cardContents = document.querySelectorAll('.card__content');

gridViewBtn.addEventListener('click', () => {
    productContainer.classList.remove('list-view');
    cardContainers.forEach(cardContainer => {
        cardContainer.classList.remove('list-view');
    });
    cardContents.forEach(cardContent => {
    cardContent.classList.remove('list-view');
    });
});

listViewBtn.addEventListener('click', () => {
    cardContainers.forEach(cardContainer => {
        cardContainer.classList.add('list-view');
    });
    cardContents.forEach(cardContent => {
    cardContent.classList.add('list-view');
    });
    productContainer.classList.add('list-view');
});
