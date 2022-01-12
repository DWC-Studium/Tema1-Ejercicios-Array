/*
function filtrarRangoAqui(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        // eliminar si está fuera del intervalo
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
let arr = [5, 3, 8, 1];
filtrarRangoAqui(arr, 1, 4); // elimina todos los números que no están entre 1 y 4
alert(arr); // [3, 1]
*/

function filtrarRangoAqui(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (!((a <= arr[i]) && (arr[i] <= b))) {
            arr.splice(i, 1);
            i--;
        }
    }
    /*arr.forEach(element => {
        if (!((a <= element) && (element <= b))) {
            //delete arr[arr.indexOf(element)];
        }
    });*/
    arr.forEach(element => {
        console.log(element);
    });
}
let array = [9, 1, 3, 4, 6, 3, 2, 8, 5, 7];
filtrarRangoAqui(array, 3, 6)