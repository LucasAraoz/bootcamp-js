var flujo = [
    { periodo: "Enero", ingreso: 1500, egreso: 1500 },
    { periodo: "Febrero", ingreso: 2500, egreso: 2500 },
    { periodo: "Marzo", ingreso: 84683, egreso: 1155 },
    { periodo: "Abril", ingreso: 135353, egreso: 1533 },
    { periodo: "Mayo", ingreso: 1535, egreso: 5434 },
    { periodo: "Junio", ingreso: 4343354, egreso: 5434543 },
    { periodo: "Julio", ingreso: 435453, egreso: 4543 },
    { periodo: "Agosto", ingreso: 78351, egreso: 7816 },
    { periodo: "Septiembre", ingreso: 1878, egreso: 95634 },
    { periodo: "Octubre", ingreso: 48483, egreso: 9433 },
    { periodo: "Noviembre", ingreso: 35483, egreso: 53133 },
    { periodo: "Diciembre", ingreso: 3843, egreso: 348133 }
];

var tablaFlujo = document.getElementById("tablaFlujo");
var tbody = tablaFlujo.getElementsByTagName("tbody")[0];


for (var i = 0; i < flujo.length; i++) {
    var fila = tbody.insertRow();

    var celdaMes = fila.insertCell();
    celdaMes.textContent = flujo[i].periodo;

    var celdaIngreso = fila.insertCell();
    celdaIngreso.textContent = flujo[i].ingreso;

    var celdaEgreso = fila.insertCell();
    celdaEgreso.textContent = flujo[i].egreso;

    var celdaBalance = fila.insertCell();
    celdaBalance.textContent = flujo[i].ingreso - flujo[i].egreso;
};