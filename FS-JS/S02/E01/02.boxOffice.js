// Etape 1 - Demander à l'utilisateur s'il aime, ou non, le film Harry Potter (=> `confirm`)
      const question = confirm(`Aime-tu le film Hary Potter ?`);
// Etape 2 - Conditions:
//   - Si l'utilisateur choisit par l'affirmative ('OK'), alors lui dire exactement "Tu as bon gout !" (=> `alert`)
//   - Si l'utilisateur choisit par la négative ('Annuler'):
//     - Lui demander d'entrer le titre d'un film qu'il aime (=> `prompt`)
//     - Lui répondre exactement "Ah donc tu aimes XXXXX, mais quel gout à la con !" (=> `alert`)
//        - où  XXXXX est le nom du film entré par l'utilisateur
            if(question === true){
                alert(`Tu as bon gout !`)
            }else {
              const film = prompt(`rentre le titre d'un film que tu aime ,`);
                alert(`Ah donc tu aimes ${film}, mais quel gout à la con !`)
            }