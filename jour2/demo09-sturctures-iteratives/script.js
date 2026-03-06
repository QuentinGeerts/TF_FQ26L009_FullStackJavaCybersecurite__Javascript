/*
  Démonstration 09 - Structures itératives
*/

// 1. While
// 2. Do...whil
// 3. For
// 4. For...of
// 5. For...in
// (6. Array.prototype.ForEach())

// 1.  While

// Trinité de la boucle:
// - Initialisation (où je commence)
// - Condition d'arrêt (où je m'arrête)
// - Modification (comment je m'y rends)

// Boucle à tests antérieurs
while (false) {
  console.log("Ne rentrera pas");
}

// 2.  Do...while
// Boucle à tests postérieurs
do {
  console.log("Rentre une fois");
} while (false);

// 3.  For

// for (initialisation; condition; modification) {

// }
let i = 0;

for (let i = 0, j = i; i < 10; i++, j += 2) {
  console.log("i :>> ", i);
  console.log("j :>> ", j);
}

// 4.  For...of
// Permet d'itérer sur chaque élément d'une structure itérable

const firstname = "Quentin";

for (const letter of firstname) {
  console.log("letter :>> ", letter);
}

const values = [10, 20, 30, 40, 50];

for (const value of values) {
  console.log("value :>> ", value);
}

// 5.  For...in
// Permet d'itérer sur chaque clef d'une structure

const personne = {
  id: 1,
  lastname: "Geerts",
  firstname: "Quentin",
};

for (const index in values) {
  console.log("index, value :>> ", index, values[index]);
}

for (const prop in personne) {
  console.log("prop, value :>> ", prop, personne[prop]);
}

// 6. Array.prototype.ForEach()

console.warn("Format lambda");
values.forEach((v, i, a) => {
  console.log("v, i, a :>> ", v, i, a);
});

console.warn("Format anonyme");
values.forEach(function (value) {
  console.log("value :>> ", value);
});

console.warn("Format nommée");
values.forEach(traiterTableau);

function traiterTableau(value, index, array) {
  console.log("value, index :>> ", value, index);
}

// 7.  Mot-clefs break et continue

// break: permet de sortir d'une structure
// continue: permet de sortir d'une itération

console.warn("Mot-clef break");

for (let i = 0; i < 10; i++) {
  if (i == 4) break;
  console.log('i :>> ', i);
}

console.warn("Mot-clef continue");

for (let i = 0; i < 10; i++) {
  if (i == 4) continue;
  console.log('i :>> ', i);
}