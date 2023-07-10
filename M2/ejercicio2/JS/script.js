var login = document.querySelector("button")

login.addEventListener("click",function(){
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    if(usuario == "admin" && contraseña == "1234"){
        alert("Click en el botón para continuar")
        document.writeln("Te damos la bienvenida!")
    }
    else{
        alert("Datos incorrectos, intentalo nuevamente.")
    }
})