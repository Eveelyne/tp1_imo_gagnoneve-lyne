/**
 * @typedef {Object} Product
 * @property {string} title
 * @property {string} img
 * @property {string} longDesc
 * @property {string} shortDesc
 * @property {string} id
 * @property {string} author
 * @property {string} timEst
 * @property {number} nbWords
 * @description Création du contenu des objets pour les cartes d'articles.
 */

const products = [
  {
    title: "Défis rencontrés lors de la réalisation du TP01",
    img: "/assets/images/duck.jpg",
    shortDesc: "Un bref aperçu",
    id: "1",
    longDesc: "Ce TP n'a pas été simple, même en utilisant la base que nous avions vue en classe. J'ai particulièrement eu du mal à créer les modales pour chaque article. J'ai cherché des solutions sur W3Schools, mais leur code ne correspondait pas du tout à ce que nous faisons en cours. Finalement, j'ai demandé de l'aide au professeur pour les créer. Essentiellement, il fallait que je combine les détails que je voulais faire apparaître dans les articles en cliquant sur le bouton avec les cartes d'articles sans détails. J'avais créé deux tableaux d'objets distincts à la base. Une fois combinés, je devais ajouter l'événement clic du bouton « En savoir plus » directement dans ma fonction productToHtml. La modale devait être ajoutée à ce moment, dans l'événement clic. Sur le coup, j'avais lié ma modale qui servait d'overlay, donc le texte affichait sur un fond transparent. J'ai donc dû lier le contenu des détails dans une autre boîte. Mon code n'est pas parfait, mais ça fonctionne au moins. Plus j'ajoutais de mots dans la description longue et plus je me disais que je devais ajouter un overflow y. J'ai trouvé sur W3School le détail qui me manquait : ajouter la hauteur. J'avais simplement écrit overflow-y: auto. Aussi, j'ai eu un peu de difficulté avec le compteur d'articles lors de la recherche; il me manquait un bout de code, donc j'ai utilisé ChatGPT. C'était plus simple que je pensais : je devais simplement ajouter « count++ » pour incrémenter le nombre d'articles trouvés. En passant, j'ai choisi un style « monochrome » pour le site, donc c'est normal que les couleurs ne soient pas diversifiées. ",
    author: "Eve-Lyne Gagnon",
    date: "2024-06-14",
    timeEst: "2 min",
    nbWords: "",
  },
  {
    title: "Meilleur endroit pour manger des sushis dans le noir.",
    img: "/assets/images/sushi.jpg",
    shortDesc: "Nos meilleures photos croquées sur le vif.",
    id: "2",
    longDesc: "Le meilleur endroit pour manger des sushis dans le noir. C'est une expérience unique qui mêle gastronomie et mystère. Imagine déguster des sushis sans voir ce que tu manges, laissant tes autres sens prendre le relais. C'est surprenant et amusant, chaque bouchée devenant une aventure. Parfait pour les amateurs de sensations nouvelles et ceux qui veulent redécouvrir le goût de leurs plats préférés. Alors, prêt à tenter l'expérience et à savourer tes sushis dans le noir ?",
    author: "Eve-Lyne Gagnon",
    date: "2024-06-14",
    timeEst: "2 min",
    nbWords: "",
  },
  {
    title: "Courir un marathon en gougounes : c'est possible !",
    img: "/assets/images/feet.jpg",
    shortDesc: "Toutes les raisons sont bonnes pour se mettre au sport.",
    id: "3",
    longDesc: "Courir un marathon en gougounes : c'est possible ! Ça peut sembler fou, mais certains l'ont fait. Imagine courir 42 kilomètres en tongs, ces sandales de plage pas du tout faites pour ça. C'est un vrai défi, et il faut avoir de sacrés pieds pour y arriver. Mais pour ceux qui aiment les défis un peu dingues, c'est une manière originale de se démarquer et de montrer qu'avec de la détermination, tout est possible. Alors, qui est prêt à tenter l'aventure en gougounes ?",
    author: "Eve-Lyne Gagnon",
    date: "2024-06-14",
    timeEst: "2 min",
    nbWords: "",
  },
  {
    title: "Une longue randonnée dans le parc national de la Gaspésie... en mode sprint.",
    img: "/assets/images/trail.jpg",
    shortDesc: "Les longues randonnées sont populaires...",
    id: "4",
    longDesc: "Une longue randonnée dans le parc national de la Gaspésie... en mode sprint. Imagine troquer la marche tranquille pour une course effrénée à travers les sentiers magnifiques de la Gaspésie. C'est un vrai défi, mais pour les amateurs d'adrénaline, c'est une façon géniale de profiter de la nature tout en se dépassant physiquement. On oublie les pauses contemplatives et on fonce à toute allure, profitant des paysages à vitesse grand V. Une expérience unique pour ceux qui aiment mélanger nature et sport intense !",
    author: "Eve-Lyne Gagnon",
    date: "2024-06-14",
    timeEst: "2 min",
    nbWords: "",
  },
  {
    title: "Détester les bananes, mais adorer ses dérivés.",
    img: "/assets/images/banana.jpg",
    shortDesc: "L'histoire d'une personne plein d'incertitude...",
    id: "5",
    longDesc: "Détester les bananes, mais adorer tout ce qui en dérive. C'est un peu bizarre, mais ça arrive ! Imagine quelqu'un qui ne supporte pas le goût ou la texture des bananes, mais qui raffole des desserts à la banane, des smoothies ou même du pain à la banane. Comme quoi, on peut ne pas aimer un fruit en lui-même, mais adorer tout ce qu'on peut en faire. C'est un drôle de paradoxe, mais les goûts et les couleurs, ça ne se discute pas !",
    author: "Eve-Lyne Gagnon",
    date: "2024-06-14",
    timeEst: "2 min",
    nbWords: "",
  },
  {
    title: "Trouver de l'argent dans une mine d'or : la recherche progresse !",
    img: "/assets/images/mine.jpg",
    shortDesc: "Des scientifiques ont déclaré connaître la formule...",
    id: "6",
    longDesc: "Trouver de l'argent dans une mine d'or : la recherche avance bien ! C'est un peu comme chercher un trésor dans un trésor, mais apparemment, ça marche. Les experts creusent et tombent sur des pépites d'argent en plein milieu de l'or. Pas mal, non ? Cela pourrait bien changer la donne pour les mines, car maintenant, elles offrent deux fois plus de richesse. C'est une découverte qui pourrait rendre l'exploitation encore plus rentable et excitante pour les chercheurs et investisseurs.",
    author: "Eve-Lyne Gagnon",
    date: "2024-06-14",
    timeEst: "2 min",
    nbWords: "",
  },
  {
    title: "Le chat n'est jamais sorti du sac, n'y étant jamais entré.",
    img: "/assets/images/cat.webp",
    shortDesc: "On s'en va chercher le chien, pour sortir le chat...",
    id: "7",
    longDesc: "Le chat n'est jamais sorti du sac, tout simplement parce qu'il n'y est jamais entré. En gros, on parle ici de quelque chose qui n'a jamais été un secret ou un mystère. C'est comme si on disait qu'il n'y avait jamais eu de surprise à découvrir. Bref, rien de caché, rien de dévoilé. C'est juste une façon de dire qu'il n'y avait rien à voir dès le début.",
    author: "Eve-Lyne Gagnon",
    date: "2024-06-14",
    timeEst: "2 min",
    nbWords: "",
  },
  {
    title: "La calvicie d'Elton John et son choix de lunettes : une corrélation douteuse.",
    img: "/assets/images/elton.jpg",
    shortDesc: "Le populaire chanteur Elton John s'est démarqué...",
    id: "8",
    longDesc: "La calvitie d'Elton John et son choix de lunettes : une corrélation franchement douteuse. On pourrait croire qu'il y a un lien entre la perte de cheveux et ses lunettes excentriques, mais en réalité, c'est juste du style ! Elton a toujours aimé se démarquer avec ses montures extravagantes. Sa calvitie, elle, n'a rien à voir avec ça. C’est juste une coïncidence que ces deux éléments marquent son look. En gros, pas la peine de chercher un lien là où il n'y en a pas : Elton John est juste unique, cheveux ou pas cheveux, lunettes flashy ou discrètes.",
    author: "Eve-Lyne Gagnon",
    date: "2024-06-14",
    timeEst: "2 min",
    nbWords: "",
  },
  {
    title: "Nouveau mot dans la langue française : gymmer.",
    img: "/assets/images/gym.png",
    shortDesc: "Le verbe tant attendu des passionnés de fitness enfin arrivé ! Je gymme, tu gymmes...",
    id: "9",
    longDesc: "Un nouveau mot débarque dans la langue française : 'gymmer'. Directement tiré de l'anglais, ce terme décrit quelqu'un qui va régulièrement à la salle de sport. En gros, 'gymmer' signifie faire du sport en salle. Avec la mode actuelle de rester en forme et en bonne santé, ce mot est devenu super populaire parmi les amateurs de fitness. Que ce soit les jeunes ou les adultes, tout le monde commence à utiliser 'gymmer'. Ce mot reflète bien notre époque où prendre soin de son corps et de sa santé est devenu une priorité pour beaucoup.",
    author: "Eve-Lyne Gagnon",
    date: "2024-06-14",
    timeEst: "2 min",
    nbWords: "",
  },
];

