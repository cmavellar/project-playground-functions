// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let resultado = '';
  let quantidade = 0;

  if (arrayNumbers.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  resultado =
   `(${arrayNumbers[0]}${arrayNumbers[1]})` +
    ` ${arrayNumbers[2]}${arrayNumbers[3]}${arrayNumbers[4]}${arrayNumbers[5]}${arrayNumbers[6]}
    -${arrayNumbers[7]}${arrayNumbers[8]}${arrayNumbers[9]}${arrayNumbers[10]}`;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    for (let index1 = index + 1; index1 < arrayNumbers.length; index1 += 1) {
      if (arrayNumbers[index] == arrayNumbers[index1]) {
        quantidade += 1;
      }
    }
  }
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9 || quantidade > 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return resultado;
}
// console.log(generatePhoneNumber([5, 2, 8, 1, 5, 7, 7, 2, 8, 9, 0]));

// Desafio 12
function triangleCheck(a, b, c) {
  if ((Math.abs(b - c) < a && a < (b + c))
      && (Math.abs(a - c) < b && b < (a + c))
      && (Math.abs(a - b) < c && c < (a + b))) {
    return true;
  }
  return false;
}
// console.log(triangleCheck(5, 10, 9));

// Desafio 13
function hydrate(texto) {
  let quantidadeBebidas = 0;

  for (let index = 0; index < texto.length; index += 1) {
    if (isNaN(texto[index]) === false && texto[index] !== ' ') {
      quantidadeBebidas += parseInt(texto[index]);
    }
  } if (quantidadeBebidas === 1) {
    return `${quantidadeBebidas} copo de água`;
  }
  return `${quantidadeBebidas} copos de água`;
}

//  console.log(hydrate("1 cerveja"));
//  console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));
//  console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
