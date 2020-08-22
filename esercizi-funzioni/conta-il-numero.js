/*
  Conta il numero
  Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

    
  http://www.imparareaprogrammare.it
*/

//definisce la funzione
function counter(x) {
  if (x>0 && x<=9) { 
    return `${(x.toString()).length} cifra`
  }
  else if (x>9 && x<=9999) {
    return `${(x.toString()).length} cifre`
  }
  else {
    return 'numero non supportato!'
  }
}

//prende un numero in input e stampa il risultato
var num = prompt('digita un numero tra 1 e 9999')
console.log(`Input: numero = ${num}`)
console.log (`Output: ${counter(num)}`)