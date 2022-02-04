// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

const form = document.querySelector("#signup");

const NAME_REQUIRED = "Nombre es requerido";
const LNAME_REQUIRED = "Apellido es requerido";
const OPINION_REQUIRED = "No puede dejar la opinión en blanco";

form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
	let lnameValid = hasValue(form.elements["lname"], LNAME_REQUIRED);
    let opinionValid = hasValue(form.elements["opinion"], OPINION_REQUIRED);
	// if valid, submit the form.
	if (nameValid && lnameValid && opinionValid) {
		alert("Gracias por enviar un cuestionario!! \n Esta es la información que has enviado: \n Nombre: " + form.elements["name"].value + "\n Apellido: " + form.elements["lname"].value + "\n Género: " + form.elements["gender"].value + "\n Opinión: " + form.elements["opinion"].value);
	}
});