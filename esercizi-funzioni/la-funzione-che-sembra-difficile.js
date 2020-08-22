/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.

  Esempio:
    Input : N = 123456, K = 3
    Output: 4

    
  http://www.imparareaprogrammare.it
*/

//definisce la funzione
function slicer(x,y) {
  var num=x.toString()
  if (y>num.length) {
    return 0
  }   
  return num.slice((num.length-y),(num.length-y+1)) 
}

//prende due numeri in input e stampa il risultato
var N = 123456
var K = 3
console.log(`Input: N = ${N}, K = ${K}`)
console.log(`Output: ${slicer(N,K)}`)