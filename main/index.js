function problema1(datos) {
  for(let valores of datos){
    if(valores.problema1 <= 20){
      document.getElementById(valores.nombre).style.fill = '#cc0b00';
    }
    else if(20 < valores.problema1 && valores.problema1 <= 40){
      document.getElementById(valores.nombre).style.fill = '#f04e00';
    }
    else if(40 < valores.problema1 && valores.problema1 <= 60){
      document.getElementById(valores.nombre).style.fill = '#e6d201';
    }
    else if(60 < valores.problema1 && valores.problema1 <= 80){
      document.getElementById(valores.nombre).style.fill = '#00a824';
    }
    else if(80 < valores.problema1){
      document.getElementById(valores.nombre).style.fill = '#44a800';
    }
  }
}

function problema2(datos) {
  for(let valores of datos){
    if(valores.problema2 <= 20){
      document.getElementById(valores.nombre).style.fill = '#cc0b00';
    }
    else if(20 < valores.problema2 && valores.problema2 <= 40){
      document.getElementById(valores.nombre).style.fill = '#f04e00';
    }
    else if(40 < valores.problema2 && valores.problema2 <= 60){
      document.getElementById(valores.nombre).style.fill = '#e6d201';
    }
    else if(60 < valores.problema2 && valores.problema2 <= 80){
      document.getElementById(valores.nombre).style.fill = '#00a824';
    }
    else if(80 < valores.problema2){
      document.getElementById(valores.nombre).style.fill = '#44a800';
    }
  }
}

function problema3(datos) {
  for(let valores of datos){
    if(valores.problema3 <= 20){
      document.getElementById(valores.nombre).style.fill = '#cc0b00';
    }
    else if(20 < valores.problema3 && valores.problema3 <= 40){
      document.getElementById(valores.nombre).style.fill = '#f04e00';
    }
    else if(40 < valores.problema3 && valores.problema3 <= 60){
      document.getElementById(valores.nombre).style.fill = '#e6d201';
    }
    else if(60 < valores.problema3 && valores.problema3 <= 80){
      document.getElementById(valores.nombre).style.fill = '#00a824';
    }
    else if(80 < valores.problema3){
      document.getElementById(valores.nombre).style.fill = '#44a800';
    }
  }
}


var botones = document.querySelectorAll("button");
for(i=0; i < botones.length; i++){
  botones[i].onclick = function(){ //cambiar if's por switch
    switch (this.id) {
      case "problema1":
      case "problema2":
      case "problema3":
        fetch('comunas.json')
          .then(res => res.json())
          .then(datos => {
            window[this.id](datos);
          })
        break;
    }
  }
}
