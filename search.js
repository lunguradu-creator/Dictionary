function searchDictionary() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let definitionDiv = document.getElementById('definition');
    if (dictionary[input]) {
        definitionDiv.innerHTML = `<strong>${input}:</strong> ${dictionary[input]}`;
    } else {
        definitionDiv.innerHTML = `<strong>${input}</strong> not found in the dictionary.`;
    }
}