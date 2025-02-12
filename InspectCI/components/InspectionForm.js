/* Formulario de Inspección */
document.addEventListener('DOMContentLoaded', () => {
    function InspectionForm() {
        return `
            <div id="inspection-modal" class="modal">
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h2>Formulario de Inspección</h2>
                    <form id="inspection-form">
                        <label for="inspection-date">Fecha de Inspección:</label>
                        <input type="date" id="inspection-date" required>

                        <label for="inspection-type">Tipo de Inspección:</label>
                        <select id="inspection-type" required>
                            <option value="rutina">Rutina</option>
                            <option value="especial">Especial</option>
                        </select>

                        <label for="inspection-notes">Observaciones:</label>
                        <textarea id="inspection-notes" rows="4" required></textarea>

                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        `;
    }

    // Lógica para manejar el modal y el formulario
    function setupInspectionForm() {
        const modal = document.getElementById('inspection-modal');
        const closeModal = document.querySelector('.close-modal');

        document.getElementById('formulario-inspeccion').addEventListener('click', () => {
            modal.style.display = 'block';
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        document.getElementById('inspection-form').addEventListener('submit', (event) => {
            event.preventDefault();
            const date = document.getElementById('inspection-date').value;
            const type = document.getElementById('inspection-type').value;
            const notes = document.getElementById('inspection-notes').value;

            console.log('Fecha:', date);
            console.log('Tipo:', type);
            console.log('Observaciones:', notes);

            alert('Formulario enviado correctamente');
            modal.style.display = 'none'; 
        });
    }

    window.InspectionForm = InspectionForm;
    window.setupInspectionForm = setupInspectionForm;
});