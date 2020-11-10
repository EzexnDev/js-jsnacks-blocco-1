var squadre = [];

for (var i = 0; i < 5; i++) {
    var inputUser = prompt("Inserisci il nome di una squadra");
    var squadra = {
        'nome': inputUser,
        'punti': 0,
        'cartellini': 0,
        // JSnack 4B
        // 'punti': Math.floor(Math.random() * (5)),
        // 'cartellini': Math.floor(Math.random() * (5 - 1) + 1),
    };

    squadre.push(squadra);
}

console.log(squadre);