/**
 * @param {Product} product
 * @returns {HTMLDivElement}
 * @description Création des éléments HTML des cartes.
 */

function productToHtml(product) {
  const cardProduct = document.createElement('div');
  const img = document.createElement('img');
  const cardContent = document.createElement('div');
  const cardDescription = document.createElement('div');
  const cardButton = document.createElement('button');
  const cardTitle = document.createElement('h2');
  const cardShortDesc = document.createElement('p');

  cardProduct.className = 'card--product';
  cardTitle.textContent = product.title;
  cardProduct.setAttribute('data-search', cardTitle.textContent.toLowerCase());
  img.className = 'card__img';
  img.src = product.img;
  cardContent.className = 'card__content';
  cardDescription.className = 'card__description';
  cardButton.textContent = 'En savoir plus';
  cardButton.classList.add('card__button');
  cardButton.setAttribute('data-dialog', '#details');
  cardTitle.className = 'card__title';
  cardShortDesc.className = 'card__short-desc';
  cardShortDesc.textContent = product.shortDesc;


// Écouteur d'événement clic pour intégrer les détails de l'article sur la modale. //

  cardButton.addEventListener('click', () => {
    const modale = document.querySelector('.details-container');
    modale.innerHTML = '';
    modale.appendChild(detailsToHtml(product));
  });

//

  cardDescription.appendChild(cardTitle);
  cardDescription.appendChild(cardShortDesc);

  cardContent.appendChild(cardDescription);
  cardContent.appendChild(cardButton);

  cardProduct.appendChild(img);
  cardProduct.appendChild(cardContent);

  return cardProduct;
}

