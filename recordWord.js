function recordWord() {
    let newWord = document.getElementById('newWord').value.toLowerCase();
    let newDefinition = document.getElementById('newDefinition').value;
    let messageDiv = document.getElementById('message');

    if (newWord && newDefinition) {
        dictionary[newWord] = newDefinition;
        messageDiv.textContent = `Word "${newWord}" recorded successfully.`;
        messageDiv.style.display = 'block'; // Make sure the message is visible
        messageDiv.style.color = 'white'; // Set text color to white
        messageDiv.style.backgroundColor = 'green'; // Set background to green for success

        // Clear input fields
        document.getElementById('newWord').value = '';
        document.getElementById('newDefinition').value = '';
        setTimeout(() => { messageDiv.style.display = 'none'; }, 3000); // Hide message after 3 seconds
    } else {
        messageDiv.textContent = 'Please enter both word and definition.';
        messageDiv.style.display = 'block'; // Make sure the message is visible
        messageDiv.style.color = 'white'; // Set text color to white
        messageDiv.style.backgroundColor = 'red'; // Set background to red for errors
        setTimeout(() => { messageDiv.style.display = 'none'; }, 3000); // Hide message after 3 seconds
    }
}
