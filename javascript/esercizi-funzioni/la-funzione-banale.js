/*
  La funzione banale
  Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
  FALSE altrimenti.

  Esempi:
    Input: n = 2, m = 3
    Output: FALSE

    Input: n = 2, m = '2'
    Output: FALSE

    Input: n = 2, m = 2
    Output: TRUE

    
  http://www.imparareaprogrammare.it
*/

//definisce le due variabili
var n = 3;
var m = 3;

//definisce la funzione di identità
function identity(x,y) {
  if (x===y){
    return 'TRUE';
  }
  else {
    return 'FALSE';
  }
}

//definisce le stringhe di input e output
var input = `Input: n = ${n}, m = ${m}`;
var output = 'Output: '+identity(n,m);

//stampa il risultato
console.log(input);
console.log(output);