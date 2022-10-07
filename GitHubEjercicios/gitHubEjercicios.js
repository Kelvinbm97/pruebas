// Metodos-de-array-ejercicios

// n1

const playlist = [
  "Concrete and Gold",
  "The Line",
  "Sunday Rain",
  "Happy Ever After (Zero Hour)",
  "Arrows",
  "Dirty Water",
  "La Dee Da",
  "The Sky Is a Neighborhood",
  "Make It Right",
  "Run",
  "T-Shirt",
];
const playlists = playlist.forEach((musicas) => {
  console.log(musicas);
});

// n2

const librosDeJS = [
  "JavaScript for Kids: A Playful Introduction to Programming",
  "Composing Software",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "JavaScript: The Good Parts",
  "Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
  "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
  "JavaScript: The Definitive Guide",
  "You Don’t Know JS",
  "JavaScript Allongé: The Six Edition",
];

/// ¡escribir en este espacio la solución del ejercicio!
console.log(
  "Mi lista de libros de JavaScript tiene " + totalLibros + " libros"
);

// n3

const canciones = [
  "Concrete and Gold",
  "The Line",
  "Sunday Rain",
  "Happy Ever After (Zero Hour)",
  "Arrows",
  "Dirty Water",
  "La Dee Da",
  "The Sky Is a Neighborhood",
  "Make It Right",
  "Run",
  "T-Shirt",
];

const resultado = canciones.forEach((musica, i) => {
  console.log(`${i} - ${musica}`);
});
// resultado esperado
// 0 - Concrete and Gold
// 1 - The Line
// 2 - Sunday Rain
// 3 - Happy Ever After (Zero Hour)
// 4 - Arrows
// 5 - Dirty Water
// 6 - La Dee Da
// 7 - The Sky Is a Neighborhood
// 8 - Make It Right
// 9 - Run
// 10 - T-Shirt

// n4

const numbers = [6, 1, 34, 94, 3, 17];
let sum = 0;

const respuesta = numbers.forEach((item) => {
  sum += item;
});

console.log(sum);
// deberia mostrar 155

// n5

const notasDeTPs = [4, 7, 8, 5, 10];
let notaFinal = 0;
let suma = 0;

const promedio = notasDeTPs.forEach((item) => {
  suma += item;
  notaFinal = suma / notasDeTPs.length;
});
console.log(notaFinal);
// deberia mostrar 6.8

//n6

const masNumeros = [
  43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32,
];
const numerosPares = [];
const numerosImpares = [];

for (let i = 0; i < masNumeros.length; i++) {
  if (i % 2 == 0) {
    numerosPares.push(masNumeros[i]);
  } else {
    numerosImpares.push(masNumeros[i]);
  }
}

console.log("pares: ", numerosPares);
console.log("impares: ", numerosImpares);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]

// n7

const valores = [6, 0, 5, 2, 3, 8, 7, 4, 1, 9];
const dobles = [];

const variable = valores.forEach((item) => {
  dobles.push(item * 2);
});

console.log("valores: ", valores);
console.log("dobles: ", dobles);
// deberias tener como resultado
// valores:  [ 6, 0, 5, 2, 3, 8, 7, 4, 1, 9 ]
// dobles:  [ 12, 0, 10, 4, 6, 16, 14, 8, 2, 18 ]

// Map
// n8

const numeros = [1, 2, 3, 4, 5];

const numerosMasDiez = numeros.map((element) => element + 10);

console.log(numeros); // [1, 2, 3, 4, 5]
console.log(numerosMasDiez); // [11, 12, 13, 14, 15]

//n9

const numeross = [3, 7, 13, 99];

const dobless = numeross.map((element) => element * 2);

console.log(numeross); // [3, 7, 13, 99]
console.log(dobless); // [6, 14, 26, 198]

// n10

const frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];

const frasesConExclamacion = frases.map((element) => `¡${element}!`);

console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(frasesConExclamacion); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]

//n11

const librosDeJSx = [
  "JavaScript for Kids: A Playful Introduction to Programming",
  "Composing Software",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "JavaScript: The Good Parts",
  "Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
  "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
  "JavaScript: The Definitive Guide",
  "You Don’t Know JS",
  "JavaScript Allongé: The Six Edition",
];

librosDeJSx.map((element) => {
  console.log(`<li>${element}</li>`);
});

// el resultado final debería ser
// <ul><li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li></ul>

//  n12
const frasesJs = [
  "Labore sea dolor.",
  "Justo rebum dolor.",
  "Stet lorem amet.",
];

const longitudes = frasesJs.map((x) => x.length);

