//Calculo
function calc(){
  //valor de altura e peso
  var alt = parseFloat(document.getElementById("altura").value);
  var pes = parseInt(document.getElementById("peso").value);
  //calculo do IMC
  var resultado = pes/(alt*alt);
  //arredondar resultado
  if(resultado < 18.0){
   
    document.getElementById("resultado").innerHTML = (resultado.toFixed(2) + " Baixo peso");
  }

  else if( resultado >= 18.5 && resultado < 24.9){
    
    document.getElementById("resultado").innerHTML = (resultado.toFixed(2) + " Peso normal");
  }

  else if (resultado >= 25 && resultado < 29.9){
    
    document.getElementById("resultado").innerHTML = (resultado.toFixed(2) + " Sobrepeso");
  }

  else if (resultado >= 30.0 && resultado < 34.9){
    
    document.getElementById("resultado").innerHTML = (resultado.toFixed(2) + " Obesidade Grau I");
  }

  else if (resultado >= 35.0 && resultado < 39.9){
    
    document.getElementById("resultado").innerHTML = (resultado.toFixed(2) + " Obesidade Grau II");
  }

  else if (resultado > 40){
    
    document.getElementById("resultado").innerHTML = (resultado.toFixed(2) + " Obesidade Grau III");
  }
}
