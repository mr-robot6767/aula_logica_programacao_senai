// ============================================================
//   ATIVIDADE 13 – Estruturas de Dados: Matriz
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo uma matriz
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [10, 20, 30],
//      [40, 50, 60],
//      [70, 80, 90],
//    ];
// b) Exiba: número de linhas e número de colunas.
// c) Exiba o elemento central (m[1][1]).
// d) Exiba o canto inferior direito (use .length).

// → Seu código aqui:
const m1 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
  ];
  
  console.log("linhas: " + m1.length + ", colunas: " + m1[0].length);
  console.log("elemento central: " + m1[1][1]);
  console.log("canto inferior direito: " + m1[m1.length - 1][m1[0].length - 1]);
  
  console.log("_______________________________");
  
  
  // ------------------------------------------------------------
// EXERCÍCIO 2 – Percorrendo com for aninhado
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [1, 2, 3, 4],
//      [5, 6, 7, 8],
//      [9, 10, 11, 12],
//    ];
// b) Usando dois for aninhados, exiba cada elemento no formato:
//    "m[i][j] = <valor>"
// c) Calcule e exiba a SOMA de todos os elementos da matriz.

// → Seu código aqui:
  const m2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ];
    
  let soma2 = 0;
    
  for (let i = 0; i < m2.length; i++) {
      for (let j = 0; j < m2[i].length; j++) {
          console.log(`m[${i}][${j}] = ${m2[i][j]}`);
          soma2 += m2[i][j];
      }
  }
  console.log("total:", soma2);
  console.log("_______________________________");
  
  
  // ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor valor
// ------------------------------------------------------------
// a) Utilizando a matriz:
const m3 = [
    [12,  7, 25],
    [ 3, 18,  9],
    [31, 14, 22],
  ];
// b) Usando for aninhado, encontre o MAIOR e o MENOR valor da matriz.
// c) Exiba também a posição (linha, coluna) onde cada um está.

// → Seu código aqui:

  let linMaior = 0, colMaior = 0;
  let linMenor = 0, colMenor = 0;
  
  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          if (m3[i][j] > m3[linMaior][colMaior]) {
              linMaior = i;
              colMaior = j;
          }
          if (m3[i][j] < m3[linMenor][colMenor]) {
              linMenor = i;
              colMenor = j;
          }
      }
  }
  
  console.log(`Maior ${m3[linMaior][colMaior]} na posição ${linMaior} ${colMaior}`);
  console.log(`Menor ${m3[linMenor][colMenor]} na posição ${linMenor} ${colMenor}`);
  console.log("_______________________________");
  
  
  // ------------------------------------------------------------
// EXERCÍCIO 4 – Soma das linhas e das colunas
// ------------------------------------------------------------
// a) Use a mesma matriz do Exercício 3.
// b) Exiba a soma de cada LINHA: "Linha <i>: <soma>"
// c) Exiba a soma de cada COLUNA: "Coluna <j>: <soma>"
// d) Exiba a soma da DIAGONAL principal (m[i][i]).

// → Seu código aqui:
  const numLinhas = m3.length;
  const numColunas = numLinhas > 0 ? m3[0].length : 0;
    
  let somaDiagonal = 0;
    
  for (let i = 0; i < numLinhas; i++) {
      let somaLinha = 0;
      for (let j = 0; j < m3[i].length; j++) {
          somaLinha += m3[i][j];
      }
      console.log(`Linha ${i}: ${somaLinha}`);
      
      if (m3[i][i] !== undefined) {
          somaDiagonal += m3[i][i];
      }
  }
    
  for (let j = 0; j < numColunas; j++) {
      let somaColuna = 0;
      for (let i = 0; i < numLinhas; i++) {
          somaColuna += m3[i][j]; 
      }
      console.log(`Coluna ${j}: ${somaColuna}`);
  }
    
  console.log(`Diagonal Principal: ${somaDiagonal}`);
  console.log("_______________________________");
  
  
  // ------------------------------------------------------------
// EXERCÍCIO 5 – Preenchendo uma matriz dinamicamente
// ------------------------------------------------------------
// a) Pergunte ao usuário quantas linhas e quantas colunas terá a matriz.
// b) Usando dois for aninhados, peça cada valor:
//    "Digite m[<i>][<j>]: "
// c) Exiba a matriz final com console.table().

// → Seu código aqui:
  let Keyboard = require('readline-sync');
  
  let linhas = Number(Keyboard.question("quantas linhas tera a matriz: "));
  let colunas = Number(Keyboard.question("quantas colunas tera a matriz: "));
  
  let matrizDinamica = [];
  
  for (let i = 0; i < linhas; i++) {
      const novaLinha = [];               
      for (let j = 0; j < colunas; j++) {
          let valor = Number(Keyboard.question(`Digite m[${i}][${j}]: `));
          novaLinha.push(valor);
      }
      matrizDinamica.push(novaLinha);
  }
    
  console.table(matrizDinamica);
  console.log("_______________________________");
  