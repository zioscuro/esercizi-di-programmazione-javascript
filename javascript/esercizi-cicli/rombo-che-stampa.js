/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
  http://www.imparareaprogrammare.it
*/
var input = 5;
var rombo = '';
var i = 0

console.log('input: '+input);

if ((input%2)==1) {
  for (i = 1; i <= input; i++) {
    if (i == 1) {
      rombo +='\t'.repeat(2) + ' '.repeat(Math.floor(input/2)) +'x' + '\n';
    }
    else if (i == input) {
      rombo +='\t'.repeat(2) + ' '.repeat(Math.floor(input/2)) + 'x';
    }
    else if (i > 1 && i < input/2) {
      rombo +='\t'.repeat(2) + ' '.repeat(Math.abs(Math.floor(input/2)-i+1)) + 'x' + 'xx'.repeat(i-1) + '\n';
    }
    else if (i > (input/2)+1 && i < input) {
      rombo +='\t'.repeat(2) + ' '.repeat(Math.abs(Math.floor(input/2)-i+1)) + 'x' + 'xx'.repeat(input-i) + '\n';
    }
    else {
      rombo +='\t'.repeat(2) + 'x'.repeat(input) + '\n';
    }
    }
}
else {
  console.log('il numero non è dispari!');
}

console.log('output: '+ '\n' +rombo)