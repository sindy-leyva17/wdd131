const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

// Obtener el año actual
const today = new Date();
const currentYearValue = today.getFullYear();

// Asignar el año actual al primer párrafo del footer junto con un texto
currentYear.textContent = `© ${currentYearValue} `;

// Función para obtener la fecha de última modificación del documento HTML
function getLastModified() {
    const lastModifiedValue = document.lastModified;
    return new Date(lastModifiedValue);
}

// Obtener la fecha de última modificación y mostrarla en el segundo párrafo del footer
window.onload = function() {
    const lastModifiedDate = getLastModified();
    const formattedLastModifiedDate = lastModifiedDate.toLocaleString();

    
    // Crear y mostrar la alerta de modificación en el segundo párrafo del footer
    const alertMessage = document.createElement("p");
    alertMessage.textContent = `Last modification: ${formattedLastModifiedDate}`;
    lastModified.appendChild(alertMessage);
};
