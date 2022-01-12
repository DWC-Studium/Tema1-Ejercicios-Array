/**
 * Escribe la función sumarInput() que:
 *   Pida al usuario valores usando prompt y almacene los valores en el array.
 *   Termine de preguntar cuando el usuario introduzca un valor no numérico, un string vacío, o pulse “Cancel”.
 *   Calcula y devuelve la suma de los items de un array.
 * Nota. Un 0 es un número válido, así que no se pare la ejecución cuando se introduzcan ceros.
 */
function sumarInput() {
    let valores = [];
    while (true) {
        let valor = prompt("Introduzca el valor");
        if (!isFinite(valor) || valor === null || valor === "") { break; }
        valores.push(+valor);
    }
    let suma = 0;
    valores.forEach(element => {
        suma = suma + element;
    });
    console.log("El total es: " + suma);
}
sumarInput();