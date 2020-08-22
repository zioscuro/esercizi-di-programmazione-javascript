/*
  La bellezza della casualità
  Scrivi una funzione che prenda in input un numero e restituisca un numero casuale compreso tra 0 e l'argomento passato.


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

//definisce la funzione
function randX(x) {
  return Math.floor(Math.random() * (x+1));
}

//definisce la variabile e stampa il risultato
var num = 24;
console.log(`Input: ${num}`);
console.log(`Output: ${randX(num)}`);