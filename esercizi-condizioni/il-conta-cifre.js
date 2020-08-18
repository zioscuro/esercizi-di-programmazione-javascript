/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/
var input = 55555
var inputString = input.toString()

if (inputString.length <2) {
  console.log(inputString.length +' cifra')
}
else if (inputString.length>1 && inputString.length<5) {
  console.log(inputString.length +' cifre')
}
else {
  console.log('numero maggiore di 9999!')
}
