/*
  Un bel garage
  Scrivi un programma per la gestione di un garage.
  Definisci un oggetto che rappresenti un automobile, dovrà contenere almeno marca del veicolo e nome del modello.
  Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

  Consigli:
  Puoi usare un array come base per salvare le automobili.

  http://www.imparareaprogrammare.it
*/

//definisce un oggetto per ogni macchina
var car1 = {
  manufacturer: 'ford',
  model: 'focus'
};

var car2 = {
  manufacturer: 'ford',
  model: 'mustang'
};

var car3 = {
  manufacturer: 'fiat',
  model: 'punto'
};

var car4 = {
  manufacturer: 'fiat',
  model: 'panda'
};

//array contenente tutte le macchine
var garage = [car1,car2,car3,car4];

//funzione che restituisce in output una stringa con tutti i modelli della marca selezionata
function manufacturer(x) {
  var models = [];
  for (let i=0; i<garage.length; i++) {
    if (garage[i].manufacturer===x) {
      models.push(garage[i].model);
    }
  }
  return models.join(', ');
}

//definisce l'input e stampa il risultato
var brand = 'ford';
console.log(`Input: ${brand}`);
console.log(`Output: ${manufacturer(brand)}`);