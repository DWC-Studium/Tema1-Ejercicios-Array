<h1>Ejercicio 2</h1>
<p>Intentemos 5 operaciones de array.</p>
<ol>
    <li>Crear un array estilos con items “Jazz” y “Blues”.</li>
    <li>Agrega “Rock-n-Roll” al final.</li>
    <li>Reemplaza el valor del medio por “Classics”. Tu código para encontrar el valor medio debe funcionar sea cual sea la longitud del array.</li>
    <li>Quita el primer valor del array y muéstralo.</li>
    <li>Agrega Rap y Reggae al comienzo del array.</li>
</ol>
<p>El array en el proceso:</p>
    Jazz, Blues
    Jazz, Blues, Rock-n-Roll
    Jazz, Classics, Rock-n-Roll
    Classics, Rock-n-Roll
    Rap, Reggae, Classics, Rock-n-Roll

<h1>Ejercicio 3</h1>
<p>El dictador Julio César utilizaba un código cuando quería mantener en secreto un mensaje. El cifrado consistía en sustituir la primera letra del alfabeto (A) por la cuarta (D) y así sucesivamente con las otras, es decir, B, por la quinta (I) la tercera (C) para la sexta (F) ...</p>
<p>El alfabeto latino que utilizaba Julio César constaba de 21 letras, por lo tanto la sustitución de letras para cifrar o descifrar mensajes queda descrita como sigue:</p>
<p>Alfabeto original: ABCDEFGHIKLMNOPQRSTV</p>
<p>Alfabeto cifrado: DEFGHIKLMNOPQRSTVABC</p>
<p>Este tipo de cifrado es un código de rotación, donde la clave de rotación es 3. Escribe un programa que permita cifrar utilizando un código de rotación. La clave será una variable del programa.</p>

<h1>Ejercicio 4</h1>
<p>El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionandola dentro de un array de letras.</p>
<p>El array de letras es: ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']. Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A.</p>
<p>Con estos datos, elaborar un pequeño script que:</p>
<ul>
    <li>Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado. (Nota: si se quiere pedir directamente al usuario que indique su número y su letra, se puede utilizar la función prompt()).</li>
    <li>En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.</li>
    <li>Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.</li>
    <li>Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.</li>
</ul>

<h1>Ejercicio 5</h1>
<p>Escribe un programa que defina un array con 5 notas de un alumno y que muestre la mayor, la menor y la media.</p>

<h1>Ejercicio 6</h1>
Crea una página Web que lea una cadena de texto mediante el método prompt() y genere un array con las palabras que contiene. Posteriormente, mostrar la siguiente información:
<ol>
    <li>Número de palabras.</li>
    <li>Primera y última palabra.</li>
    <li>Las palabras colocadas en orden inverso.</li>
    <li>Las palabras ordenadas de la a a la z.</li>
    <li>Las palabras ordenadas de la z a la a.</li>
</ol>

<h1>Ejercicio 7</h1>
<p>Escribe la función sumarInput() que:</p>
<ul>
    <li>Pida al usuario valores usando prompt y almacene los valores en el array.</li>
    <li>Termine de preguntar cuando el usuario introduzca un valor no numérico, un string vacío, o pulse “Cancel”.</li>
    <li>Calcula y devuelve la suma de los items de un array.</li>
    <li>Nota. Un 0 es un número válido, así que no se pare la ejecución cuando se introduzcan ceros.</li>
</ul>

<h1>Ejercicio 8</h1>
<p>El input es un array de números, por ejemplo arr = [1, -2, 3, 4, -9, 6].</p>
<p>La tarea es: encontrar el subarray contiguo de arr con el máximo valor de la suma de sus items.</p>
<p>Escribe la función getMaxSubSum(arr) que devuelva dicha suma.</p>
<p>Por ejemplo:</p>
    getMaxSubSum([-1, 2, 3, -9]) = 5 // la suma de 2 y 3
    getMaxSubSum([2, -1, 2, 3, -9]) = 6
    getMaxSubSum([-1, 2, 3, -9, 11]) = 11
    getMaxSubSum([-2, -1, 1, 2]) = 3
    getMaxSubSum([100, -9, 2, -3, 5]) = 100
    getMaxSubSum([1, 2, 3]) = 6 // los toma todos
