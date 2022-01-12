console.log(cesar('DIA', 4));

function cesar(mensaje, clave) {
    let alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", " "];
    let resultado = [];
    for (let i = 0; i < mensaje.length; i++) {
        let letra_mayuscula = mensaje[i].toUpperCase();
        let posicion = alfabeto.indexOf(letra_mayuscula);
        let posicion_cifrada = (posicion + clave) % 21;
        let nuevaLetra = alfabeto[posicion_cifrada];
        resultado.push(nuevaLetra);
    }
    return resultado.join("");
}