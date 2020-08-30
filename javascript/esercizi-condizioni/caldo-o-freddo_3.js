/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/
var a = 10;
var b = -2;
var c = 31;
var d = 22;
var e = 15;
var f = -6;
var g = 7;

var week = [a, b, c, d, e, f, g];

//giornata più calda
if (a == Math.max(...week)) {
    console.log('giornata più calda = ' +a)
}
if (b == Math.max(...week)) {
    console.log('giornata più calda = ' +b)
}
if (c == Math.max(...week)) {
    console.log('giornata più calda = ' +c)
}
if (d == Math.max(...week)) {
    console.log('giornata più calda = ' +d)
}
if (e == Math.max(...week)) {
    console.log('giornata più calda = ' +e)
}
if (f == Math.max(...week)) {
    console.log('giornata più calda = ' +f)
}
if (g == Math.max(...week)) {
    console.log('giornata più calda = ' +g)
}

//giornata più fredda
if (a == Math.min(...week)) {
    console.log('giornata più fredda = ' +a)
}
if (b == Math.min(...week)) {
    console.log('giornata più fredda = ' +b)
}
if (c == Math.min(...week)) {
    console.log('giornata più fredda = ' +c)
}
if (d == Math.min(...week)) {
    console.log('giornata più fredda = ' +d)
}
if (e == Math.min(...week)) {
    console.log('giornata più fredda = ' +e)
}
if (f == Math.min(...week)) {
    console.log('giornata più fredda = ' +f)
}
if (g == Math.min(...week)) {
    console.log('giornata più fredda = ' +g)
}