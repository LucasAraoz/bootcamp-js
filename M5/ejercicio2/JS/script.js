var calcular = document.getElementById("botonCalcular");

calcular.addEventListener("click",function(event){
    event.preventDefault()
    
    var ingresos = document.getElementById("ingresos").value;

    var gastosNecesarios = ingresos * 0.5;

    var gastosOpcionales = ingresos * 0.3;

    var ahorroEInversion = ingresos * 0.2;

    document.getElementById('respuesta').textContent = "Monto total: $" + ingresos + " ,Gastos Necesarios: $" + gastosNecesarios + " ,Gastos Opcionales: $" + gastosOpcionales + " ,Ahorros e Inversión: $" +ahorroEInversion;
    
})