/*
  Le tabelline nel tabellone
  Scrivi un programma che stampi il tabellone delle tabelline, da 0 a 10.
  In questo modo:
    x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0
    1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    2 | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20
    ...
    10 | 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
    
  http://www.imparareaprogrammare.it
*/

//definisce le variabili e una matrice di intestazione
var header = ['x',0,1,2,3,4,5,6,7,8,9,10];
var billboard = [];

//calcola il tabellone sommando l'intestazione nella prima riga e colonna
for (let x=0; x<12; x++) {
  billboard[x]=[];
  for (let y=0; y<12; y++) {
    billboard[0][y]=header[y];
    billboard[x][0]=header[x];
    if (x!=0 && y!=0) {
      billboard[x][y]=(x-1)*(y-1)
    }
  }
}

//stampa il risultato sostituendo il separatore
for (let x=0; x<12; x++){
  console.log(billboard[x].join(' | '))
}