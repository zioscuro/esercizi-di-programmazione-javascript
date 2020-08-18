/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/

var Player1 = 5;
var Player2 = 10;

var CasualNumberFloat = (Math.random() * (100-1) + 1)
var CasualNumber = Math.floor(CasualNumberFloat)

console.log('il giocatore 1 ha scelto '+Player1)
console.log('il giocatore 2 ha scelto '+Player2)
console.log('il numero casuale è '+CasualNumber)

var Player1deviation = Math.abs(CasualNumber-Player1)
var Player2deviation = Math.abs(CasualNumber-Player2)

if (Player1 == CasualNumber) {
  console.log('il giocatore 1 ha indovinato!')
}
else if (Player2 == CasualNumber) {
  console.log('il giocatore 2 ha indovinato!')
}
else {
  if (Player1deviation<Player2deviation) {
    console.log('Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!')
  }    
  else if (Player2deviation<Player1deviation) {
    console.log('Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!')
  }
  else {
    console.log('Nessuno dei due ha azzeccato il numero casuale, ed entrambi hanno lo stesso scarto!')
  }
}
