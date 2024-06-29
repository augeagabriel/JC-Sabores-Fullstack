

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const formulario = document.querySelector("form");

        formulario.addEventListener("submit", function(event) {
            event.preventDefault(); // Evitar el envío del formulario por defecto

            // Obtener los valores de los campos
            const nombre = document.getElementById("nombre").value;
            const correo = document.getElementById("correo").value;
            const telefono = document.getElementById("telefono").value;
            const motivo = document.getElementById("motivo").value;

            // Validar que los campos no estén vacíos
            if (nombre.trim() === '' || correo.trim() === '' || telefono.trim() === '' || motivo === 'default') {
                alert("Por favor, completa todos los campos.");
                return false; 
            }

            // Validar el formato del correo electrónico
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(correo)) {
                alert("Por favor, ingresa un correo electrónico válido.");
                return false; 
            }

            // Validar el formato del número de teléfono
            const telefonoRegex = /^\d+$/;
            if (!telefonoRegex.test(telefono)) {
                alert("Por favor, ingresa un número de teléfono válido.");
                return false; 
            }

            // Si todas las validaciones pasan, enviar el formulario
            this.submit();
        });
    });
</script>
