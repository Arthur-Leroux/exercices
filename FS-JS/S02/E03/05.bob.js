/*

ETAPE 1
Créer une variable `sponge` contenant un objet présentant Bob l'éponge:
Libre à toi de choisir le nom des clefs, mais voici les valeurs attendues
    

| Propriété | Name |
| -- | -- |
| Prénom | Bob |
| Nom de famille | L'éponge |
| Ville | Bikiny Bottom |
| Meilleur ami | Patrick |
| Métier | Cuisinier |
| Age | 22 |
| Activités favorites | "pêche aux méduses", "sculpture de bulles" | 

*/
const sponge = {
  firstName: "Bob",
  lastName: "L'éponge",
  country: "Bikini Bottom",
  bestFriends: "Patrick",
  work: "Cuisinier",
  age: 22,
  favoriteActivity: ["pêche aux méduses", "sculpture de bulles"],
};


/*
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
ETAPE 2
Grâce à une boucle, afficher dans la console (!) CHAQUE propriété de Bob sous cette forme :

"- Bob's KEY is VALUE !"

Tester en console : pas de test automatisé pour l'instant \(ツ)/

*/
for (const property in sponge) {
  console.log(`bob's ${property} is ${sponge[property]} `);
};