<p>Si todos los items son negativos, esto significa que no debemos tomar ninguno (el subarray está vacío), así que la suma es cero:</p>
    getMaxSubSum([-1, -2, -3]) = 0

<h1>Ejercicio 9</h1>
<p>Escribe la función camelize(str) que cambia palabras separadas por guiones como “my-short-string” en palabras camel-cased “myShortString”.</p>
<p>Esto es: elimina todos los guiones, y cada palabra tras el guión comienza por mayúscula.</p>
<p>Ejemplos:</p>
    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';
<p>Pista: usa split para dividir el string en un array, transfórmalo y únelo de nuevo con join.</p>

<h1>Ejercicio 10</h1>
<p>Escribe una función filtrarRango(arr, a, b) que obtenga un array arr, busque elementos entre a y b en él y devuelva un array con ellos.</p>
<p>Esta función no debería modificar el array, sino devolver un nuevo array.</p>
<p>Por ejemplo:</p>
    let arr = [5, 3, 8, 1];
    let filtrado = filtrarRango(arr, 1, 4);
    alert( filtrado ); // 3,1 (los valores encontrados)
    alert( arr ); // 5,3,8,1 (no se ha modificado)

<h1>Ejercicio 11</h1>
<p>Escribe una función filtrarRangoAqui(arr, a, b) que obtenga un array arr y le quite todos los valores excepto aquellos que están entre a y b.</p>
<p>La prueba es: a ≤ arr[i] ≤ b.</p>
<p>La función sólo debe modificar el array y no devolver nada.</p>
<p>Por ejemplo:</p>
    let arr = [5, 3, 8, 1];
    filtrarRangoAqui(arr, 1, 4); // elimina todos los números que no están entre 1 y 4
    alert( arr ); // [3, 1]

<h1>Ejercicio 12</h1>
<p>Escribe un código en JavaScript que modifique el array para que tenga sus valores numéricos ordenados de mayor a menor:</p>
    let arr = [5, 2, 1, -10, 8];
    // ... tu código para ordenarlo
    alert( arr ); // 8, 5, 2, 1, -10

<h1>Ejercicio 13</h1>
<p>Tenemos un array de strings arr. Nos gustaría tener una copia ordenada de él, pero manteniendo arr sin modificar.</p>
<p>Crear una función copiarOrdenado(arr) que devuelva esa copia.</p>
    let arr = ["HTML", "JavaScript", "CSS"];
    let ordenado = copiarOrdenado(arr);
    alert( ordenado ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (sin cambios)

Ejercicio 14</h1>
<p>Sea arr un array.</p>
<p>Crear una función unicos(arr) que devuelva un array con elementos únicos de arr.</p>
<p>Por ejemplo:</p>
    function unicos(arr) {
      /* tu código */
    }
    let strings = ["GrupoStudium", "DAW", "GrupoStudium", "DAW",
      "DAW", "DAW", "GrupoStudium", "GrupoStudium", ":)"
    ];
    alert( unicos(strings) ); // GrupoStudium, DAW, :)

<h1>Ejercicio 15</h1>
<p>Sea arr un array.</p>
<p>Crear una función unicos(arr) que devuelva un array con elementos únicos de arr.</p>
<p>Por ejemplo:</p>
    function unicos(arr) {
    /* tu código */
    }
    let valores = ["GrupoStudium", "DAW", "GrupoStudium", "DAW",
      "DAW", "DAW", "GrupoStudium", "GrupoStudium", ":)"
    ];
    alert( unicos(valores) ); // GrupoStudium, DAW, :)
<p>Nota. Aquí se usan strings, pero pueden ser valores de cualquier tipo. Usar Set para almacenar valores únicos.</p>

<h1>Ejercicio 16</h1>
<p>Anagramas son palabras que tienen el mismo número de letras, pero en orden diferente.</p>
<p>Por ejemplo:</p>
    taco - acto
    era - rae - rea
    restamos - mostrase - maestros
<p>Escribe una función limpiarAnagramas(arr) que devuelva un array libre de anagramas.</p>
<p>Por ejemplo:</p>
    let arr = ["taco", "maestros", "restamos", "ACTO", "rea", "era", "mostrase"];
    alert( limpiarAnagramas(arr) ); // "taco,maestros,rea" or "ACTO,restamos,era"
<p>Para cada grupo de anagramas debe devolver sólo una palabra, da igual cual..</p>