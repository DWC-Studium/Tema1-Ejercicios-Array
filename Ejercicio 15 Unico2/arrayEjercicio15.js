function unicos(arr) {
    return Array.from(new Set(arr));
}
let strings = ["GrupoStudium", "DAW", "GrupoStudium", "DAW",
    "DAW", "DAW", "GrupoStudium", "GrupoStudium", ":)"
];
alert(unicos(strings));