function filtrarRango(arr, a, b) {
    // se han añadido paréntesis alrededor de la exprexión para una mayor legibilidad
    return arr.filter(item => (a <= item && item <= b));
}
let arr = [5, 3, 8, 1];
let filtrado = filtrarRango(arr, 1, 4);
alert(filtrado); // 3,1 (los valores encontrados)
alert(arr); // 5,3,8,1 (no se ha modificado)