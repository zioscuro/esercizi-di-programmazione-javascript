/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

  http://www.imparareaprogrammare.it
*/

//funzioni che trovano maggiore e minore
function max(x,y,z) {
  if (x>y && x>z) {
    return x;
  }
  else if (y>x && y>z) {
    return y;
  }
  else if (z>x && z>y) {
    return z;
  }
  else {
    return 'tutti i numeri sono uguali!';
  }
}
function min(x,y,z) {
  if (x<y && x<z) {
    return x;
  }
  else if (y<x && y<z) {
    return y;
  }
  else if (z<x && z<y) {
    return z;
  }
  else {
    return 'tutti i numeri sono uguali!';
  }
}

//funzione che genera numeri interi casuali nell' intervallo tra 100 e -100
function casualNumber() {
  var num = Math.floor(Math.random() * (100 - 1) + 1);
  if (Math.floor(Math.random() * 2)<1) {
    num = num * -1;
  }
  return num;
}

//definisce le variabili
var a = casualNumber();
var b = casualNumber();
var c = casualNumber();

//stampa il risultato
console.log(`Input: a = ${a}, b = ${b}, c = ${c}`);
console.log(`Output: minore = ${min(a,b,c)}, maggiore = ${max(a,b,c)}`);