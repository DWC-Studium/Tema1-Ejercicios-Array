// Escribe la función camelize(str) que cambia palabras separadas por guiones como “my-short-string” en palabras camel-cased “myShortString”.
//Esto es: elimina todos los guiones, y cada palabra tras el guión comienza por mayúscula.
//Ejemplos:
//camelize("background-color") == 'backgroundColor';
//camelize("list-style-image") == 'listStyleImage';
//camelize("-webkit-transition") == 'WebkitTransition';
//Pista: usa split para dividir el string en un array, transfórmalo y únelo de nuevo con join.
let frase = "hola-a-todo-el-mundo";

alert(camelize(frase));

function camelize(str) {
    let separar = [];
    let unir = "";
    let i = 0;
    separar = str.split("-");
    separar.forEach(element => {
        if (i > 0) {
            unir = unir + element.charAt(0).toUpperCase() + element.slice(1);
        } else {
            unir = unir + element;
            i++;
        }

    });
    return unir;
}