/*
  La mia rubrica
  Scrivi un programma per la gestione di una rubrica telefonica.

  Definisci un oggetto che rappresenti un contatto e, visto che stai diventando bravo/a, le proprietà dell'oggetto sono a tua discrizione.
  L'unico vincolo che hai è di inserire almeno il nome e il numero di telefono come stringhe.

  Definisci un altro oggetto che rappresenti la lista dei contatti, quindi sarà formato da un array di contatti.
  Implementa i metodi dell'oggetto per le seguenti operazioni:
      - Visualizzazione dell'intera lista contatti
      - Inserimento di un nuovo contatto
      - Modifica di uno contatto passando in input l'indice dell'array
      - Cancellazione di un contatto passando in input l'indice dell'array
      - Ricerca passando il nome e restituendo il singolo contatto.

  Variante:
  Migliora i metodi di Modifica e Cancellazione, al posto di prendere in input l'indice dell'array passa in input il nome
  e ricava l'indice sul quale applicare l'operazione.

  http://www.imparareaprogrammare.it
*/

//funzione che definisce un nuovo contatto e le sue proprietà
function contact(newname,newphone) {
  this.name = `${newname}`;
  this.phone = `${newphone}`;
};

//oggetto rubrica
var contacts = {
  //proprietà che raccoglie in un array tutti i contatti
  list: [],
  //metodo che aggiunge un nuovo conatto in fondo alla list
  new: function(name,phone) {
    this.list.push(new contact(name,phone))
  },
  //metodo che  modifica un contatto a partire dal nome
  modify: function(oldname,newname,newphone) {
    for (let i=0; i<this.list.length; i++) {
      if (this.list[i].name === oldname) {
        this.list[i].name = newname;
        this.list[i].phone = newphone;
      }
    }    
  },
  //metodo che cancella un contatto a partire dal nome
  delete: function(name) {
    for (let i=0; i<this.list.length; i++) {
      if (this.list[i].name === name) {
        this.list.splice(i,1);
      }
    }    
  },
  //metodo che ricerca un oggetto contatto e lo restituisce in output
  search: function(searchName) {
    for (let i=0; i<this.list.length; i++) {
      if (this.list[i].name===searchName) {
        return this.list[i];
      }
    }
  }
}

//prove di utilizzo dell'oggetto contacts
//aggiunta di contatti con il metodo .new
contacts.new('mario','23457');
contacts.new('gigi','455322');
contacts.new('gianni','5766775');
//modifica di un contatto a partire dal nome
contacts.modify('mario','mario balotelli','45')
//rimozione di un contatto a partire dal nome
contacts.delete('gigi')
//ricerca di un contatto in base al nome e stampa del risultato
console.log(contacts.search('gianni'))
//visualizzazione dell'intera lista contatti
console.log(contacts.list)






