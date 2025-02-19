/* header general */

function HeaderGeneral() {
    return `
        <div id="header">
            <div class="logo">
                <img src="img/Logo_2.jpg" alt="Inspect CI">
            </div>
            <h1>Bienvenido al Sistema</h1>
            <div class="menu">
                <button id="menu-btn">☰</button>
                <ul id="menu-dropdown" class="hidden">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Perfil</a></li>
                    <li><a href="#">Ajustes Generales</a></li>
                    <li><a href="#">Cronograma</a></li>
                    <li><a href="#">Cerrar sesión</a></li>
                </ul>
            </div>
        </div>
    `;
}

// 🚀 Código que agrega la funcionalidad del menú desplegable
document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menu-btn");
    const menuDropdown = document.getElementById("menu-dropdown");

    if (menuBtn && menuDropdown) {
        menuBtn.addEventListener("click", function() {
            menuDropdown.classList.toggle("hidden");
        });
    }
});
