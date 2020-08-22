/*
  Pa-pa-pa lindomo
  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.

  Esempio:
    Input: i topi non avevano nipoti
    Output: TRUE


  Consigli:
  Puoi eliminare spazi e segni di punteggiatura usando le espressioni regolari o il metodo del tipo stringa chiamato replace,
  in questo modo: str.replace(/\W/g, "").

  http://www.imparareaprogrammare.it
*/

//definisce la funzione
function palindrome(x) {
  //converte la stringa in lowercase e toglie gli spazi
  var nospace = (x.replace(/\W/g, "")).toLowerCase()
  //confronta i caratteri simmetrici della stringa, se uguali aggiunge 1 al contatore
  var count = 0
  for (let i=0; i<nospace.length; i++) {
    if (nospace.slice(i,i+1)===nospace.slice(nospace.length-i-1,nospace.length-i,)) {
      count++
    }
  }
  //se il contotare è uguale alla lunghezza della stringa in input restituisce true
  if (nospace.length === count) {
    return true
  }
  else {
    return false
  }
}

//definisce la stringa di input e stampa il risultato
var phrase = 'Avida di vita desiai ogni amore vero ma ingoiai sedativi da diva'
console.log(`input: ${phrase}`)
console.log(`Output: ${palindrome(phrase)}`)