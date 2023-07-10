var creditos = [
    {nombre: "Plan 001", capital:150000, plazo: 30, tasa: 15},
    {nombre: "Plan 002", capital:300000, plazo: 180, tasa: 10},
    {nombre: "Plan 003", capital:485000, plazo: 60, tasa: 23}
];

var oferta = []


for (var i = 0; i < creditos.length; i++) {
    var credito = creditos[i];
    var interes = (credito.capital * credito.plazo * (credito.tasa / 100) / 100);

    oferta.push({
        nombre: credito.nombre,
        capital: credito.capital,
        plazo: credito.plazo,
        tasa: credito.tasa,
        interes: interes
    });
}

var tablaFlujo = document.getElementById("tablaFlujo");
var tbody = tablaFlujo.getElementsByTagName("tbody")[0];


for (var i = 0; i < oferta.length; i++) {
    var fila = tbody.insertRow();

    var celdaNombre = fila.insertCell();
    celdaNombre.textContent = oferta[i].nombre;

    var celdaCapital = fila.insertCell();
    celdaCapital.textContent = oferta[i].capital;

    var celdaPlazo = fila.insertCell();
    celdaPlazo.textContent = oferta[i].plazo;

    var celdaTasa = fila.insertCell();
    celdaTasa.textContent = oferta[i].tasa;
    
    var celdaInteres = fila.insertCell();
    celdaInteres.textContent = oferta[i].interes;
};

creditosConInteresesCalculados = [];

function interesesCalculados(creditos){
    for (var i = 0; i < creditos.length; i++){
        var credito = creditos[i];
        var interes = (credito.capital * credito.plazo * (credito.tasa / 100) / 100);

    creditosConInteresesCalculados.push({
        nombre: credito.nombre,
        capital: credito.capital,
        plazo: credito.plazo,
        tasa: credito.tasa,
        interes: interes
    });
    }
    return (console.log(creditosConInteresesCalculados));
}