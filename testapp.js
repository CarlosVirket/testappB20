
function servicios() {
  var direccion = "";
  var fecha = "";
  var content = "";

  for(var i = 0; i < my_services.length; i++){
   
    direccion += '<id="direccion">' + my_services[i].addres_neighborhood + '</div>'
    document.getElementById("direccion").innerHTML = direccion;
    console.log(direccion)
    content += '<div class="servicio">' + my_services[i].date + '</div>'
    document.getElementById("confirmados").innerHTML = fecha;
    content += '<div class="servicio">' + my_services[i].hour + '</div>'
    content += '<div class="servicio">' + my_services[i].lenght + '</div>'
    content += '<div class="servicio">' + my_services[i].service_type + '</div>'

  }

  document.getElementById("confirmados").innerHTML = content;
}