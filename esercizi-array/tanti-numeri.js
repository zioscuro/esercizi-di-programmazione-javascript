/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/
var Num = 5;
var a = new Array(Num);

for (let i=0; i<Num; i++) {
  a[i]=Math.floor((Math.random() * (100)));
}

var media = 0;
var sum = 0;
var minors = [];
var minmed = 0;
var maxmed = 0;

console.log('input: a = [' + a + ']')

for (let i=0; i<a.length; i++) {
  sum += a[i];
}
media = sum/a.length;

for (let i=0; i<a.length; i++) {
  if (a[i]<media) {
    minors.push(a[i]);
    minmed++
  }
  else if (a[i]>media) {
    maxmed++
  }
}

console.log('output: media = ' + media + ', valori minori = [' + minors + ']');
console.log('ci sono ' + minmed + ' valori minori della media e ' + maxmed + ' valori maggiori della media');