/* Pantalla inspector */
function InspectorScreen() {
    return `
        <h2>Pantalla de Inspector</h2>
        <p>Bienvenido, Inspector.</p>
        <div class="buttons-container">
            <button id="formulario-inspeccion">Formulario de Inspección</button>
            <button id="reporte-novedad">Reporte Rápido de Novedad</button>
            <button id="informes">Informes / Indicadores</button>
            <button id="cerrar-sesion">Cerrar Sesión</button>
        </div>
         ${InspectionForm()} <!-- Incluir el formulario de inspección -->
    `;
}

// Lógica para manejar los botones
function setupInspectorScreen() {
    document.getElementById('formulario-inspeccion').addEventListener('click', () => {
        console.log('Formulario de Inspección');
        // formulario o mostrar un modal
    });

    document.getElementById('reporte-novedad').addEventListener('click', () => {
        console.log('Reporte Rápido de Novedad');
        // formulario de reporte rápido
    });

    document.getElementById('informes').addEventListener('click', () => {
        console.log('Informes / Indicadores');
        // pantalla de informes
    });

    document.getElementById('cerrar-sesion').addEventListener('click', () => {
        console.log('Cerrando Sesión...');
        showScreen('login-form'); // Volver a la pantalla de login
    });
}