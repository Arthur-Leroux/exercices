// Etape 1
// Créer un tableau qui contient les noms de tes 2 jeux préférés (pas plus, pas moins).
// Pssst, comment vas-tu appeler ce tableau ?

var games = ["elden Rings", "CSGO"];

// Etape 2
// Une fois ce tableau créé, ajoutes-y 2 jeux que tu n'aimes pas.
var loosVideoGame = games.push("valorant", "age of empire");

console.log(games);

// Etape 3:
// Ensuite,
// - stocker dans une nouvele variable la longeur du tableau.
var lenthArray = games.length;
console.log(lenthArray);
// - stocker dans une nouvelle variable le dernier élément du tableau !

var lastArray = games[3]; //let lastElement = arry[arry.length - 1];
console.log(lastArray);


// Etape 4:
// Et enfin, afficher dans un message d'alert :
// "Mon tableau contient X élements, et son dernier élement vaut : YYY"

alert(`Mon tableau contient ${lenthArray} élement, et son dernier élement vaut : ${lastArray}` )