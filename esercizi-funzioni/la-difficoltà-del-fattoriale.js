/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.

  Esempio:
    Input: n = 5
    Output: 120

  Consigli:
  Il fattoriale è il prodotto dei numeri interi da 1 a n.
  Esempio: n = 5, fattoriale = 5*4*3*2*1 = 120

  http://www.imparareaprogrammare.it
*/

//definisce la funzione del calcolo fattoriale
function fact(x){
  var num = 1;
  for (let i=1; i<=x; i++) {
    num = num*i;
  }
  return num;
}

//definisce la variabile in input
var n = 5;

//stampa il risultato
console.log(`Input: n = ${n}`);
console.log(`Output: ${fact(n)}`);