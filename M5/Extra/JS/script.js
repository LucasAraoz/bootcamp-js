var calcular = document.getElementById("botonCalcular");

calcular.addEventListener("click",function(event){
    event.preventDefault()

    var ingresos = parseFloat(document.getElementById("ingresos").value);
    var porcentajeGastosNecesarios = parseFloat(document.getElementById("porcentajeGastosNecesarios").value);
    var porcentajeGastosOpcionales = parseFloat(document.getElementById("porcentajeGastosOpcionales").value);
    var porcentajeAhorros = parseFloat(document.getElementById("porcentajeAhorros").value);

    var totalPorcentajes = porcentajeGastosNecesarios + porcentajeGastosOpcionales + porcentajeAhorros;

    var gastosNecesarios = ingresos * (porcentajeGastosNecesarios/100);

    var gastosOpcionales = ingresos * (porcentajeGastosOpcionales/100);

    var ahorroEInversion = ingresos * (porcentajeAhorros/100);

    

    if( totalPorcentajes !== 100){
        alert("El total de los porcentajes deber ser 100")
    }
    else{    
    document.getElementById('respuesta').textContent = "Total: $" + ingresos + ", Gastos Necesarios: $" + gastosNecesarios + ", Gastos Opcionales: $" + gastosOpcionales + ", Ahorro e Inversión: $" +ahorroEInversion;
    }
    

})