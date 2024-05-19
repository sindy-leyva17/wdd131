document.addEventListener('DOMContentLoaded', () => {
    // Set the current year in the footer
    const currentYearElement = document.getElementById('currentyear');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    // Set the last modified date in the footer
    const lastModifiedElement = document.getElementById('lastModified');
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = `Last Modification: ${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;

    // Toggle hamburger menu
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    
    hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
});
