// Etape 1:
// Ecrire une fonction 'pythagore' qui prend 2 paramètres (des nombres) et qui RETOURNE la somme de leurs carrés (🤯)
// Exemple: si on l'appelle avec 4 et 3, elle doit retourner 25 (4 * 4 + 3 * 3);
    function pythagore (number , number0){
        var opération =  number * number + number0 * number0;
        var result = opération;
        return ` La fonction retourne le resultat de l'opération pythagore qui est : ${result}`;
        
    }
   const myFunction =  pythagore(4,3);
    console.log(myFunction);


// Etape 2:
// Tester ! Afficher en console la valeur de pythagore(3, 4) !
