/*
  Il calendario mediocre
  Scrivi un programma che dato:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)
  Stampi il calendario di un mese.

  Esempio:
    Input: numero giorni = 31, giorno settimana = 0
    Output: Lun 1
            Mar 2
            Mer 3
            Gio 4
            Ven 5
            Sab 6
            Dom 7
            Lun 8
            Mar 9
            Mer 10
            Gio 11
            Ven 12
            Sab 13
            Dom 14
            Lun 15
            Mar 16
            Mer 17
            Gio 18
            Ven 19
            Sab 20
            Dom 21
            Lun 22
            Mar 23
            Mer 24
            Gio 25
            Ven 26
            Sab 27
            Dom 28
            Lun 29
            Mar 30
            Mer 31


  Variante:
  Piuttosto che avere in input il numero dei giorni del mese passa direttamente il mese e calcola tu da quanti giorni è formato.

  http://www.imparareaprogrammare.it
*/
var month = 'marzo';
var weekday = 1;


switch (month) {
case 'gennaio':
case 'febbraio':
case 'marzo':
case 'aprile':
case 'maggio':
case 'giugno':
case 'luglio':
case 'agosto':
case 'settembre':
case 'ottobre':
case 'novembre':
case 'dicembre':
  var monthdays;
  if (month == 'novembre' || month == 'aprile' || month == 'giugno' || month == 'settembre' ) {
    monthdays = 30
  }
  else if (month == 'febbraio') {
    monthdays = 28
  }
  else {
    monthdays = 31
  }
   
  var calendar = 'Output: ';
  var day
  var weekcount = weekday
  
  console.log('mese: ' +month)
  console.log('numero giorni: ' +monthdays)
  console.log('giorno settimana: ' +weekday)
  
  for (let i = 1; i <= monthdays; i++) {
    
    if (i == 1) {
      switch (weekcount) {
        case 0:
          day = 'Lun ';
          break;
        case 1:
          day = 'Mar ';
          break;
        case 2:
          day = 'Mer ';
          break;
        case 3:
          day = 'Gio ';
          break;
        case 4:
          day = 'Ven ';
          break;
        case 5:
          day = 'Sab ';
          break;
        case 6:
          day = 'Dom ';
          break;      
      }
      calendar += day + i + '\n';
        
    }
    else {
      if (weekcount<7) {
        weekcount++
      }
      else {
        weekcount = 0
      }
      switch (weekcount) {
        case 0:
          day = 'Lun ';
          break;
        case 1:
          day = 'Mar ';
          break;
        case 2:
          day = 'Mer ';
          break;
        case 3:
          day = 'Gio ';
          break;
        case 4:
          day = 'Ven ';
          break;
        case 5:
          day = 'Sab ';
          break;
        case 6:
          day = 'Dom ';
          break;      
      }
      calendar += '\t'.repeat(2) + day + i  + '\n';
    }
  }
break;
default: {
  console.log('nome del mese errato!')
}
}
console.log(calendar);