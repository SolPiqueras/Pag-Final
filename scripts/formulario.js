const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');



const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	dni: /^\d{8}(?:[-\s]\d{4})?$/, // Solo Numeros y longitud 8
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{10,13}$/ // 10 a 13 numeros.
}

const validarFormulario = (e) => {
	switch(e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, e.target.name);
		break;
		case "apellido":
			validarCampo(expresiones.nombre, e.target, e.target.name);
		break;
		case "dni":
			validarCampo(expresiones.dni, e.target, e.target.name);
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, e.target.name);
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, e.target.name);
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)) {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	controlarCaracteres();
});

function calcularEdad() {
	var fecha = document.getElementById("fecha").value
    var hoy = new Date();
	var cumpleanos = new Date(fecha);
	console.log(hoy.getFullYear);
	console.log(fecha.getFullYear);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();

	if(edad >= 18){
		console.log('Menor de edad')
        return true;
    }else{
        console.log('Menor de edad')
		document.getElementById('grupo__fecha').classList.add('formulario__grupo-incorrecto');
		document.getElementById('grupo__fecha').classList.remove('formulario__grupo-correcto');
		document.querySelector('#grupo__fecha i').classList.add('fa-times-circle');
		document.querySelector('#grupo__fecha i').classList.remove('fa-check-circle');
		document.querySelector('#grupo__fecha .formulario__input-error').classList.add('formulario__input-error-activo');
        return false;
    }
}