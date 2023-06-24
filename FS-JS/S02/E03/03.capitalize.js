/**
 * @description Retourne la phrase passée en paramètre, avec une lettre majuscule pour la première lettre,
 * et les autres lettres en minuscule.
 *
 * @param {String} sentence
 * @returns {String} sentence capitalisé correctement
 *
 * @example capitalize("ocLOcK "); // returns "Oclock"
 *
 */
function capitalize(sentence) {
  let letter = sentence.toLowerCase(); // stocke le parametre en minuscule dans une variable "letter"

  let index = letter.charAt(0); // renvoie une nouvelle chaine de caractére a l'index 0 donc "o" de "ocLOcK"
  index = letter.slice(1); // supprime l'index 1 donc "o" de "ocLOcK"
  let firstLetter = "0"; //création d'une variable qui est une chaine de caractéres.
  index = firstLetter + index; //ajout de la variable créer précedemment "firsLetter" a index
  console.log(index); //console de index pour verifier
  sentence = index; //le parametres est égale a index

  return sentence; // retourne le parametres
  // TODO: implementer cette fonction
  // N'hésites pas à faire du SPEUDO-CODE avant de te lancer !
}
let myFunctions = capitalize("ocLOcK"); // arguement du parametre de la fonction

console.log(
  `la fonction qui retourne le parametres une chaine de caracteres ${myFunctions}`
);

// N'oublie pas de tester ta fonction :)

// /!\ Ne pas supprimer cette ligne (utile pour lancer les tests automatisés)
//module.exports = capitalize; // DO NOT DELETE ME SENPAI *_*
