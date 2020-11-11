var squadre = [];

for (var i = 0; i < 5; i++) {
    var inputUser = prompt("Inserisci il nome di una squadra");
    var squadra = {
        'nome': inputUser,
        'puntiFatti': 0,
        'falliSubiti': 0,
    };
    squadra.puntiFatti = Math.floor(Math.random() * (5)),
        squadra.falliSubiti = Math.floor(Math.random() * (5 - 1) + 1),

        squadre.push(squadra);

}
console.log(squadre);