/*
  Procedi alla cieca
  Scrivi un programma che stampi il contenuto di una matrice i cui valori interi sono generati casualmente nel range di 0 e 100.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

//definisce l'array
var arr1 = Array(Math.floor(Math.random() * (100-1)+1));

console.log(`array di ${arr1.length} elementi`);

//popola l'array con numeri casuali
for (let i=0; i<arr1.length ; i++) {
  arr1[i]=Math.floor(Math.random() * (100-1)+1);
}

//stampa il risultato
console.log(`output: [${arr1}]`);