/*
  Tick, tack, timer!
  Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.

  Esempio:
    Input: n = 5
    Output:
            4
            3
            2
            1
            0

            
  http://www.imparareaprogrammare.it
*/
//funziona che restituisce il countdown in una stringa
function timer(x) {
  var countdown = '';
  for (let i=1; i<=x; i++) {
    countdown += '\n\t\t'+(x-i);
  }
  return countdown;
}

//definisce la variabile in input
var n = 10;

//stampa il risultato
console.log(`Input: n = ${n}`);
console.log(`Output: ${timer(n)}`);