/** product n'est pas bien typé. Ce n'est pas un tableau */
/**
 * 
 * @param {Product} product 
 * @returns {HTMLDivElement}
 * @description Création des éléments des détails des articles (lorsque cliqués).
 */

function detailsToHtml(product) {
  const cardDetails = document.createElement('div');
  const cardDetailsHeader = document.createElement('div');
  const cardDetailsContent = document.createElement('div');
  const cardDetailsImg = document.createElement('div');
  const cardTitleDetails = document.createElement('h2');
  const listHeader = document.createElement('ul');
  const author = document.createElement('li');
  const date = document.createElement('li');
  const timeEst = document.createElement('li');
  const imgDetails = document.createElement('img');
  const longDesc = document.createElement('article');
  const nbWords = document.createElement('p');

  cardDetails.className = 'details-cards';
  cardDetailsHeader.className = 'details-header';
  cardDetailsContent.className = 'details-content';
  cardDetailsImg.className = 'details-img';
  listHeader.className = 'details-list';
  cardTitleDetails.textContent = product.title;
  author.textContent = 'Par : ' + product.author;
  date.setAttribute('datetime', product.date);
  date.textContent = '📅 ' + product.date;
  timeEst.textContent = '🕓 ' + product.timeEst;
  imgDetails.className = 'card--details_img';
  imgDetails.src = product.img;
  longDesc.textContent = product.longDesc;
  nbWords.textContent = 'Nombre de mots : ' + (product.longDesc.split(' ')).length;
  
  cardDetails.appendChild(cardTitleDetails);
  cardDetails.appendChild(cardDetailsHeader);
  cardDetails.appendChild(cardDetailsImg);
  cardDetails.appendChild(cardDetailsContent);

  cardDetailsHeader.appendChild(listHeader);
  
  listHeader.appendChild(author);
  listHeader.appendChild(date);
  listHeader.appendChild(timeEst);

  cardDetailsImg.appendChild(imgDetails);
  
  cardDetailsContent.appendChild(longDesc);
  cardDetailsContent.appendChild(nbWords);

  return cardDetails;
}

const cardDetailsContainer = document.querySelector('.details-container');




const bestProduct = document.querySelector('.best-products');

products.forEach(product => bestProduct.appendChild(productToHtml(product)));