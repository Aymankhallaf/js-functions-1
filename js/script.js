// Pour chaque question, implémentez la fonction demandée.
// Pour chaque fonction, faire au moins 2 appels de la fonction avec des paramètres différents et afficher les résultats dans la console.

/* ------------------------------------------------------*/

console.log(
  "1/ Implémentez une fonction qui retourne la somme de ses 2 paramètres."
);

/**
 * calculate the sum of two number.
 * @param {number} a first number
 * @param {number} b second number
 * @returns {number} sum
 */
function getSum(a, b) {
  return a + b;
}

console.log(getSum(5, 8));
console.log(getSum(-1000, 1000));

/* ------------------------------------------------------*/

console.log(
  "2/ Implémentez une fonction qui retourne la plus petite des 2 valeurs passées en paramètre."
);

/**
 * calculte the smaller value between two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number} the smaller value
 */
function getMintwo(a, b) {
  return a < b ? a : b;
}
console.log(getMintwo(9, 4));
console.log(getMintwo(-900, -5));

/* ------------------------------------------------------*/

console.log(
  "3/ Implémentez une fonction qui retourne la dernière valeur d'un tableau."
);

const table = [1, 2, 10, 7];
const fruits = ["fig", "orange", "apple"];
/**
 * return the last item in array
 * @param {*} table array ex. [2,5,7]
 * @returns the last item
 */
function getLastitem(table) {
  return table[table.length - 1];
}
console.log(getLastitem(table));
console.log(getLastitem(fruits));

/* ------------------------------------------------------*/

console.log(
  "4/ Implémentez une fonction qui retourne la valeur en entrée augmentée d'un pourcentage d'augmentation."
);

/**
 * calculate the augmentation of a value.
 * @param {number} n
 * @param {number} p a percent without % ex. 20
 * @returns {number} the augmentation value.
 */

function calcAugmentation(n, p) {
  return (1 + p / 100) * n;
}

console.log(calcAugmentation(100, 10));
console.log(calcAugmentation(200, 20));

/* ------------------------------------------------------*/

console.log(
  "5/ Implémentez une fonction qui retourne la valeur maximale entre 3 valeurs."
);

/**
 * return the maximum value of three numbers.
 * @param {number} a first number
 * @param {number} b second number
 * @param {number} c thrid number
 * @returns {number} the maxuimam value
 */
// function maxThreeNum(a, b, c) {
//   const arr = [a, b, c];

//   let max;
//   for (const item of arr) {
//     if (item > max || max == undefined) {
//       max = item;
//     }
//   }
//   return max;
// }
// console.log(maxThreeNum(5, 10, 11));
// console.log(maxThreeNum(-50, 1000, 0));

function maxThreeNum(a, ...c) {
  const arr = c;

  let max;
  for (const item of arr) {
    if (item > max || max == undefined) {
      max = item;
    }
  }
  return max;
}
console.log(maxThreeNum(5, 10, 11));
console.log(maxThreeNum(-50, 1000, 0));

/* ------------------------------------------------------*/

console.log(
  "6/ Implémentez une fonction qui retourne la somme des valeurs d'un tableau."
);

/**
 *return the summation of table.
 * @param {array} table array of numbers ex. [1,5,..]
 * @returns {number} the summtion of the table
 */
function sumTable(table) {
  let sum = 0;
  for (const item of table) {
    sum += item;
  }
  return sum;
}

console.log(sumTable([10, 20, 50]));
console.log(sumTable([-10, 120, 0]));

/* ------------------------------------------------------*/

console.log(
  "7/ Implémentez une fonction qui retourne une valeur aléatoire entre 0 et un nombre."
);

/**
 * return a random value between 0 and the given number
 * @param {number} max the given number
 * @returns {number}
 */
function getRandom(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandom(10));
console.log(getRandom(111));

/* ------------------------------------------------------*/

console.log(
  "8/ Implémentez une fonction qui retourne la moyenne des valeurs d'un tableau."
);

/**
 * calculte a mean value of table
 * @param {array} array table in array format []
 * @returns {number} the mean value
 */
function getMeanvalue(table) {
  let sum = 0;
  for (const item of table) {
    sum += item;
  }
  return sum / table.length;
}

console.log(getMeanvalue([10, 20]));
console.log(getMeanvalue([-10, 120, 0, 5]));
console.log(getMeanvalue([10]));

/* ------------------------------------------------------*/

console.log(
  "9/ Implémentez une fonction qui retourne une durée en heures et minutes depuis une durée en minutes."
);

/**
 * convert minutes into houres and minutes.
 * @param {number} minutes number of minutes
 * @returns {string} number of heures and minutes ex. 2 houres 30 minutes.
 */
function getHoures(minutes) {
  const tHoures = minutes / 60;
  const houres = Math.floor(tHoures);
  const restMinutes = (tHoures - houres) * 60;
  return `${houres} houres ${restMinutes} minutes`;
}

console.log(getHoures(120));
console.log(getHoures(150));
/* ------------------------------------------------------*/

console.log(
  "10/ Implémentez une fonction qui retourne la valeur minimale d'un tableau."
);

/**
 * get a minimum value in a table.
 * @param {array} table array of numbers.
 * @returns {number} return the minum value.
 */
function getMinvalues(table) {
  let min;
  for (const item of table) {
    if (min === undefined || min > item) {
      min = item;
    }
  }
  return min;
}
console.log(getMinvalues([5, 7, 1]));
console.log(getMinvalues([0, 7, -1]));

/* ------------------------------------------------------*/

console.log(
  "11/ Implémentez une fonction qui retourne la clé d'un objet pour la valeur maximale ."
);

/**
 * return a maximum value of object.
 * @param {{}} params an object {} of key and values.
 * @returns {string} a key of the maximum value.
 */

function getma(params) {
  let maxName = "";
  let max;
  for (item in params) {
    if (max === undefined || max < params[item]) {
      max = params[item];
      maxName = item;
    }
  }

  return maxName;
}

console.log(getma({ apple: 10, orange: 8 }));
console.log(getma({ tom: 10, sep: 8, vin: 1000 }));

/* ------------------------------------------------------*/

console.log(
  "12/ Implémentez une fonction qui retourne une valeur aléatoire dans un tableau."
);

/**
 *return a random value from an array.
 * @param {array} array array of numbers []
 * @returns {*} a random item of array.
 */
function randValueFromarr(arr) {
  let max = arr.length;
  return arr[Math.floor(Math.random() * max)];
}

console.log(randValueFromarr([5, 10, 100, 1000]));
console.log(randValueFromarr(["fig", "10", "applle", 0]));
/* ------------------------------------------------------*/

console.log(
  "13/ Implémentez une fonction qui retourne le nombre de mots dans un texte."
);

txt1 =
  "Implémentez une fonction qui retourne la somme des valeurs d'un tableau";
/**
 * count numbers of words in text or paragraph.
 * @param {""} txt a text or pargraph ex. "put your text here".
 * @returns {number} the number of words
 */
function numOfword(txt) {
  const words = txt.split(" ");
  return words.length;
}
console.log(numOfword(txt1));
console.log(numOfword("one"));
console.log(
  numOfword(
    "TXT est un groupe sud-coréen composé de cinq membres formé par le label Big Hit Entertainment. Le nom du fanclub se nomme MOA, qui est un acronyme"
  )
);