console.log(frasesJs); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
console.log(longitudes); // [ 17, 18, 16 ]

//n13

const playlistEng = ["Everlong", "The Pretender", "Learn to Fly"];

const final = playlistEng.map((element, x) => `${x} - ${element}`);
console.log(final);

// RESULTADO ESPERADO
// [ '0 - Everlong', '1 - The Pretender', '2 - Learn to Fly' ]

//n14

const costos = [12.5, 56, 98, 45.75];

const agregarIVA = function (costo) {
  return costo * 1.21;
};

const sumarGanancia = function (costo) {
  return costo * 1.5;
};

const preciosFinales = costos.map((element) => element * 1.5 * 1.21);

console.log(preciosFinales);

// deberia mostrar
// [ 22.6875, 101.64, 177.87, 83.03625 ]

// n15

const productos = ["celular", "notebook", "monitor"];
const costos1 = [12.5, 56, 98];

const agregarIVA1 = function (costo) {
  return costo * 1.21;
};

const sumarGanancia1 = function (costo) {
  return costo * 1.5;
};

const sumaN1 = costos1.map((element) => element * 1.5 * 1.21);
const preciosFinalesN1 = productos.map((element) => element + sumaN1[0]);

console.log(preciosFinalesN1);
// deberia mostrar
// [ "celular 22.6875", "notebook 101.64", "monitor 177.87" ]

// Filter
// n16

const costosN1 = [
  39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14,
];

const losMasCaros = costosN1.filter((element) => element > 50);

console.log(costosN1);
console.log(losMasCaros);
// deberia mostrar
// [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
// [ 53, 99, 68, 54, 97, 90, 92, 75, 86 ]

// n17
const masNumerosN1 = [
  43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32,
];

const numerosPar = masNumerosN1.filter((num) => num % 2 == 0);
const numerosImpar = masNumerosN1.filter((num) => num % 2 == 1);

console.log("pares: ", numerosPar);
console.log("impares: ", numerosImpar);
// deberias tener como resultado
// pares: [18, 46, 44, 42, 0, 40, 10, 38, 34, 40, 4, 32]
// impares: [43, 11, 37, 29, 9, 3, 37, 25]

// n18

const mix = [
  "Ut vero.",
  2,
  function () {
    console.log("hola mundo!");
  },
  56,
  "Diam rebum nonumy et.",
  true,
  false,
  "Kasd stet.",
  "Sit et dolor.",
  null,
  null,
  [1, 2, 3],
  "Dolore.",
];

const soloStrings = mix.filter((element) => typeof element == "string");
console.log(soloStrings);

// deberia mostrar
// [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]

//  n19

const playlistEspn = [
  "Smells Like Teen Spirit",
  "Everlong",
  "Come As You Are",
  "The Pretender",
  "Heart-Shaped Box",
  "Learn to Fly",
  "Lithium",
];
var playlistEscuchada = ["The Pretender", "Lithium", "Come As You Are"];

const playlistSinEscuchar = playlistEspn.filter((element) => {});
console.log(playlistSinEscuchar);
// deberia mostrar
// [ 'Smells Like Teen Spirit', 'Everlong', 'Heart-Shaped Box', 'Learn to Fly' ]

// Reduce
// n20

const numbersInteger = [6, 1, 34, 94, 3, 17];

const resultado0 = numbersInteger.reduce(
  (anterior, actual) => anterior + actual
);
console.log(resultado0);
// deberia mostrar 155

//n21

const numbers1 = [6, 1, 34, 94, 3, 17];

const resultado9 = numbers1.reduce((anterior, actual) => anterior * actual);
console.log(resultado9);

// deberia mostrar 977976

// n22

const notasDeTPs1 = [4, 7, 8, 5, 10];

const resultados1 = notasDeTPs1.reduce((anterior, actual) => anterior + actual);
const promedios = resultados1 / notasDeTPs1.length;
console.log(promedios);

// deberia mostrar 6.8

// n23

const librosDeJS8 = [
  "JavaScript for Kids: A Playful Introduction to Programming",
  "Composing Software",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "JavaScript: The Good Parts",
  "Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries",
  "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
  "JavaScript: The Definitive Guide",
  "You Don’t Know JS",
  "JavaScript Allongé: The Six Edition",
];

// el resultado final debería ser
// <li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li>

//   n24

const personas = [
  { nombre: "Grace", edad: 6 },
  { nombre: "Ada", edad: 19 },
  { nombre: "Hedy", edad: 34 },
];

const edades = personas
  .map((item) => item.edad)
  .reduce((prev, curr) => prev + curr, 0);
console.log(edades);
// deberia mostrar 59
