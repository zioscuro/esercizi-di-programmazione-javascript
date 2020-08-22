/*
  Sommali tutti
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Stampi la matrice e la somma di tutti i valori contenuti.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]
        somma = 212

  http://www.imparareaprogrammare.it
*/

//definisce le variabili e le dimensioni dell'array di input
var N = prompt('digitare il numero di elementi nel livello 1 della matrice', 'inserire un numero intero');
var M = prompt('digitare il numero di elementi nel livello 2 della matrice', 'inserire un numero intero');
var array1 = [];

var input = `Input: N = ${N}, M = ${M}`
var output = 'Output: \n\t';

//genera i numeri casuali nell'array e li aggiunge all'output
output += 'matrice = \n\t\t[\n';
for (let x=0; x<N; x++) {
  array1[x]=[]; 
    for (let y=0; y<M; y++) {
    array1[x][y]=Math.floor(Math.random() * (100-1) + 1);
  }
  output+=(`\t\t\t[${array1[x]}]\n`);
}
output+='\t\t]\n';

//calcola la somma di tutti gli elementi della matrice e li aggiunge all'output
var reducer = (accumulator, currentValue) => accumulator + currentValue;
var sum = array1.flat().reduce(reducer);
output+=`\t\tsomma: ${sum}`;

//stampa il risultato
console.log(input);
console.log(output);