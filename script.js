document.addEventListener('DOMContentLoaded', function () {
    const clientForm = document.getElementById('client-form');
    const messageDiv = document.getElementById('message');

    clientForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const direccion = document.getElementById('direccion').value;

        try {
            const response = await fetch('/client', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: nombre,
                    direccion: direccion
                })
            });

            if (response.ok) {
                const data = await response.json();
                messageDiv.textContent = `Cliente creado con ID: ${data.id}`;
                // Puedes redirigir al usuario a otra página o realizar otras acciones después de crear el cliente.
            } else {
                messageDiv.textContent = 'Error al crear el cliente.';
            }
        } catch (error) {
            console.error('Error al crear el cliente:', error);
            messageDiv.textContent = 'Error de conexión.';
        }
    });
});
