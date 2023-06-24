// Etape 1 - Définir une variable nommée 'randomNumber' avec pour valeur un nombre aléatoire entre [0, 1[.
//   - Note: le nombre doit être *généré* aléatoirement (et non pas hard-codé directement, pas de triche !).
const randomNumber = Math.random();

// Etape 2 - Afficher dans la console une chaine de caractères dont la valeur est :
//   "Mon nombre aléatoire est : X"
//      où X est le nombre aléatoire généré précédemment.
//   NB: Attention à la ponctuation de chaine de caractère.
console.log(`Mon nombre aléatoire est : ${randomNumber}`);

// Etape 3 - Ecrire une condition :
//   - Si le nombre aléatoire est strictement supérieur à 0.5, afficher dans la console : "C'est petit ça !".
//   - Sinon, afficher dans la console : "C'est grand ça !"
if (randomNumber < 0.5) {
  console.log(`C'est petit ça !`);
} else {
  console.log(`C'est grand ça !`);
}
