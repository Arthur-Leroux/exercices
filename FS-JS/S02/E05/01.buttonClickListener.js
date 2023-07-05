// Etape 1 - En cas de click sur le bouton défini dans le HTML,
function clickButton(target) {
  const button = document.querySelector("#my-button");
  console.log(button);
  button.innerHTML = target;
  return button;
}



document.addEventListener("click", function (event) {
  event.preventDefault;
  clickButton(`Bingo !`);
  
})

// faire en sorte que le texte de celui-ci change et devienne "Bingo !".
