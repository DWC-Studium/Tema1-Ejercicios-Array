<h1>Ejercicio 9</h1>
<p>Escribe la función camelize(str) que cambia palabras separadas por guiones como “my-short-string” en palabras camel-cased “myShortString”.</p>
<p>Esto es: elimina todos los guiones, y cada palabra tras el guión comienza por mayúscula.</p>
<p>Ejemplos:</p>
    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';
<p>Pista: usa split para dividir el string en un array, transfórmalo y únelo de nuevo con join.</p>