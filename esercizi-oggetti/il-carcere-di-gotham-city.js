/*
  Il carcere di Gotham City
  Sei appena stato nominato direttore presso il carcere di Gotham City.
  Hai l'arduo compito di scrivere un programma che gestisca:
  - I dati anagrafici delle guardie
  - I dati anagrafici dei detenuti
  - I fascicoli personali dei detenuti, che devono contenere almeno queste informazioni:
      - Un identificativo del criminale
      - La data di carcerazione
      - La data di scarcerazione
      - Il crimine commesso

  Visto che sei tu il capo, decidi se usare lo stesso oggetto per gestire sia le guardie che i criminali.
  In ogni caso dovrai definire la banca dati della prigione: crea un array di guardie, uno di detenuti e uno per i fascicoli.

  Prevedi la possibilià di:
    - Assumere nuove guardie
    - Schedare nuovi carcerati
    - Aggiungere nuovi fascicoli
    - Visualizzare l'elenco per ciascuna categoria (guardie, criminali, fascicoli)
    - Effettuare ricerche nei fascicoli per nome del detenuto

  Nel carcere di Gothma City non tutti i detenuti arrivano alla data di scarcerazione,
  gestisci l’eventualità in cui un detenuto sia evaso e quella in cui sia deceduto.

  Scrivi una funzione di riepilogo dell'andamento del carcere e che stampi:
    - il numero delle guardie,
    - il numero di detenuti totali,
    - il numero di detenuti evasi,
    - il numero di detenuti deceduti all’interno della struttura.

  http://www.imparareaprogrammare.it
*/


function officer(newName,newOfficerID) {
  this.name = `${newName}`;
  this.officerID = `${newOfficerID}`;
};

function criminal(newName,newID) {
  this.name = `${newName}`;
  this.criminalID = `${newID}`;
  this.state = 'imprigionato'
};

function file(newID,newImprisonDate,newReleaseDate,newCrime) {
  this.criminalID = `${newID}`;
  this.imprisonDate = `${newImprisonDate}`;
  this.releaseDate = `${newReleaseDate}`;
  this.crime = `${newCrime}`;  
};

var jail = {
  officers: [],
  criminals: [],  
  files: [],
  newofficer: function(name,officerID) {
    this.officers.push(new officer(name,officerID));
  },
  newimprisoned: function(name,imprisonedID) {
    this.criminals.push(new criminal(name,imprisonedID));
  },
  newfile: function(ID,imprisonDate,releaseDate,crime) {
    this.files.push(new file(ID,imprisonDate,releaseDate,crime));
  },
  showofficers: function () {
    var temp = 'Elenco guardie \n';
    for (let i=0; i<this.officers.length; i++) {
      temp += `${this.officers[i].name} ID: ${this.officers[i].officerID}\n`;
    }
  return console.log(temp);
  },
  showcriminals: function () {
    var temp = 'Elenco criminali \n';
    for (let i=0; i<this.criminals.length; i++) {
      temp += `${this.criminals[i].name} ID: ${this.criminals[i].criminalID} Stato: ${this.criminals[i].state}\n`;
    }
  return console.log(temp);
  },
  showfiles: function () {
    var temp = 'Elenco fascicoli \n';
    for (let i=0; i<this.files.length; i++) {
      temp += `ID: ${this.files[i].criminalID} Carcerazione: ${this.files[i].imprisonDate} Scarcerazione: ${this.files[i].releaseDate} Reato: ${this.files[i].crime}\n`;
    }
  return console.log(temp);
  },
  searchfile: function (name, operation) {   
    var temp = ''; 
    for (let i=0; i<this.criminals.length; i++) {
      if (this.criminals[i].name===name) {
        for (let x=0; x<this.files.length; x++) {
          if (this.criminals[i].criminalID===this.files[x].criminalID) {
            switch(operation) {
              case 'carcerazione':
                temp = `Data Carcerazione: ${this.files[x].imprisonDate}`;
                break;
              case 'scarcerazione':
                temp = `Data Scarcerazione: ${this.files[x].releaseDate}`;
                break;
              case 'crimine':
                temp = `Crimine: ${this.files[x].crime}`;
                break;
              case 'tutto':
                temp = `Carcerazione: ${this.files[x].imprisonDate} Scarcerazione: ${this.files[x].releaseDate} Reato: ${this.files[x].crime}`;
                break;
            }
            return console.log(`Ricerca fascicolo - Detenuto: ${this.criminals[x].name} ID: ${this.criminals[x].criminalID}\n${temp}`)
          }
        }
      }
    }
  },
  prisonbreak: function (name) {
    for (let i=0; i<this.criminals.length;i++) {
      if (this.criminals[i].name === name) {
        this.criminals[i].state = 'evaso'
      }
    }
  },
  decease: function (name) {
    for (let i=0; i<this.criminals.length;i++) {
      if (this.criminals[i].name === name) {
        this.criminals[i].state = 'deceduto';
      }
    }
  },
  recap: function () {
    var imprisonedCount = 0;
    var escapedCount = 0;
    var deadCount = 0;
    var temp = 'Riepilogo gestione carcere di Gotham City\n';    
    for (let i=0; i<this.criminals.length;i++) {
      if (this.criminals[i].state === 'imprigionato') {
        imprisonedCount++
      }
    }    
    for (let i=0; i<this.criminals.length;i++) {
      if (this.criminals[i].state === 'evaso') {
        escapedCount++
      }
    }    
    for (let i=0; i<this.criminals.length;i++) {
      if (this.criminals[i].state === 'deceduto') {
        deadCount++
      }
    }
    temp += `Numero guardie: ${this.officers.length}\n`
    temp += `Detenuti attuali: ${imprisonedCount}\n`
    temp += `Detenuti evasi: ${escapedCount}\n`
    temp += `Detenuti deceduti: ${deadCount}\n`
    return console.log(`${temp}`)
  }
}

jail.newofficer('James Gordon','OFF-001')
jail.newofficer('Arthur Dent','OFF-002')

jail.newimprisoned('Joker','CRM-001')
jail.newimprisoned('Bane','CRM-002')
jail.newimprisoned('Pinguino','CRM-003')
jail.newimprisoned('Killer Croc','CRM-004')

jail.newfile('CRM-001','25-08-2020','25-08-2030','assassinio')
jail.newfile('CRM-002','25-12-2015','25-12-2030','assassinio')
jail.newfile('CRM-003','03-05-2018','03-05-2023','rapina')
jail.newfile('CRM-004','12-09-2017','20-11-2020','rissa')

jail.showofficers()

jail.showcriminals()

jail.showfiles()

jail.searchfile('Pinguino','tutto')

jail.prisonbreak('Joker')

jail.showcriminals()

jail.decease('Bane')

jail.showcriminals()

jail.recap()

jail.prisonbreak('Pinguino')

jail.recap()
