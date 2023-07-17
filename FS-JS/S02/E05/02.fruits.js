// ----- Partie 1 -----

// Faire en sorte que :
// lorsque l'utilisateur SURVOLE le brocoli 🥦 avec sa souris, on ajoute à cette div la classe 'filled'.

const brocoliElement = document.querySelector(`#brocoli`);

brocoliElement.addEventListener("mouseover", function () {
  brocoliElement.classList.toggle(`filled`);
});

// ----- Partie 2 -----

// Faire en sorte que :
// Pour chaque fruit (ie. chaque div),
//   lorsque l'utilisateur SURVOLE le fruit avec sa souris, on ajoute la classe 'filled' à ce fruit.

const fruitElements = document.querySelectorAll(`.fruit`);
console.log(fruitElements[(1, 2, 3)]);

fruitElements.forEach((element) => {
  element.addEventListener("mouseenter", function () {
    element.classList.add("filled");

  })
});

// ----- Partie 3 -----

// Faire en sorte que :
// Pour chaque fruit (ie. chaque div),
//   lorsque l'utilisateur RETIRE sa souris après un survol, on retire la classe 'filled' de ce fruit.
fruitElements.forEach((element) => {
  element.addEventListener("mouseout", function () {
    element.classList.remove("filled");
    
  })
});