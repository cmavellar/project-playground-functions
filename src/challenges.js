// Desafio 1
function compareTrue(x, y) {
  if (x === true && y === true) {
  return true;
  }
  else {
  return false;
  }
}
// console.log(compareTrue(3,3));

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
}
 
// Desafio 3
function splitSentence(string) {
  arrayDeStrings = string.split(" ");
  return arrayDeStrings;
}
// console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(arrayNomes) {
  let concat = "";
  concat = arrayNomes[arrayNomes.length -1] + ", " + arrayNomes[0];
  return concat;
}
//  console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
  
// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
