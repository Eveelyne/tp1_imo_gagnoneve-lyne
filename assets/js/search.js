/**
 * @description Code pour la barre de recherche permettant de filtrer les articles trouvés selon la saisie effectuée dans le input.
 */

const inputSearch = document.querySelector('.input-search');
const cards = document.querySelectorAll('.card--product');
const counterSpan = document.querySelector('.counter__articles-found');
const counter = document.querySelector('.nb-articles');

counterSpan.classList.add('hidden');

inputSearch.addEventListener('input', () => {
    const searchValue = inputSearch.value.toLowerCase();
    let count = 0;

    cards.forEach(card => {
        const searchData = card.getAttribute('data-search');
        if (searchData.includes(searchValue)) {
        card.classList.remove('hidden');
        count++;
        } else {
        card.classList.add('hidden');
        }
    });

    counter.innerHTML = count;

    if (searchValue) {
        counterSpan.classList.remove('hidden');
    } else {
        counterSpan.classList.add('hidden');
    }
});
