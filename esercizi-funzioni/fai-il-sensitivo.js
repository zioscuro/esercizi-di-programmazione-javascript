/*
  Fai il sensitivo
  Scrivi una funzione che calcoli la vicinanza tra tre numeri: A, B e N, e restituisca:
    - 0 Se A e B sono equidistanti da N
    - 1 Se B è più vicino a N rispetto ad A
    - -1 Se A è più vicino a N rispetto a B

  Variante:
  Utilizza questa funzione per creare un programma che simuli un gioco tra due utenti:
  vince chi indovina per primo il numero N che verrà generato casualmente tra 1 e 100.

  Consigli per la variante:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Se non ricordi come richiedere all'utente un valore in input, rivedi l'esercizio sugli array "Azzecca e azzera"

  http://www.imparareaprogrammare.it
*/

//definisce la funzione confrontando la differenza in valore assoluto di a e b con n
function riddle(a,b,n) {
  if (Math.abs(n-a)===Math.abs(n-b)) {
    return 0;
  }
  else if (Math.abs(n-b)<Math.abs(n-a)) {
    return 1;
  }
  else {
    return -1;
  }
}

console.log(riddle(2,6,4));

//variante gioco tra 2 utenti
//definisce le variabili
var A = 0;
var B = 0;
var N = Math.floor(Math.random() * (100-1)+1);

while (A!=N && B!=N) {
  //definisce gli input
  A = parseInt(prompt(`'giocatore1`,'inserisci un numero'));
  B = parseInt(prompt(`'giocatore2`,'inserisci un numero'));
  //confronta A e B con N, se nessuno dei due ha vinto usa la funzione per definire chi si è avvicinato di più
  if (N===A) {
    alert('Il gicatore 1 vince!');
  }
  else if (N===B) {
    alert('Il gicatore 2 vince!');
  }
  else {
    switch (riddle(A,B,N)) {
      case 0:
        alert('Nessuno dei due giocatori ha indovinato, ed entrambi hanno lo stesso scarto!');
        break;
      case 1:
        alert('Nessuno dei due giocatori ha indovinato, ma il giocatore 2 si è avvicianto di più!');
        break;
      case -1:
        alert('Nessuno dei due giocatori ha indovinato, ma il giocatore 1 si è avvicianto di più!');
        break;
    }
  }
} 