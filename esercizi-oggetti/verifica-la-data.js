/*
  Verifica la data
  Scrivi un programma che definisca un oggetto per la rappresentazione di una data e verifichi se è valida o meno.
  L'oggetto sarà composto da giorno, mese e anno (input a piacere).

  Esempio:
    Input:
      day: 18
      month: 19
      year: 2016
    Output:
      "La data non è valida!"

  http://www.imparareaprogrammare.it
*/

//definisce una funzione per il calcolo della validità della data
function dateValidation(dd,mm,yy) {
  //controlla l'anno (maggiore di 0)
  if ( yy < 0) {
    return 'La data non è valida!';
  }
  //controlla il mese 
  else if ( mm < 1 || mm > 12 ) {
    return 'La data non è valida!';
  }
  //controlla i giorni
  else if ( mm === 2 ) {
    if (dd < 1 || dd > 29) {
      return 'La data non è valida!';
    }    
  }
  else if ( mm === 11 || mm === 4 || mm === 6 || mm === 9 ) {
    if ( dd < 1 || dd > 30 ) {
      return 'La data non è valida!';
    }
  }
  else {
    if ( dd < 1 || dd > 31 ) {
      return 'La data non è valida!';
    }
  }
  //se è tutto valido restitiusce una stringa di successo
  return  'La data è valida!'
}

//definisce proprietà e metodi dell'oggetto di input
var date1 = {
  day: 18,
  month: 19,
  year: 2016,
  validation: function() {
    return dateValidation(this.day,this.month,this.year)
  }
};

//stampa il risultato
console.log(`Input:\n\tday: ${date1.day}\n\tmonth: ${date1.month}\n\tyear: ${date1.year}`);
console.log(`Output:\n\t${date1.validation()}`);