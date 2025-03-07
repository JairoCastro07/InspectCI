/* comportamiento de mostrar u ocultar pantallas */


/* function showScreen(screenId) {
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
*/

function showScreen(screenId) {
    const screens = ['admin-screen', 'inspector-screen', 'login-form'];
    const menuBtn = document.getElementById('menu-btn'); // Obtener el botón del menú

    screens.forEach(id => {
        const screen = document.getElementById(id);
        if (id === screenId) {
            screen.classList.remove('hidden');
        } else {
            screen.classList.add('hidden');
        }
    });

    // Mostrar el botón del menú solo en las pantallas del admin y del inspector
    if (screenId === 'admin-screen' || screenId === 'inspector-screen') {
        if (menuBtn) menuBtn.classList.remove('hidden'); // Mostrar el botón del menú
    } else {
        if (menuBtn) menuBtn.classList.add('hidden'); // Ocultar el botón del menú
    }
}