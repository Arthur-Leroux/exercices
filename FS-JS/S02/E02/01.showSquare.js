// Etape 1 - Ecrire une fonction 'showSquare' qui prend un argument (un nombre) et affiche en console le message suivant : 
//           "Le carré de X est : Y"

//           où X est le nombre passé en paramètre et Y le carré de ce nombre.
//           NB: Attention à la ponctuation de chaine de caractère.

function showSquare(number){
    return `le carré de ${number} est ${number * number}`;
    
}

// Etape 2 - Appeler cette fonction avec le nombre 4. Relancer les tests.
const myFunction = showSquare(4);
console.log(myFunction);