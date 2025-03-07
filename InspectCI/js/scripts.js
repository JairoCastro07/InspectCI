/* Comportamientos derivados del formulario de login */
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    // Obtener los valores de usuario y contraseña
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validar credenciales
    if (username === 'admin' && password === 'admin') {
        showScreen('adminScreen');
    } else if (username === 'inspector' && password === 'inspector') {
        showScreen('inspectorScreen');
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});



// Función para cerrar sesión y volver a la pantalla de inicio de sesión
function logout() {
    // Volver al login
    showScreen('loginScreen');
}
