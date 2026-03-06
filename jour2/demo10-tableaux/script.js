/*
  Démonstration 10 : Les tableaux et collections
*/

// 1. Déclaration d'un tableau
const array1 = [1, 2, 3, 4]; // Expression à la volée
const array2 = new Array(4); // Constructeur

console.log('array1 :>> ', array1);
console.log('array2 :>> ', array2);

// 2. Modifier les valeurs d'un tableau

array1[0] = 42;

console.log('array1 :>> ', array1);

// 3. Récupération de la taille d'un tableau
console.log('array1.length :>> ', array1.length);

// 4. Accessibilité d'un tableau

console.log('array1[10] :>> ', array1[10]);
console.log('array1[9999999999] :>> ', array1[9999999999]);

array1[9999999999] = 42;
console.log('array1[9999999999] :>> ', array1[9999999999]);
console.log('array1 :>> ', array1);

array1["hello"] = "World !";

