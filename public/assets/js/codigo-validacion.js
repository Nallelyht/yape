var segundos = 21;
var ceroseg='';
var conteo;

function cuentaAtras(){ 
	$("#reloj").html('Reintentar en '+'<img src="../assets/img/icons/clock.png" alt="clock"/>'+ '00'+':'+ceroseg+segundos);  
	segundos --;
		if(segundos<10){
			ceroseg=0;
		}
		if(segundos == 0){
		deterContero(conteo);
		location.href = "crear-usuario.html"
	}
	conteo = setTimeout(cuentaAtras,1000);
}

function deterContero(conteo){
	clearTimeout(conteo)
}
$(document).ready(cuentaAtras);
