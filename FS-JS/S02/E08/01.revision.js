// -------- PART 1: DATA ---------


// Créer une liste d'objets pour représenter les données suivantes : 
// PS : le nom des clés est à votre convenance.

const avengerStudents = [
    {
      pseudonyme: 'Captain America',
      naissance: 1917,
      job: 'Agent Fédéral',
      equipements: ['Bouclier', 'Moto', 'Costume'],
      lienImage: 'captain-america.png'
    },
    {
      pseudonyme: 'Spiderman',
      naissance: 1962,
      job: 'PDG de Parker Industries',
      equipements: ['Toile', 'Précognition'],
      lienImage: 'spiderman.png'
    },
    {
      pseudonyme: 'Hulk',
      naissance: 1962,
      job: 'Physicien nucléaire',
      equipements: ['Force', 'Petit short moulant'],
      lienImage: 'hulk.png'
    },
    {
      pseudonyme: 'Iron Man',
      naissance: 1963,
      job: 'PDG de Stark Industries',
      equipements: ['Armure', 'Répulseurs d\'énergie'],
      lienImage: 'iron-man.png'
    },
    {
      pseudonyme: 'Thor',
      naissance: 1962,
      job: 'Médecin',
      equipements: ['Gros marteau'],
      lienImage: 'thor.png'
    }
  ];
  


/*                 -- Liste des "étudiants" de la promotion AVENGER ---

|    Speudonyme    | Naissance  |   Job                       |    Equipements               | Lien de l'image 
|--------------------------------------------------------------------------------------------------------------
| Captain America  | 1917       | Agent Fédéral              | Bouclier ; Moto ; Costume     | captain-america.png
| Spiderman        | 1962       | PDG de Parker Industries   | Toile ; Précognition          | spiderman.png
| Hulk             | 1962       | Physicien nucléaire        | Force ; Petit short moulant   | hulk.png
| Iron Man         | 1963       | PDG de Stark Industries    | Armure ; Répulseurs d'énergie | iron-man.png
| Thor             | 1962       | Médecin                    | Gros marteau                  | thor.png
|--------------------------------------------------------------------------------------------------------------
*/


// -------- PART 2: DOM ---------

// Insérer chaque "étudiant" dans le DOM via une boucle JS. 
// Un template pour le HTML de chaque "étudiant" nous est aggréablement fourni par un designer/intégrateur de l'équipe marketing ! 
// On peut le retrouver dans le fichier HTML.

    // -------- PARTIE 1: DATA ---------

// Liste des objets représentant les étudiants de la promotion AVENGER
const students = [
  {
    name: "Captain America",
    birthYear: 1917,
    job: "Agent Fédéral",
    equipment: ["Bouclier", "Moto", "Costume"],
    image: "./01.revision.assets/captain-america.png",
  },
  {
    name: "Spiderman",
    birthYear: 1962,
    job: "PDG de Parker Industries",
    equipment: ["Toile", "Précognition"],
    image: "./01.revision.assets/spiderman.png",
  },
  {
    name: "Hulk",
    birthYear: 1962,
    job: "Physicien nucléaire",
    equipment: ["Force", "Petit short moulant"],
    image: "./01.revision.assets/hulk.png",
  },
  {
    name: "Iron Man",
    birthYear: 1963,
    job: "PDG de Stark Industries",
    equipment: ["Armure", "Répulseurs d'énergie"],
    image: "./01.revision.assets/iron-man.png",
  },
  {
    name: "Thor",
    birthYear: 1962,
    job: "Médecin",
    equipment: ["Gros marteau"],
    image: "./01.revision.assets/thor.png",
  },
];

// -------- PARTIE 2: DOM ---------

