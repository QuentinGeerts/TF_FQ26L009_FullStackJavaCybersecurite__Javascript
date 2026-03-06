/*
  Démonstration 08 - Structures conditionnelles
*/

// 1.  IF...ELSE...

// if (true) {
//   console.log("Exécution de la ligne");
// }

// if (true)
//   console.log("Exécution de la ligne");

// if (true) console.log("Exécution de la ligne");



// 2. Switch

let value = "choix666";

switch (value) {

  case "choix1":
    // bloc d'instructions
    console.log("Choix 1");
    break;

  case "choix2":
    // bloc d'instructions
    console.log("Choix 2");
    break;

  case "choix3":
    // bloc d'instructions
    console.log("Choix 3");
    break;

  default:
    console.log("Choix inconnu");
    break;
}

// 3.  Nullish coalescing
// ?? : permet de de prendre la valeur à gauche s'il y a une valeur
//    prend la valeur à droite en cas d'absence de valeur

// const student = {
//   lastname: "Geerts",
//   firstname: 'Quentin',
//   yearResult: 12
// };

const student = null;

// ?.: opérateur de chaînage optionnel
// Permet de récupérer la valeur d'une propriété si l'objet n'est pas null
// Dans le cas où l'objet est null, l'instruction est ignorée
const result = student?.yearResult ?? 10;

console.log('result :>> ', result);