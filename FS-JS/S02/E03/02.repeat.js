/**
 * @param {String} text
 * @param {Number} n
 * @returns {String} Retourne une chaine de caractère composés de n fois le text
 * @example repeat("bonjour", 3) // returns "bonjourbonjourbonjour"
 */
function repeat(text, n) {
  // créer une variable result qui commence avec une chaine de caractére vide.
  //pour i allant de 1 à n fois.
  //on ajoute text dans result.
  // on retourne result
  let result = ""; // création de la variable  
  for (let index = 0; index < n; index++) { // une boucle for pour répeter n fois le parametre
    console.log(index); // je console pour vérifier si cela marche
    result = result + text;// je réasigne ma variable.
    
  }
  return result; // je retourne ma variable pour sortir ma valeur
  // Complete cette fonction repeat.
  // Attention, pour le bien de l'exercice, interdit d'utiliser la fonction repeat de JS ;)
}
console.log(repeat("bonjour ", 3));

// Ne pas hésiter à tester sa fonction dans la console du navigateur ;)

// /!\ Ne pas supprimer cette ligne (utile pour lancer les tests automatisés)
//module.exports = repeat; // DO NOT DELETE ME SENPAI *_*
