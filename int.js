document.getElementById("b_modo").addEventListener('click', function(){
    if(document.getElementById('estilo').getAttribute('href') == "css/fuentetime.css" ){
        document.getElementById('estilo').setAttribute('href', "css/Fuentearial.css");
        document.getElementById('b_modo').innerHTML = 'Cambiar Fuente';
        console.log("Se cambio Tipo de Fuente");
    }else{
        document.getElementById('estilo').setAttribute('href', "css/fuentetime.css");
        document.getElementById('b_modo').innerHTML = 'Cambiar Fuente';
        console.log("Se cambio Tipo de Fuente.");
    }
});
document.getElementById("myBtn").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}