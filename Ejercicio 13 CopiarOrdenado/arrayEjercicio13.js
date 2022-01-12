function copiarOrdenado(arr) {
    return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let ordenado = copiarOrdenado(arr);
alert(ordenado);
alert(arr);