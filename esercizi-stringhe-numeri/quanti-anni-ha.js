/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var CurrentYear = 2018
var BirthYear =1991

var CurrentAge = CurrentYear-BirthYear
var YearsTo100 = 100-CurrentAge

console.log('età: '+ CurrentAge)
console.log('anni mancanti: '+ YearsTo100)