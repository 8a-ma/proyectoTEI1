document.querySelector('#btn1');

function problema1() {
  fetch('comunas.json')
    .then(res => res.json())
    .then(datos => {
      pintarp1(datos);
    })

}

function pintarp1(datos) {
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