// Fonction pour créer et insérer un étudiant dans le DOM
function createStudentCard(student) {
  const avengerDiv = document.createElement("div");
  avengerDiv.classList.add("avenger");

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const rectoDiv = document.createElement("div");
  rectoDiv.classList.add("recto");

  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");

  const image = document.createElement("img");
  image.src = student.image;

  const overlayDiv = document.createElement("div");
  overlayDiv.classList.add("overlay");

  const h1Name = document.createElement("h1");
  h1Name.textContent = student.name;

  containerDiv.appendChild(image);
  containerDiv.appendChild(overlayDiv);
  containerDiv.appendChild(h1Name);
  rectoDiv.appendChild(containerDiv);

  const versoDiv = document.createElement("div");
  versoDiv.classList.add("verso");

  const h2Name = document.createElement("h2");
  h2Name.textContent = student.name;

  const birthYearDiv = document.createElement("div");
  birthYearDiv.textContent = `Année de création : ${student.birthYear}`;

  const jobDiv = document.createElement("div");
  jobDiv.textContent = `Métier : ${student.job}`;

  const equipmentDiv = document.createElement("div");
  equipmentDiv.textContent = "Équipement :";
  const equipmentList = document.createElement("ul");
  student.equipment.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    equipmentList.appendChild(li);
  });
  equipmentDiv.appendChild(equipmentList);

  versoDiv.appendChild(h2Name);
  versoDiv.appendChild(birthYearDiv);
  versoDiv.appendChild(jobDiv);
  versoDiv.appendChild(equipmentDiv);

  cardDiv.appendChild(rectoDiv);
  cardDiv.appendChild(versoDiv);

  avengerDiv.appendChild(cardDiv);

  return avengerDiv;
}

// Fonction pour insérer tous les étudiants dans le DOM
function insertStudentsIntoDOM() {
  const avengersContainer = document.getElementById("avengers");

  students.forEach((student) => {
    const studentCard = createStudentCard(student);
    avengersContainer.appendChild(studentCard);
  });
}

// Appel de la fonction pour insérer les étudiants dans le DOM
insertStudentsIntoDOM();

   
    




// Une fois les éléments insérés : si vous ne voyez pas toutes les informations s'afficher, c'est normal. 
// On ne voit que le 'recto' des cartes et on verra le 'verso' après avoir réalisé l'étape 3.







// -------- PART 3: LISTENERS ---------

avengerStudents.addEventListener(`mouseover`,function(){
  
})
// Lors du survol avec la souris de CHAQUE étudiant :
//     on ajouter à la div `.avenger` une nouvelle classe `.hovered`
// Idem, lorsque l'utilisateur RETIRE sa souris de CHAQUE étudiant :
//     on retire la div `.hovered`

// NB: dans la "vraie" vie, ce genre d'effet visuel pourrait se faire uniquement en CSS (sans JS). Ici c'est pour l'exemple, et la gloire.


// -------- PART 4: FORM ---------

// Dans le HTML ajouter un formulaire avec :
// - un input de type text
// - un input de type submit

// Lorsque l'utilisateur soumet le formulaire, on récupère le texte entré, et on l'affiche en console.
// Note: le 'style' du formulaire n'a AUCUNE importante. Mais faites vous plaisir si vous le souhaitez !


// -------- PART 5: ALGO ---------

// Filtrer uniquement les "étudiants" dont le speudonyme contient le texte entré par l'utilisateur.
// Par exemple, si l'utilisateur tape 'man', on veut récupérer `Spiderman` et `Iron Man` (attention aux majuscules donc ;)) 
// Par exemple, si l'utilisateur tape 'lk', on veut récupérer `Hulk`
// Par exemple, si l'utilisateur tape 'coucou', on veut récupérer un tableau vide.

// Pour cela compléter la fonction suivante:

/**
 * @param {string} searchText 
 * @returns {Array<object>}
 * 
 */
function filterHeroes(searchText) {
    // TODO: implémenter cette fonction
}
// Vérifier en console loggant uniquement les étudiants demandés par l'utilisateur lorsque celui-ci soumet le formulaire.



// -------- PART 6: WRAP UP ---------

// Toujours lorsque l'utilisateur soumet le formulaire, remplacer cette fois la liste de tous les étudiants déjà affichés dans le DOM, par uniquement ceux recherchés par l'utilisateur.

// Exemple : si l'utilisateur cherche "Spider", on lui affiche uniquement Spiderman !
// Trop fort on a fait un moteur de recherche !
