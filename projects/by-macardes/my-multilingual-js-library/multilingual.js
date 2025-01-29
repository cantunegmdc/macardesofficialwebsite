// Function to handle language translation
function translateLanguage() {
    // Get all elements with data-lang-origin attribute
    const elements = document.querySelectorAll('[data-lang-origin]');

    // Loop through each element
    elements.forEach(element => {
        // Get the original language name
        const originLanguage = element.getAttribute('data-lang-origin');

        // Get the translation language name
        const translationLanguage = element.getAttribute('data-lang-translation');

        // Get the translation content
        const translation = element.getAttribute('data-translation');

        // Replace the content with the translation
        element.innerHTML = translation;

        // Add a tooltip to show the original and translation languages
        element.title = `${originLanguage} (${translationLanguage})`;
    });
}

// Call the translateLanguage function when the page is loaded
$(document).ready(function() {
    translateLanguage();
});