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

//giornata più calda
if (a>b && a>c && a>d && a>e && a>f && a>g) {
    console.log('giornata più calda = ' +a)
}
if (b>a && b>c && b>d && b>e && b>f && b>g) {
    console.log('giornata più calda = ' +b)
}
if (c>a && c>b && c>d && c>e && c>f && c>g) {
    console.log('giornata più calda = ' +c)
}
if (d>a && d>b && d>c && d>e && d>f && d>g) {
    console.log('giornata più calda = ' +d)
}
if (e>a && e>b && e>c && e>d && e>f && e>g) {
    console.log('giornata più calda = ' +e)
}
if (f>a && f>b && f>c && f>d && f>e && f>g) {
    console.log('giornata più calda = ' +f)
}
if (g>a && g>b && g>c && g>d && g>e && g>f) {
    console.log('giornata più calda = ' +g)
}

//giornata più fredda
if (a<b && a<c && a<d && a<e && a<f && a<g) {
    console.log('giornata più fredda = ' +a)
}
if (b<a && b<c && b<d && b<e && b<f && b<g) {
    console.log('giornata più fredda = ' +b)
}
if (c<a && c<b && c<d && c<e && c<f && c<g) {
    console.log('giornata più fredda = ' +c)
}
if (d<a && d<b && d<c && d<e && d<f && d<g) {
    console.log('giornata più fredda = ' +d)
}
if (e<a && e<b && e<c && e<d && e<f && e<g) {
    console.log('giornata più fredda = ' +e)
}
if (f<a && f<b && f<c && f<d && f<e && f<g) {
    console.log('giornata più fredda = ' +f)
}
if (g<a && g<b && g<c && g<d && g<e && g<f) {
    console.log('giornata più fredda = ' +g)
}