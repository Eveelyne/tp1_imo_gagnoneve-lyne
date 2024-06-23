/**
 * @description Code permettant de faire apparaître une modale.
 */

const btnsDialogTrigger = document.querySelectorAll('button[data-dialog]');
const dialogs = document.querySelectorAll('.dialog');

/** e est au moin un objet de type Event*/
/**
 * 
 * @param {Event} e
 * @description Fonction fermant le dialogue et retire l'événement clic.
 */

function closingDialog(e) {
    const dialog = e.target;

    dialog.removeAttribute('closing');
    dialog.removeAttribute('open', '');

    dialog.removeEventListener('animationend', closingDialog);
}

/** dialog est au moins un HTMLElement */

/**
 * 
 * @param {HTMLElement} dialog 
 * @description Fonction ajoutant l'attribut de fermeture au dialogue et ajoute l'événement clic.
 */

function closeDialog(dialog){
    dialog.setAttribute('closing', '');
    dialog.addEventListener('animationend', closingDialog);
}

btnsDialogTrigger.forEach((btn) => {
    btn.addEventListener('click', () => {
        const dialogSelector = btn.getAttribute('data-dialog');
        const dialog = document.querySelector(dialogSelector);

        if(dialog) {
            if(dialog.checkVisibility()){
                closeDialog(dialog);
            } else {
                dialog.setAttribute('open', '');
            }
        }
    });
});

dialogs.forEach(dialog => {
    dialog.addEventListener('click', () => {
        closeDialog(dialog);
    });

    const childrens = dialog.querySelectorAll('& > *');

    childrens.forEach(children => {
        children.addEventListener('click', e => {
            e.stopImmediatePropagation();
        });
    });
});