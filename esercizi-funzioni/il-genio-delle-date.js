/*
  Il genio delle date
  Scrivi una funzione che prenda in input due argomenti: il giorno e il mese.
  La funzione deve restituire a quale giorno dell'anno corrisponde (compreso tra 1 e 366).

  Esempio:
    Input : giorno = 5, mese = 2
    Output:
            36

  Consigli:
  Puoi definire un array con i giorni di ogni mese e ciclarlo.

          
  http://www.imparareaprogrammare.it
*/

//definisce la funzione che conta i giorni
function date(day,month) {
  var counter = 0;
  var monthdays = [31,29,31,30,31,30,31,31,30,31,30,31];
  for (let i=0; i<month; i++) {    
    if (i<month-1) {
      counter += monthdays[i];
    }
    else {
      counter += day;
    }
  }
  return counter
}

//definisce le variabili e stampa il risultato
var giorno = 5;
var mese = 2;
console.log(`Input: giorno = ${giorno}, mese = ${mese}`);
console.log(`Output: ${date(giorno,mese)}`);