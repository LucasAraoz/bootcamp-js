var costosFijos = parseFloat(prompt("Ingrese el valor de costos fijos:"));

var precioDeVenta = parseFloat(prompt("Ingrese el valor de precio de venta:"));

var costosVariables = parseFloat(prompt("Ingrese el valor de costos variables:"));

var puntoDeEquilibrio = costosFijos/(precioDeVenta - costosVariables);

document.writeln("El valor de punto de equilibrio es de: " + puntoDeEquilibrio);