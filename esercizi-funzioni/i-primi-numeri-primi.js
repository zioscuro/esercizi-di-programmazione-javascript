/*
  I primi numeri…primi!
  Scrivi una funzione che prenda in input un numero e restituisca TRUE se è un numero primo, FALSE altrimenti.
  Scrivi una seconda funzione, che prenda in input un numero N e stampi i primi N numeri primi.

  Esempio:
    Input: n = 5
    Output:
          TRUE

            2
            3
            5
            7
            11


  Consigli:
  Per non ripetere il codice, nella seconda funzione puoi richiamare la prima funzione ;)

  http://www.imparareaprogrammare.it
*/

//funzione che stabilisce se x è un numero primo e restutuisce un valore boleano
function prime(x) {
  var count=0;
  for (let i=1; i<x; i++) {
    if (x%i==0) {
      count++;
    }
  }
  if (count==1) {
    return true;
  }
  else {
    return false;
  }
}

//funzione che restituice y numeri primi 
function Nprime(y) {
  var primes=[];
  for (let i=0; i<y; i++) {
    var z = 0;
    while (primes.length<y) {
      z++;
      if (prime(z)===true) {
        primes.push('\t\t'+z);
      }
    }
  }    
  return primes.join('\n');
}

//definisce la variabile n e stampa il risultato delle due funzioni
var n = 5;
console.log(`Input: n = ${n}`);
console.log(`Output: \n\t ${((prime(n)).toString()).toUpperCase()} \n\n ${Nprime(n)}`);
