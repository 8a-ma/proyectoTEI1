function ordenarMayoMenor(json, key) {
  json.sort(function (a, b) {
    return a[key] < b[key];
  });
}

function creadorTabla(json, key){
  let myTbody = document.getElementById('myTbody');

  myTbody.innerHTML = ' ';

  for(let valores of json){
    myTbody.innerHTML += `
    <tr>
      <td>${valores.nombre}</td>
      <td>${valores[key]}</td>
    </tr>
    `
  }
}

function coloreoServicios(datos, servicio_id) {
  for(let valores of datos){
    if( 0 < valores[servicio_id] && valores[servicio_id] <= 20){
      document.getElementById(valores.nombre).style.fill = '#FF0000';
    }
    else if(20 < valores[servicio_id] && valores[servicio_id] <= 40){
      document.getElementById(valores.nombre).style.fill = '#FF6200';
    }
    else if(40 < valores[servicio_id] && valores[servicio_id] <= 60){
      document.getElementById(valores.nombre).style.fill = '#FFAD00';
    }
    else if(60 < valores[servicio_id] && valores[servicio_id] <= 80){
      document.getElementById(valores.nombre).style.fill = '#FFFB00';
    }
    else if(80 < valores[servicio_id]){
      document.getElementById(valores.nombre).style.fill = '#04FF00';
    }
    else if(valores[servicio_id] == 0){
      document.getElementById(valores.nombre).style.fill = '#BBCCA3';
    }
  }
  ordenarMayoMenor(datos, servicio_id);
  creadorTabla(datos, servicio_id);
}

var botones = document.querySelectorAll("button");
for(i=0; i < botones.length; i++){
  botones[i].onclick = function(){
    switch (this.id) {
      case "IDSE":
      case "CONDICIONES_LABORALES":
      case "CONECTIVIDAD_Y_MOVILIDAD":
      case "SALUD_Y_MEDIO_AMBIENTE":
      case "VIVIENDA_Y_ENTORNO":
      case "ICVU":
        fetch('comunas.json')
          .then(res => res.json())
          .then(datos => {
            coloreoServicios(datos, this.id);
          })
        break;
    }
  }
}
