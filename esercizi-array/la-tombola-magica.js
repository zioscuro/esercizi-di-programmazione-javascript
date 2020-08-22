/*
  La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
var billboard = []
var sheet = [40,39,5,3,31,43,16,48,67,81]
var hit = 0

//genera un tabellone di numeri casuali
for (let i=0; i<10; i++) {
  billboard.push(Math.floor((Math.random() * (90-1)+1)));
}

//trova e rigenera eventuali numeri uguali nel tabellone
for (let i=0; i<10; i++) {
  for (let x=0; x<10; x++) {
    if (i != x && billboard[i] === billboard[x]) {
      billboard[x]=(Math.floor((Math.random() * (90-1)+1)))
    }
  }
}

/* OPZIONALE
//rigenera la scheda dell'utente sostituendo eventuali numeri uguali
sheet = []

for (let y=0; y<10; y++) {
  sheet.push(Math.floor((Math.random() * (90-1)+1)));
}

for (let i=0; i<10; i++) {
  for (let x=0; x<10; x++) {
    if (i != x && sheet[i] === sheet[x]) {
      sheet[x]=(Math.floor((Math.random() * (90-1)+1)))
    }
  }
}
*/

//riepiloga gli array generati
console.log('numeri estratti: [' + billboard + ']');
console.log('la tua scheda: [' + sheet + ']');

//confronta i numri estratti con quelli dell'utente 
for (let i=0; i<10; i++) {
  for (let x=0; x<10; x++) {
    if (billboard[i] === sheet[x]) {
      hit = hit + 1;
    }
  }
}

console.log('hits: '+hit);

//stampa il risultato 
switch (hit) {
  case 2: 
  console.log('Hai fatto ambo');
  break;
  case 3: 
  console.log('Hai fatto terna');
  break;
  case 4: 
  console.log('Hai fatto quaterna');
  break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9: 
  console.log('Hai fatto cinquina');
  break;
  case 10: 
  console.log('Hai fatto tombola');
  break;
  default:
    console.log('mi dispiace, hai perso!');
}