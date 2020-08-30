/*
  Azzecca e azzera
  Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
  Permetti all'utente di inserire un numero e azzera tutti i gli elementi nell'array principale che sono suoi multipli.
  Richiedi all'utente un altro numero e così via.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Per richiedere un numero all'utente puoi usare il comando prompt(), se vuoi saperne di più puoi controllare nella
  documentazione: https://developer.mozilla.org/it/docs/Web/API/Window/prompt

  http://www.imparareaprogrammare.it
*/

//definisce l'array e le variabili necessarie
var arr1 = Array(100);
var number = 0;
var i = 0;
var x = 0;
var y = 0;

//popola l'array con numeri casuali
for (i=0 ; i<100; i++) {
  arr1[i]=Math.floor((Math.random() * (50-1)+1));  
  }

console.log(`Input: [${arr1}]`);

//trova e azzera gli elementi multipli del numero scelto
while (arr1.reduce(function sum(accumulator, currentValue) {
  return accumulator + currentValue
})>0) {
   number = prompt('digita un numero');
   y++;
   
  for (x=0; x<100; x++) {
    if (arr1[x]%number == 0) {
      arr1[x] = 0;
    }    
  }
  console.log(`Iterazione ${y}: [${arr1}]`);
}