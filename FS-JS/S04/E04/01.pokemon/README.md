# POKEMON - GOTTA CATCH 'EM ALL - DEUXIEME PARTIE !

Bienvenue dans la suite de l'exercice E03. 

---

## Partie 1 - As-tu fais l'exercice E03 ? 

Si ce n'est pas fait, il est à faire impérativement car cette suite contient une correction de celui-ci ! 
En particulier la partie 2, 3, 4 (création, remplissage et connexion à la BDD) sont des étapes necessaires pour faire fonctionner cet exercice. 

**Vérification :**
- Lancer l'app depuis la racine de Ocode : `npm run dev S04 E04 01` 
- Tout doit fonctionner ici : http://localhost:3000

---

## Partie 2 - Prise en main du code

Parcours à nouveau le repo pour comprendre les différences d'implémentation avec ton code. 

Cela facilitera la prise en main pour la suite des exercices.

---

## Partie 3 - Extraction d'un data mapper

Extraire les appels à la base dans un fichier `app/database/dataMapper.js`. Les briques impactées seront donc : 
- le controller admin
- le controller pokemon
- le middleware logger
- /!\ Ne pas extraire le code du main controller : on garde ça pour la partie 4 /!\


---

## Partie 4 - Refacto async/await

Le `mainController` utilise encore la syntaxe `.then/.catch` pour manipuler les promesses 😿.
- modifier le code de ce controlleur pour utiliser la syntaxe ES6 (`async/await/try/catch`). Ce changement doit être iso-fonctionnel.
- puis extraire les requêtes à la base dans le data mapper, comme en partie 3. 

---



# Et maintenant, on s'amuse ! 

L'architecture est propre. On est bien ! Ya-pu-ka ! 

Les parties suivantes sont indépendantes, mais classés par ordre croissant de difficulté. Vous pouvez les réaliser sur plusieurs jours évidemment ! 

Encore mieux, sur plusieurs branches (optionel):
- ne pas hésiter à se créer une branche lorsque qu'on commence une nouvelle feature (`git checkout -b monSpeudoGitHub-partie-X`)
- ne pas oublier de commit regulièrement.
- et une fois la fonctionnalité terminée, retourner sur sa branche principale (`git checkout -b maBranchePrincipaleQuiNestPasMain`) et merger sa sous branche (`git merge monSpeudoGitHub-partie-X`). 

Tous les exercices sont **exploratoires**. Il n'y a pas d'indice, pour le meilleur et pour le pire 😈 !
L'objectif est de vous entrainer à découper en étapes et avancer progressivement. 

Bon courage, mais surtout, amusez-vous bien ! 

--- 

## Partie 5 - Page 404

Champ libre. Faites vous plaisir :)

---

## Partie 6 - Page d'un pokemon

- Implémenter la route `GET /pokemons/:id`.
  - Cette page doit afficher les informations d'un pokemon :
    - son nom
    - ses types
    - le nom de ses évolutions s'il en a
  - et plus encore si vous le souhaitez
  - le design est à votre guise. Mais faites simple !
- Depuis la page `/pokemons`, un clic sur un pokemon doit rediriger vers les détails de celui-ci
- Si l'ID du pokemon n'existe pas, renvoyer vers la page 404. 

---

## Partie 7 - Barre de recherche

Dans la `navbar` de notre application, rajouter une barre de recherche, pour rechercher des pokemons. 
Cette barre de recherche doit déclencher une requête GET vers l'URL suivante :

- `GET /pokemons?search=chu`
  - où `search` est (on le rappelle) le `query param` de la requête
  - où `chu` est la valeur entrée par l'utilisateur dans barre de recherche

Et doit afficher la liste des pokemons qui contiennent le terme recherché dans leur nom.
Par exemple, rechercher `chu` doit afficher notamment `pikachu`, `raichu` et `pichu` !

---

## Partie 8 - Page d'un dresseur

- Implémenter la route `GET /trainers/:id`.
  - Cette page doit afficher :
    - les informations du dresseur (ie. son nom)
    - la liste des pokemons qu'il porte et leur niveau
    - la liste des pokemons qu'il a en stock et leur niveau.
  - Un clic sur un pokemon de cette page doit rediriger vers le détails de celui-ci.
- Depuis la home page, un clic sur un dresseur doit rediriger vers les détails de celui-ci.
- Si l'ID du dresseur n'existe pas, renvoyer vers la page 404. 
