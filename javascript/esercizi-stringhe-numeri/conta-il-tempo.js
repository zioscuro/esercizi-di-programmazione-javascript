/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

//definisce la variabile in input
var time = 12560;

//calcola all'interno di tre variabili ore, minuti e secondi
var hours = Math.floor(time/3600);
var minutes = Math.floor(time/60)-(hours*60);
var seconds = time-(hours*3600)-(minutes*60);

//stampa il risultato
console.log(`Input: ${time}`);
console.log(`Output: ${hours} ore, ${minutes} minuti e ${seconds} secondi.`);