/*
  Metti un po' d'ordine
  Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

  Variante:
  Prova ad ordinali in modo crescente.

  Consigli:
  Ti consiglio di non usare il metodo sort per questo esercizio ma di provare a scrivere tu il codice per ordinare gli array,
  usando if e cicli ;)

  http://www.imparareaprogrammare.it
*/

//definisce l'array e le variabili necessarie
var arr1 = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
var temp1 = 0
var temp2 = 0

console.log(`input: [${arr1}]`)

//ordina l'array in modo decrescente
for (let x=0 ; x<arr1.length ; x++ ) {
  for (let y=0 ; y<arr1.length ; y++) {
    if (arr1[x]>arr1[y]) {
      temp1 = arr1[x];
      temp2 = arr1[y];
      arr1[x] = temp2;
      arr1[y] = temp1;
    }
  }
}

console.log(`output(decrescente): [${arr1}]`)

//ordina l'array in modo crescente
for (let x=0 ; x<arr1.length ; x++ ) {
  for (let y=0 ; y<arr1.length ; y++) {
    if (arr1[x]<arr1[y]) {
      temp1 = arr1[x];
      temp2 = arr1[y];
      arr1[x] = temp2;
      arr1[y] = temp1;
    }
  }
}

console.log(`output(crescente): [${arr1}]`)