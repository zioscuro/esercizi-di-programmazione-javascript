/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)

  http://www.imparareaprogrammare.it
*/
var Num = 5;

var array1 = new Array(Num);

for (let i=0; i<Num; i++) {
  array1[i]=Math.floor((Math.random() * (100)));
}

console.log('array generato:');
console.log(array1);

var array2 = array1.reverse();
console.log('array invertito:');
console.log(array2);