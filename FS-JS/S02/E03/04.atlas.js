// Ne pas modifier l'atlas
const atlas = {
  france: {
    name: "France",
    population: 68014000,
    currency: "euro",
    languages: ["français", "breton", "basque"],
  },
  italy: {
    name: "Italy",
    population: 60317116,
    currency: "euro",
    languages: ["italian", "piedmontese", "sicilian"],
  },
  peru: {
    name: "Peru",
    population: 31914989,
    currency: "sol",
    languages: ["espagnol", "quechua", "aymara"],
  },
};

/**
 *
 * @description
 * Retourne la description d'un pays défini dans l'atlas
 * Si le pays n'est pas defini dans l'atlas, retourne "Ce pays n'existe pas." // Astuce: penser à undefined !
 *
 * @param {String} countryName
 * @returns {String} La description du pays
 *
 * @example
 * describeCountry("france"); // returns : "Le pays France possède 68014000 habitants. On y parle principalement français et on paie en euro."
 * descrieCountry("wakanda"); // returns : "Ce pays n'existe pas."
 *
 * Note: pour la langue principale, utiliser la première valeur de la liste des langues.
 *
 */

    function describeCountry(countryName) {
    // créer une variable qui stocke les clef dans l'objet atlas
    // retourner la variable qui sotcke les clef
    // si le pays n'existe pas retourner "ce pays n'existe pas!"
    // TODO: implementer la fonction
    const country = atlas[countryName];
    
    if (country === undefined) {
        return "Ce pays n'existe pas !";
    }
    const name = country.name;
    const population = country.population;
    const currency = country.currency;
    //const languages = country.languages;
    const firstLanguage = country.languages[0];
    return `Le pays ${name} posséde ${population} habitants.
     On y parle principalement ${firstLanguage} et on paie en ${currency}`
    }
    console.log(describeCountry("italy"));
    console.log(describeCountry("wakanda"));
    console.log(describeCountry("peru"));
    console.log(describeCountry("espagne"));
// /!\ Ne pas supprimer cette ligne (utile pour lancer les tests automatisés)
//module.exports = describeCountry; // DO NOT DELETE ME SENPAI *_*
