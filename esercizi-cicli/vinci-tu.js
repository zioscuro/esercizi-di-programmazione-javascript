/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/
var dicepull = prompt('Quanti tiri saranno effettuati?', 'indicare il numero dei tiri di dado');

console.log(`Verranno effettuati ${dicepull} tiri di dado`);
var diceplayer1
var diceplayer2
var sumplayer1 = 0;
var sumplayer2 = 0;

for (let i=0; i<dicepull; i++) {
  diceplayer1 = Math.floor((Math.random() * (6) + 1));
  diceplayer2 = Math.floor((Math.random() * (6) + 1));
  console.log(`Tiro ${i+1}!`)
  console.log('il giocatore 1 ha tirato: '+diceplayer1);
  console.log('il giocatore 2 ha tirato: '+diceplayer2);
  sumplayer1 += diceplayer1
  sumplayer2 += diceplayer2
}
console.log('Ecco il risultato!')
console.log('il punteggio totale del giocatore 1 è: ' + sumplayer1)
console.log('il punteggio totale del giocatore 2 è: ' + sumplayer2)

if (sumplayer1>sumplayer2) {
  console.log('il giocatore 1 vince!');
}
else if (sumplayer1<sumplayer2) {
  console.log('il giocatore 2 vince!');
}
else {
  console.log('pari e patta!');
}  