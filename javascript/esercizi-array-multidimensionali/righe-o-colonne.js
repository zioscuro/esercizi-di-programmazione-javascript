/*
  Righe o colonne?
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali compresi tra 1 e 100.
    - Dichiari due array, l'array R di N elementi e l'array C di M elementi.
    - Salvi, nell'array R le somme di ogni riga della matrice e nell'array C le somme di tutte le colonne.
    - Stampi la matrice e i due array.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]

        array R = [152, 61]
        array C = [2, 70, 140]

  http://www.imparareaprogrammare.it
*/

//definisce le variabili e le dimensioni dell'array di input
var N = prompt('digitare il numero di elementi nel livello 1 della matrice', 'inserire un numero intero');
var M = prompt('digitare il numero di elementi nel livello 2 della matrice', 'inserire un numero intero');
var array1 = [];

var input = `Input: N = ${N}, M = ${M}`;
var output = 'Output: \n\t';

//genera i numeri casuali nell'array e li aggiunge all'output
output += 'matrice = \n\t\t[\n'
for (let x=0; x<N; x++) {
  array1[x]=[];  
    for (let y=0; y<M; y++) {
    array1[x][y]=Math.floor(Math.random() * (100-1) + 1);
  }
  output+=(`\t\t\t[${array1[x]}]\n`);
}
output+='\t\t]\n\n';

//definisce gli array per righe e colonne
var R = [];
var C = [];

var reducer = (accumulator, currentValue) => accumulator + currentValue;

//calcola la somma le righe nell'array R
for (let x=0; x<N; x++) {
  R[x]=[];
  R[x] = array1[x].reduce(reducer);
}

//traspone l'array di base e calcola la somma le colonne nell'array C
var array1T = []
for (let x=0; x<M; x++) {
  array1T[x]=[];
    for (let y=0; y<N; y++) {
      array1T[x][y]=array1[y][x];
    }
  C[x]=array1T[x].reduce(reducer);
}

//aggiunge R e C all'output
output+=`\t\tarray R = [${R}]\n\t\tarray C = [${C}]`;

//stampa il risultato
console.log(input);
console.log(output);