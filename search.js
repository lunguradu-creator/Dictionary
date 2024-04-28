function searchDictionary() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let definitionDiv = document.getElementById('definition');

    // Clear previous content
    definitionDiv.textContent = '';

    // Create a strong element for the input
    let strongElement = document.createElement('strong');
    strongElement.textContent = input;

    if (dictionary[input]) {
        // Append the strong element and the definition
        definitionDiv.appendChild(strongElement);
        definitionDiv.appendChild(document.createTextNode(`: ${dictionary[input]}`));
    } else {
        // Append the strong element and "not found" text
        definitionDiv.appendChild(strongElement);
        definitionDiv.appendChild(document.createTextNode(' not found in the dictionary.'));
    }
}
