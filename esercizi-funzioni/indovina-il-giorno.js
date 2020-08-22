/*
  Indovina il giorno
  Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifica se sia compreso nel range da 1 a 7.
  Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.

  La seconda funzione:
  - nel caso la prima restituisca TRUE visualizza il giorno della settimana corrispondente,
    considerando la seguente corrispondenza:
        1 = Lunedì
        ...
        7 = Domenica
  - nel caso il giorno non sia compreso nel range, la funzione dovrà restituire un messaggio d'errore simile a questo: 'Peccato, non posso indovinare il giorno.'


  http://www.imparareaprogrammare.it
*/

//funzione che verifica se il numero scelto sia compreso nella settimana
function week(x) {
  if (x>=1 && x<=7) {
    return temp = true;
  }
  return false;
}

//funzione che restituisce il giorno della settimana 
function day(x){
  if (week(x) === true) {
    switch (x) {
      case 1:
        return '1 = Lunedì';        
      case 2:
        return '2 = Martedì';
      case 3:
        return '3 = Mercoledì';
      case 4:
        return '4 = Giovedì';
      case 5:
        return '5 = Venerdì';
      case 6:
        return '6 = Sabato';
      case 7:
        return '7 = Domenica';         
    }
  }
  else {
    return 'Peccato, non posso indovinare il giorno';
  }
}

// definisce la variabile e stampa il risultato
var num = parseInt(prompt('digita il numero del giorno da 1 a 7'));
console.log(day(num));