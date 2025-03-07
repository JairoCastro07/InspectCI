/* pantalla administrador */

function AdminScreen() {
    return `
        <h2>Pantalla de Administrador</h2>
        <p>Bienvenido, Administrador.</p>
        <div class="buttons-container">
            <button id="administrar-inspector">Administrar Inspector</button>
            <button id="repositorio-inspecciones">Repositorio de Inspecciones</button>
            <button id="informes-admin">Informes / Indicadores</button>
            <button id="opcion-adicional-admin">Opcion Adicional</button>
        </div>
    `;
}

// Lógica para manejar los botones
function setupAdminScreen() {
    document.getElementById('administrar-inspector').addEventListener('click', () => {
        console.log('Administrar Inspector');
        // administración de inspectores
    });

    document.getElementById('repositorio-inspecciones').addEventListener('click', () => {
        console.log('Repositorio de Inspecciones');
        // repositorio de inspecciones
    });

    document.getElementById('informes-admin').addEventListener('click', () => {
        console.log('Informes / Indicadores');
        // pantalla de informes
    });

/*     document.getElementById('cerrar-sesion-admin').addEventListener('click', () => {
        console.log('Cerrando Sesión...');
        showScreen('login-form'); // Volver a la pantalla de login
    }); */
}