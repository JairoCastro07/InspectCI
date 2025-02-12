/* formulario de inicio de sesión */

function LoginForm() {
    return `
        <form id="login-form">
            <input type="text" id="username" placeholder="Usuario" required>
            <input type="password" id="password" placeholder="Contraseña" required>
            <button type="button" id="login-button">Iniciar Sesión</button>
        </form>
    `;
}