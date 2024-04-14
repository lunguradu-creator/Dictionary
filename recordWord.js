function recordWord() {
    let newWord = document.getElementById('newWord').value.toLowerCase();
    let newDefinition = document.getElementById('newDefinition').value;
    if (newWord && newDefinition) {
        dictionary[newWord] = newDefinition;
        alert(`Word "${newWord}" Recorded successfully.`);
        // Clear input fields
        document.getElementById('newWord').value = '';
        document.getElementById('newDefinition').value = '';
    } else {
        alert('Please enter both word and definition.');
    }
}