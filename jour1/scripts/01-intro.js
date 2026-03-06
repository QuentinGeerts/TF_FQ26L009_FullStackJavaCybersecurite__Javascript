console.log("Hello world");

// Pexu-tu voir ce message?

let monEntier = 123;
const monEntierStr = "123";

let unNombreEntier = null;
unNombreEntier = "Cen'estpas un nombre"; // éviter faire ceci
unNombreEntier = 123546;

// Exemple sur les tableaux
const tabNum = [1, 2, 3];
const tabStr = ["Hello", "World"];
const matrice = [
  [1, 2, 3],
  [4, 5, 6],
];

// Ne pas faire
const tabToutEtRien = [1, "ea", new Date(), true, { prenom: "Phil" }];

// Exemple d'objet
const persone = {
  prenom: "phil",
  age: 28,
  direBonjour: function (autrePrenom) {
    console.log(autrePrenom);
  },
  "🔥": "Le feu!",
};

console.log(persone.age);
console.log(persone["🔥"]);

// Revenez voir ce bout de code quand vous aurez vu OO
class Personnage {
  prenom;
  age;

  constructor(prenom, age) {
    this.prenom = prenom;
    this.age = age;
  }

  direBonjour(autrePrenom) {
    console.log(this.prenom);
    console.log(autrePrenom);
  }
}

const bill = new Personnage("Bill", 999);
console.log(bill.age);

// Exemple typeof
console.log(typeof monEntier);
console.log(typeof monEntierStr);
console.log(typeof tabNum);
console.log(typeof persone);
console.log(typeof Personnage);
console.log(typeof bill);
console.log(typeof null);
console.log(typeof undefined);

console.log(persone.constructor);
console.log(persone.constructor.name);
console.log(persone.constructor.name == "Personnage");
console.log(bill instanceof Personnage);

// Exemple random
console.log(Math.random());
// provient de https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random#obtenir_un_entier_al%C3%A9atoire_dans_un_intervalle_ferm%C3%A9
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomIntInclusive(0, 100));
