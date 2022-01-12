function unicos(arr) {
    let resultado = [];
    for (let str of arr) {
        if (!resultado.includes(str)) {
            resultado.push(str);
        }
    }
    return resultado;
}
let strings = ["GrupoStudium", "DAW", "GrupoStudium", "DAW",
    "DAW", "DAW", "GrupoStudium", "GrupoStudium", ":)"
];
alert(unicos(strings));