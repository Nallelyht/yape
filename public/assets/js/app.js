var $boton = $('#btn-continuar');
var $registroTelefono = $('#numero-registro');
var $terminos = $('#terminos');


var cargarPagina = function () {
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$terminos.click(validarNumero);
	$registroTelefono.change(validarNumero);
;
};

var validarNumero = function() {
	
	if($registroTelefono.val().length === 10 && $terminos.is(":checked")){
		removerAtributo();
	}else {
			$boton.attr("disabled", true);
		};
};

var removerAtributo = function (){
	$boton.removeAttr("disabled");
};

$.post("http://localhost:3000/api/registerNumber", {
	"phone": $registroTelefono.val(),
	"terms": true
}).then(function(respuesta){
	console.log(respuesta);
}).catch(function(error){
	console.log(error);
})

$(document).ready(cargarPagina);

