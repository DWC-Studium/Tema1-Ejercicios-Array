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