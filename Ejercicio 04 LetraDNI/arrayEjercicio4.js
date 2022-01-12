let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
let dni = prompt("Escribe tu DNI")
let numero = parseInt(dni.substring(0, dni.length - 1))
let letra = dni.substring(dni.length - 1, numero.length)

if (numero < 0 || numero > 99999999) {
    document.write("El número proporcionado no es válido")
} else {
    letraCorrespondiente = letras[numero % 23]
    if (letra != letraCorrespondiente) {
        document.write("La letra indicada no corresponde")
    } else {
        document.write("El número y la letra son correctos")
    }
}