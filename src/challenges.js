// Desafio 1
function compareTrue(x, y) {
  if (x === true && y === true) {
    return true;
  }
  return false;
}
// console.log(compareTrue(3,3));

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
}

// Desafio 3
function splitSentence(texto) {
  // let arrayDeStrings = texto.split(' '); ---> Uma opção de resolução
  // return arrayDeStrings;

  let arrayDeStrings = [];
  let palavra = '';

  for (let index = 0; index < texto.length; index += 1) {
    if (texto[index] !== ' ') {
      palavra += texto[index];
    }

    if (texto[index] === ' ' || index === texto.length - 1) {
      arrayDeStrings.push(palavra);
      palavra = '';
    }
  }
  return arrayDeStrings;
}
// console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(arrayNomes) {
  let concat = '';
  concat = (`${arrayNomes[arrayNomes.length - 1]}, ${arrayNomes[0]}`);
  return concat;
}
//  console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let quantidadePontos = 0;
  quantidadePontos = ((wins * 3) + (ties * 1));
  return quantidadePontos;
}
// console.log(footballPoints(14,8));

// Desafio 6
function highestCount(valores) {
  let maiorValor = valores[0];
  let quantidadesVezes = 0;
  for (let index = 1; index < valores.length; index += 1) {
    if (valores[index] > maiorValor) {
      maiorValor = valores[index];
    }
  }
  for (let index = 0; index < valores.length; index += 1) {
    if (valores[index] === maiorValor) {
      quantidadesVezes += 1;
    }
  }
  return quantidadesVezes;
}
// console.log(highestCount([9, 1, 2, 3, 4, 9, 7]));

//   function highestCount(valores) {   ---> Aqui testei outra forma de resolução.
//    let maiorValor = valores[0];
//    let quantidadesVezes = 1;
//   for (index = 1; index < valores.length; index +=1) {
//     if (valores[index] == maiorValor) {
//       quantidadesVezes ++ ;
//     }

//     if (valores[index] > maiorValor) {
//       maiorValor = valores[index];
//       quantidadesVezes = 1;
//     }
//   }
//   return quantidadesVezes;
// }
//   console.log(highestCount([9, 1, 2, 3, 4, 9, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1Mouse = 0;
  let distanciaCat2Mouse = 0;

  if (mouse > cat1) {
    distanciaCat1Mouse = mouse - cat1;
  } else if (cat1 > mouse) {
    distanciaCat1Mouse = cat1 - mouse;
  }

  if (mouse > cat2) {
    distanciaCat2Mouse = mouse - cat2;
  } else if (cat2 > mouse) {
    distanciaCat2Mouse = cat2 - mouse;
  }

  if (distanciaCat1Mouse > distanciaCat2Mouse) {
    return 'cat2';
  }
  if (distanciaCat2Mouse > distanciaCat1Mouse) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
}
// console.log(catAndMouse(10, 3, 8));
// console.log(catAndMouse(10, 4, 2));
// console.log(catAndMouse(8, 10, 6));

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let resultado = [];

  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (arrayNumeros[index] % 3 === 0 && arrayNumeros[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (arrayNumeros[index] % 3 === 0 && arrayNumeros[index] % 5 !== 0) {
      resultado.push('fizz');
    } else if (arrayNumeros[index] % 5 === 0 && arrayNumeros[index] % 3 !== 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(texto) {
  let textoCodificado = '';

  for (let index = 0; index < texto.length; index += 1) {
    if (texto[index] == 'a') {
      // textoCodificado = textoCodificado + '1';
      textoCodificado += '1';
    } else if (texto[index] == 'e') {
      textoCodificado += '2';
    } else if (texto[index] == 'i') {
      textoCodificado += '3';
    } else if (texto[index] == 'o') {
      textoCodificado += '4';
    } else if (texto[index] == 'u') {
      textoCodificado += '5';
    } else {
      textoCodificado += texto[index];
    }
  }
  return textoCodificado;
}
// console.log(encode("hi there!"));

function decode(texto) {
  let textoDecodificado = '';

  for (let index = 0; index < texto.length; index += 1) {
    if (texto[index] == '1') {
      textoDecodificado += 'a';
    } else if (texto[index] == '2') {
      textoDecodificado += 'e';
    } else if (texto[index] == '3') {
      textoDecodificado += 'i';
    } else if (texto[index] == '4') {
      textoDecodificado += 'o';
    } else if (texto[index] == '5') {
      textoDecodificado += 'u';
    } else {
      textoDecodificado += texto[index];
    }
  }
  return textoDecodificado;
}
// console.log(decode("h3 th2r2!"));

// Desafio 10
function techList(listaTechs, name) {
  let novaLista = [];
  listaTechs = listaTechs.sort();

  if (listaTechs.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < listaTechs.length; index += 1) {
    novaLista.push({
      tech: listaTechs[index],
      name,
    });
  }
  return novaLista;
}
// console.log(techList(["React", "Jest", "HTML"], "Lucas"));

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
