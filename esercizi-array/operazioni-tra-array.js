/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".


  http://www.imparareaprogrammare.it
*/

var a = [];
var b = [];
var c = [];

for (let i=0; i<10; i++) {
  a.push(Math.floor((Math.random() * (10-1)+1)));
  b.push(Math.floor((Math.random() * (10-1)+1)));
}

var operator = parseInt(prompt('indicare il tipo di operazione da effettuare \n 1. Addizzione \n 2. Sottrazione \n 3. Moltiplicazione \n 4. Divisione '));

if (operator == 1 || operator == 2 || operator == 3 || operator == 4) {
  for (let x=0; x<10; x++) {
    switch (operator) {
      case 1:
        c.push(a[x]+b[x]);
        break;
      case 2:
        c.push(a[x]-b[x]);
        break;
      case 3:
        c.push(a[x]*b[x]);
        break;
      case 4:
        c.push(a[x]/b[x]);
        break;
    }
  }
  
  console.log('input: a = [' + a + ']');
  console.log('input: b = [' + b + ']');
  console.log('output: c = [' + c + ']');
}
else {
  console.log('operazione non supportata!')
}
