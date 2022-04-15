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
  
  for (let index = 0; index < texto.length; index++) {     
    if (texto[index] !== ' ') {
    palavra += texto[index];
    }

    if (texto[index] == ' ' || index == texto.length -1) {
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
  concat = (arrayNomes[arrayNomes.length - 1] + ', ' + arrayNomes[0]);
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
  for (index = 1; index < valores.length; index +=1) {
    if (valores[index] > maiorValor) {
      maiorValor = valores[index];
    }
  }
  for (index = 0; index < valores.length; index+=1) {
    if (valores[index] == maiorValor) {
      quantidadesVezes ++ ;
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
  }
  else if (cat1 > mouse) {
    distanciaCat1Mouse = cat1 - mouse;
  }

  if (mouse > cat2) {
    distanciaCat2Mouse = mouse - cat2;
  }
  else if (cat2 > mouse) {
    distanciaCat2Mouse = cat2 - mouse;
  }

  if (distanciaCat1Mouse > distanciaCat2Mouse) {
    return 'cat2';
  } 
  else if (distanciaCat2Mouse > distanciaCat1Mouse) {
    return 'cat1';
  }
  else {
    return 'os gatos trombam e o rato foge';
  }
}
// console.log(catAndMouse(10, 3, 8));
// console.log(catAndMouse(10, 4, 2));
// console.log(catAndMouse(8, 10, 6));   

// Desafio 8
function fizzBuzz() {
  

  
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
