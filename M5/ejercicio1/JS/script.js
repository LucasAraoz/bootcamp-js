var calcular = document.getElementById("botonCalcular");

calcular.addEventListener("click",function(){
    
    var costosFijos = document.getElementById("costosFijos").value;
    var precioDeVenta = document.getElementById("precioDeVenta").value;
    var costosVariables = document.getElementById("costosVariables").value;

    var puntoDeEquilibrio = costosFijos/(precioDeVenta - costosVariables);

    alert("El resultado es "+puntoDeEquilibrio)
})