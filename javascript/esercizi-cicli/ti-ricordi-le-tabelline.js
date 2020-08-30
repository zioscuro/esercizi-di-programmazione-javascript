/*
  Ti ricordi le tabelline?
  Scrivi un programma che dato un numero stampi la tabellina corrispondente.

  Esempio:
    Input: 5
    Output: 0 5 10 15 20 25 30 35 40 45 50

  http://www.imparareaprogrammare.it
*/
var input = 5
var limit = 10
var total = 0

console.log('stampa la tabellina del '+input)

for (let i = 0; i <= limit; i++) {
    console.log(input*i)
}