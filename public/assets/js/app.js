var $botonContinuar = $('#btn-continuar');
var $registroTelefono = $('#numero-registro');
var $terminos = $('#terminos');
var $crearUsuario = $("#crear-usuario");
var $nombreUsuario = $("#nombre-usuario");
var $correoUsuario = $("#correo-usuario");
var $contraseñaUsuario = $("#contraseña-usuario");
var $botonCrearCuenta = $("#btn-crear-cuenta");


var cargarPagina = function () {
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	$('select').material_select();
	$terminos.click(validarNumero);
	$registroTelefono.change(validarNumero);
	$botonContinuar.click(enviarNumero);
	$crearUsuario.change(crearUsuario);
};

var validarNumero = function() {

	if($registroTelefono.val().length === 10 && $terminos.is(":checked")){
		removerAtributo();
		enviarNumero();
	}else {
		$botonContinuar.attr("disabled", true);
	};
};

var removerAtributo = function (){
	$botonContinuar.removeAttr("disabled");
};

var enviarNumero = function (e){
	$.post("http://localhost:3000/api/registerNumber", {
		"phone": $registroTelefono.val(),
		"terms": true
	}).then(function(respuesta){
		alert(respuesta.data.code);
		console.log(respuesta)
	}).catch(function(error){
		alert(error);
		$botonContinuar.attr("disabled", true);

	})
}
/*Crear Usuario*/
var crearUsuario = function(e){
	var regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
	console.log(regex.test($contraseñaUsuario.val()))
	e.preventDefault();
	if($nombreUsuario.val().length != 0 && regex.test($correoUsuario.val()) != 0 && $contraseñaUsuario.val().length == 6){
		$botonCrearCuenta.removeAttr("disabled");
	}else{
		$botonCrearCuenta.attr('disabled',true);
	};
};

$(document).ready(cargarPagina);

