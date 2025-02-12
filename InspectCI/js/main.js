document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const loginForm = document.getElementById('login-form');
    const adminScreen = document.getElementById('admin-screen');
    const inspectorScreen = document.getElementById('inspector-screen');

    // Render Header
    header.innerHTML = HeaderGeneral();

    // Render Login Form
    loginForm.innerHTML = LoginForm();

    // Handle Login
    document.getElementById('login-button').addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const user = authenticate(username, password);

        if (user) {
            if (user.role === 'admin') {
                adminScreen.innerHTML = AdminScreen();
                showScreen('admin-screen');
                setupAdminScreen(); 
            } else if (user.role === 'inspector') {
                inspectorScreen.innerHTML = InspectorScreen();
                showScreen('inspector-screen');
                setupInspectorScreen(); 
                setupInspectionForm();   
            }
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
});