/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/
console.log('MENU')
console.log('1. Tiramisù')
console.log('2. Torta della nonna')
console.log('3. Cheesecake alla nutella')
console.log('4. Macedonia')

var choice=4
console.log('scelta ='+choice)

switch (choice) {
  case 1:
    console.log('hai scelto il tiramisù')
    break
  case 2:
    console.log('hai scelto la torta della nonna')
    break
  case 3:
    console.log('hai scelto il cheesecake alla nutella')
    break
  case 4:
    console.log('hai scelto la macedonia')
    break
  default:
    console.log('dolce non disponibile')
}
