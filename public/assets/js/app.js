/*Variables pagina 01Registro.html*/
var formRegistroTelefono = $("#form-registro-numero");
var inputTelefono = $("#registro-telefono");
var checkboxTerminos = $("#terminos");
var btnContinuarRegistro = $("#btn-continuar");
/*Terminan variables pagina 01Registro.html*/
localStorage.setItem('telefono', inputTelefono.val());

var cargarPagina = function (){
	$('.carousel.carousel-slider').carousel({fullWidth: true});
	checkboxTerminos.click(validarTelefonoCheckbox);
	inputTelefono.keyup(validarTelefonoCheckbox);
	formRegistroTelefono.submit(enviarTelefono);
};
var validarTelefonoCheckbox = function (){
	if(inputTelefono.val().length === 10 && checkboxTerminos.is(":checked")){
		btnContinuarRegistro.removeAttr("disabled");

	} else{
		btnContinuarRegistro.attr("disabled", true);
	}
};

var enviarTelefono = function(e){
	e.preventDefault();
	var numeroTelefonico = inputTelefono.val();
	$.post("http://localhost:3000/api/registerNumber", {
		"phone" : numeroTelefonico,
		"terms" : true
	}).then(function(respuesta){
		console.log(respuesta);
		alert(respuesta.data.code);
		location.href="02codigo.html"
	}).catch(function(error){
		console.log(error);
	})
};

var crearUsuario = function(e){
	e.preventDefault();
	if($nombreUsuario.val().length != 0 && $correoUsuario.val() != 0 && $contraseñaUsuario.val().length == 6){
		$botonCrearCuenta.removeAttr("disabled");

	}else{
		$botonCrearCuenta.attr('disabled',true);
	};
};
var enviarUsuario = function (e){
	var numeroTelefonico = inputTelefono.val();
	var nombre = nombreUsuario.val()
	var correo = correoUsuario.val()
	var contraseña = contraseñaUsuario.val()
	e.preventDefault();
	$.post("http://localhost:3000/api/createUser", {
		"phone" : numeroTelefonico,
		"name" : nombre,
		"email" : correo,
		"password" : contraseña
	}).then(function(respuesta){
		location.href = "usuario-exitoso.html"
		console.log(respuesta)
	}).catch(function(error){
		alert(error);
		$botonCrearCuentar.attr("disabled", true);

	})
}
$(document).ready(cargarPagina);