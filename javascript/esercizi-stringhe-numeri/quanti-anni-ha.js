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

//definisce le variabili per l'anno corrente e quello di nascita
var CurrentYear = 2018;
var BirthYear = 1991;

//calcola età e anni mancanti e stampa il risultato
console.log(`Input: anno corrente = ${CurrentYear}, anno di nascita = ${BirthYear}`);
console.log(`Output: età = ${CurrentYear-BirthYear}, anni mancanti = ${100-(CurrentYear-BirthYear)}`);