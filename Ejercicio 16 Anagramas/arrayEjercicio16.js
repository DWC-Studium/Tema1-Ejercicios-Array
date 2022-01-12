function limpiarAnagramas(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let ordenados = arr[i].toLowerCase().split("").sort().join("");
        obj[ordenados] = arr[i];
    }
    return Object.values(obj);
}
let arr = ["taco", "maestros", "restamos", "ACTO", "rea", "era", "mostrase"];
alert(limpiarAnagramas(arr));