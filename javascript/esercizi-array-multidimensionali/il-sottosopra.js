/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta.

  Esempio:
    Input: 
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]

  http://www.imparareaprogrammare.it
*/

//definisce le variabili
var array1=[[1,2],[3,4],[5,6]];
var array1T=[];

var input = 'Input: \n\t';
var output = 'Output: \n\t';

//aggiunge l'array all'input
input += '[ \n';
for (let x=0; x<array1.length; x++) {
  input +='\t\t['+array1[x]+']\n'
}
input += '\t]';

//traspone l'array e aggiunge il risultato all'output
output += '[ \n'
for (let x=0; x<array1[0].length; x++) {
  array1T[x]=[];
    for (let y=0; y<array1.length; y++) {
      array1T[x][y]=array1[y][x];
    }
  output +='\t\t['+array1T[x]+']\n';
}
output += '\t]';

//stampa il risultato
console.log(input);
console.log(output);
