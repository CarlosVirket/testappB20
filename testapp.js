
function servicios() {
  var direccion = "";
  var date1 = "";
  var content = "";

  for(var i = 0; i < my_services.length; i++){
    
    direccion += '<id="direccion">' + my_services[i].addres_street + '</div>'
  }
    document.getElementById("direccion").innerHTML = direccion;
    console.log(direccion)
  
    
    content += '<div id="date1">' + my_services[i].date + '</div>'
    document.getElementById("date1").innerHTML = date1;
    
    content += '<div class="servicio">' + my_services[i].hour + '</div>'
    content += '<div class="servicio">' + my_services[i].lenght + '</div>'
    content += '<div class="servicio">' + my_services[i].service_type + '</div>'

  }

  document.getElementById("servicios").innerHTML = content;
