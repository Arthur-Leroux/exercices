// Objectif de cet exercice, modifier le DOM sans modifier le HTML !

// 1. Afficher le texte Zinédine Zidane en couleur #F0F

let zidane = document.getElementById("zizou");
zidane.style.color = "#F0F";

// 2. Afficher une 'couleur de fond' (#34EB9E) pour Fabien Bartez

let bartez = document.getElementsByClassName("goalkeeper");
bartez = bartez[0]; // ne pas oublier de récuperer l'index pour appliquer le changement
bartez.style.backgroundColor = "#34EB9E";

// 3. Corriger l'orthographe pour Thierry Henry (il n'y a quand même pas autant de 'r' dans son prénom)

let henry = document.getElementsByTagName("a");
henry = henry[0];
//console.log(henry);
henry.innerHTML = "Thierry Henry";

// 4. Souligner le texte pour tous les defenseurs.
// Pssst : plutôt que de copier le code autant de fois qu'il y a de defenseur, pourquoi pas s'entrainer à utiliser un selecteur approprié et une boucle ?

// console.log(defender);
// defender =defender[0];

let defender = document.getElementsByClassName("defender");
for (i = 0; i < defender.length; i++) {
  defender[i].style.textDecoration = "underline"; // NE PAS OUBLIER D'INFORMER LA BOUCLE
  // QUE "I" VAUT DEFENDER !!!!!!!!!! TWO HOURS AFTER  !!
}

// 5. Insérer un joueur supplémentaire dans la liste : 'Christophe Dugarry'
// (bonus: avec la classe 'forward')

   let creationElement = document.createElement("li");

   let containerElement = document.getElementsByTagName("ul");
   
   creationElement.innerHTML = "Christophe Dugarry";
   console.log(typeof creationElement, creationElement);
      containerElement = containerElement.classList.add("#forward");
      console.log(typeof containerElement, containerElement);
