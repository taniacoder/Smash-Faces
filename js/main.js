$(document).ready(function() {
  $(".comparador").click(funciona);  
}); 

function getInputValue(){
  var mensaje= $(".nombre").val();
  return mensaje;
}

$("#so").change(function(){
  var valor = $(this).val();
  pais = (valor==1) ? 1 : (valor ==2)? 2: 1;
  doit();

});
var pais = 0;
var random=0;
var numeros = [];

function rando(){
  var cant = (pais==1) ? (peru.length-1) : (mexico.length-1);
  var existe= true;
  do{
    var random = Math.round(Math.random()*(cant-1))+1;
    if(numeros.length > 0){
      var encontrar = numeros.filter(function(num){
        return num == random;
      })
      if(encontrar.length != 0 && numeros.length==pais.length){
        alert("¡Ganaste!");
        existe= false;
      }
      if(encontrar.length == 0 ){ 
          existe = false;
      }
      else {
        console.log("Esta foto se repite");
      }
    } else existe =false;
    if(! existe){
      numeros.push(random);
    }
    
  }while(existe);
  return random;
}
function foto(){
  var sr = (pais ==1 )? ("peru/"+peru[random].image) : ("mexico/"+mexico[random].image);
  return sr;
}
function doit(){
  random=rando();
  var src= foto();
  $('.foto').html("<img class='coder-img' src='fotos/"+src+"'>" );
}

function consultaName(){
  var nameConsulta="";
  nameConsulta= (pais==1)? peru[random].name : mexico[random].name ;
  return nameConsulta;
}

var k=0;
var c=5;
var j=0;
var con =0;
function funciona() {
  k++;
  if(getInputValue()===consultaName()){
    ganador();
    doit();
    k=0;
    c=5;
    con++;
    j+=5;
    $(".contador").html(j);
  } else if (k===5) {
    ganador();
    doit();
    alert("Se agotaron tus opciones");
    k=0;
    con++;
    c=5;
    j--;
    $(".contador").html(j);
  }else if(k<5){
    c--;
    alert("Tienes "+c+" opciones vuelve a intentar"); 
  }

}

function ganador(){
  if( con%numeros.length === 0){
    alert("El puntaje obtenido es "+j);
    k=0;
  }
}
