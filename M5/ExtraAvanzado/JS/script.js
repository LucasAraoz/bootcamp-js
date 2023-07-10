var addid = 0;

function addInput(id) {

  var addList = document.getElementById('addlist');
  var text = document.createElement('div');

  text.id = 'additem_' + addid;
  text.innerHTML = '<div><input type="text" placeholder="Categoria" id="nomCat_' + addid + '"><input type="number" placeholder="Porcentaje" id="porcentCat_' + addid + '"></div>';

  addid++;

  addList.appendChild(text);
}

function calcular(id) {
 
  const borrar = document.getElementById("respuesta");
  borrar.innerHTML = '';
  
  var ingresos = parseFloat(document.getElementById("ingresos").value);
  var totalPorcentajes = 0;

  for (let i = 0; i < addid; i++) {
    elmId = "porcentCat_" + (i);
    totalPorcentajes += parseFloat(document.getElementById(elmId).value);
  }

  if (totalPorcentajes != 100) {
    alert("El porcentaje total de las categorías debe ser igual a 100")
  }
  else {

    var resp = document.createElement('div');
    var respuesta = document.getElementById('respuesta');
    var ingresos = parseFloat(document.getElementById('ingresos').value);

    resp.innerHTML += '<div class="mt-5">';
    respuesta.appendChild(resp);

    for (let i = 0; i < addid; i++) { 

      var leerId = "porcentCat_" + i; 
      var leerNombre = "nomCat_" + i; 
      totalPorcentajes += parseFloat(document.getElementById(leerId).value);
      var porcEnPesos = ingresos * document.getElementById(leerId).value / 100;
      resp.id = 'additem_' + addid;
      resp.innerHTML += '<div><b>Categoria: </b>' + document.getElementById(leerNombre).value + ' <b>Importe: </b>' + porcEnPesos + '</div>';
    }

    respuesta.appendChild(resp);
    resp.innerHTML += '</div>';
    respuesta.appendChild(resp);
  }

}
