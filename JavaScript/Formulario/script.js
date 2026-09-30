const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputConfirmPassword = document.getElementById("confirm-password");
const form = document.getElementById("formulario");

function leerTexto(input) {

    return input.value.trim();
}




//Funciones Validadion

function validarNombre(nombre) {

    const nombre = leerTexto(inputNombre);



    if (nombre === "") {
        return "El nombre es obligatorio";
    }
    if (!/^[a-zA-Z]+$/.test(nombre)) {
        return "El nombre solo puede contener letras";
    }
    return "";

}
form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const error = validarNombre(leerTexto(inputNombre));
  console.log(error || "Nombre correcto");
})