/* comportamiento de mostrar u ocultar pantallas */
function showScreen(screenId) {
    const screens = ['admin-screen', 'inspector-screen', 'login-form'];
    screens.forEach(id => {
        const screen = document.getElementById(id);
        if (id === screenId) {
            screen.classList.remove('hidden');
        } else {
            screen.classList.add('hidden');
        }
    });
}