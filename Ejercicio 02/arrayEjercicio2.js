let estilos = ["Jazz", "Blues"];
console.log('Array Inicial: ' + estilos);
estilos.push("Rock-n-Roll");
console.log('Array Modificado: ' + estilos);
estilos[Math.floor((estilos.length - 1) / 2)] = "Classics";
alert(estilos.shift());
estilos.unshift("Rap", "Reggae");
console.log('Añadimos al principio: ' + estilos);