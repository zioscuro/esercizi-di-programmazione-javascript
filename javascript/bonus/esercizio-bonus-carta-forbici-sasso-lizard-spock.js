/*
  Carta, forbici, sasso, lizard e Spock
  Scrivi un programma che simuli una partita al gico Carta, forbici, sasso, lizard e Spock, se non lo conosci ecco una spiegazione del gioco:
  
    "Le Forbici tagliano la Carta, la Carta avvolge il Sasso, il Sasso uccide Lizard, Lizard avvelena Spock,
    Spock rompe le Forbici, Le Forbici decapitano Lizard, Lizard mangia la Carta, la Carta invalida Spock,
    Spock vaporizza il Sasso e come è sempre stato il Sasso batte le forbici."

  Impletamenta il tuo codeice all'interno della funzione game.

  Il programma deve stampare nella console un messaggio contenente l'esito della partita, uno verrà stampato in caso di pareggio e l'altro
  nel caso di vittoria di un giocatore.
  http://www.imparareaprogrammare.it
*/

var choices = ['carta','forbici','sasso','lizard','spock'];
var player1 = choices[0];
var player2 = choices[getRandomIntInclusive(0,4)];

function game(p1, p2) {
  if (p1===p2) {
    return `Pareggio, entrambi i giocatori hanno scelto ${p1}`;
  }
  else {
    switch (p1) {
      case 'carta':
        if (p2==='sasso'|| p2==='spock') {
          return `Il giocatore 1 ha vinto, ${p1} batte ${p2}!`;
        }
        else {
          return `Il giocatore 2 ha vinto, ${p2} batte ${p1}!`;
        }
        case 'forbici':
          if (p2==='carta'|| p2==='lizard') {
            return `Il giocatore 1 ha vinto, ${p1} batte ${p2}!`;
          }
          else {
            return `Il giocatore 2 ha vinto, ${p2} batte ${p1}!`;
          }
        case 'sasso':
          if (p2==='forbici'|| p2==='lizard') {
            return `Il giocatore 1 ha vinto, ${p1} batte ${p2}!`;
          }
          else {
            return `Il giocatore 2 ha vinto, ${p2} batte ${p1}!`;
          }
        case 'lizard':
          if (p2==='spock'|| p2==='carta') {
            return `Il giocatore 1 ha vinto, ${p1} batte ${p2}!`;
          }
          else {
            return `Il giocatore 2 ha vinto, ${p2} batte ${p1}!`;
          }
        case 'spock':
          if (p2==='forbici'|| p2==='sasso') {
            return `Il giocatore 1 ha vinto, ${p1} batte ${p2}!`;
          }
          else {
            return `Il giocatore 2 ha vinto, ${p2} batte ${p1}!`;
          } 
    }
  }
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(game(player1,player2));