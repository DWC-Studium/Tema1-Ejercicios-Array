<h1>Ejercicio 13</h1>
<p>Tenemos un array de strings arr. Nos gustaría tener una copia ordenada de él, pero manteniendo arr sin modificar.</p>
<p>Crear una función copiarOrdenado(arr) que devuelva esa copia.</p>
    let arr = ["HTML", "JavaScript", "CSS"];
    let ordenado = copiarOrdenado(arr);
    alert( ordenado ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (sin cambios)