/*
Crea una página Web que lea una cadena de texto mediante el método prompt() y genere un array con las palabras que contiene. 
Posteriormente, mostrar la siguiente información: 
Número de palabras.
Primera y última palabra.
Las palabras colocadas en orden inverso.
Las palabras ordenadas de la a a la z.
Las palabras ordenadas de la z a la a.
*/
let frase = prompt("Escribe una frase:");
let array = [];
array = frase.split(" ");
alert('La primera palabra es ' + array[0] + ' la ultima palabra es ' + array[array.length - 1]);
let invarray = array.reverse().slice();
let ordenA = array.sort().slice();
let ordenB = ordenA.reverse().slice();

array.forEach(element => {
    console.log(element);
});
invarray.forEach(element => {
    console.log(element);
});
ordenA.forEach(element => {
    console.log(element);
});
ordenB.forEach(element => {
    console.log(element);
});