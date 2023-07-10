var montoTotal = parseFloat(prompt("Indicar el monto total: "));

var gastosNecesarios = montoTotal * 0.5;

var gastosOpcionales = montoTotal * 0.3;

var ahorroEInversion = montoTotal * 0.2;

document.writeln("Tu monto total es: $" + montoTotal + " , tus gastos necesarios son: $" + gastosNecesarios + " , tus gastos opcionales son: $" + gastosOpcionales + " y tu ahorro e inversion es: $" +ahorroEInversion);