$(document).ready(function () {
    $("#contactForm").on("submit", function (event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    // Obtiene los valores de los campos
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    // Validar campos
    var isValid = true;
    if (!name) {
        $("#nameError").text("Por favor ingresa tu nombre.");
        isValid = false;
    } else {
        $("#nameError").text("");
    }
    if (!email) {
        $("#emailError").text("Por favor ingresa tu correo electrónico.");
        isValid = false;
    } else {
        $("#emailError").text("");
    }
    if (!message) {
        $("#messageError").text("Por favor ingresa un mensaje.");
        isValid = false;
    } else {
        $("#messageError").text("");
    }

    if (isValid) {
      // Crear un enlace mailto
        var mailtoLink =
        "mailto:omar.toledus@gmail.com" +
        "?subject=" +
        encodeURIComponent("Nuevo mensaje de contacto de " + name) +
        "&body=" +
        encodeURIComponent(
            "Nombre: " + name + "\nCorreo: " + email + "\nMensaje: " + message
        );

      // Redirigir a mailto
        window.location.href = mailtoLink;

      // Muestra mensaje de confirmación
        $("#mensajeConfirmacion").show();

      // Limpia el formulario
        $("#contactForm").trigger("reset");
    }
    });
});
