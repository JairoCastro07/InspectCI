/* header general */

function HeaderGeneral() {
    return `
        <div id="header">
            <div class="logo">
                <img src="img/Logo_2.jpg" alt="Inspect CI">
            </div>
            <h1>Bienvenido al Sistema</h1>
            <div class="menu">
                <button id="menu-btn" class="hidden">☰</button>
                <ul id="menu-dropdown" class="hidden">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Perfil</a></li>
                    <li><a href="#">Ajustes Generales</a></li>
                    <li><a href="#">Cronograma</a></li>
                    <li><a href="#" id="cerrar-sesion">Cerrar sesión</a></li>
                </ul>
            </div>
        </div>
    `;
}

/* // 🚀 Código que agrega la funcionalidad del menú desplegable
document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const menuDropdown = document.getElementById("menu-dropdown");

    if (menuBtn && menuDropdown) {
        menuBtn.addEventListener("click", function() {
            menuDropdown.classList.toggle("hidden");
        });
    }
}); */

document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const menuDropdown = document.getElementById("menu-dropdown");

    if (menuBtn && menuDropdown) {
        // Abrir o cerrar el menú al hacer clic en el botón
        menuBtn.addEventListener("click", function(event) {
            event.stopPropagation(); // Evita que el clic se propague al documento
            menuDropdown.classList.toggle("hidden");
        });

        // Cerrar el menú al hacer clic fuera de él
        document.addEventListener("click", function(event) {
            const isClickInsideMenu = menuDropdown.contains(event.target);
            const isClickOnMenuBtn = menuBtn.contains(event.target);

            if (!isClickInsideMenu && !isClickOnMenuBtn) {
                menuDropdown.classList.add("hidden");
            }
        });

        // Evitar que el menú se cierre al hacer clic dentro de él
        menuDropdown.addEventListener("click", function(event) {
            event.stopPropagation(); // Evita que el clic se propague al documento
        });

        document.getElementById('cerrar-sesion').addEventListener('click', () => {
            // console.log('Cerrando Sesión...');
            menuDropdown.classList.add("hidden");
            showScreen('login-form'); // Volver a la pantalla de login
        });
    }
});
