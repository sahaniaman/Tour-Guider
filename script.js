// JavaScript for OpenAI chatbot

document.getElementById('send-button').addEventListener('click', async () => {
    const input = document.getElementById('chat-input').value;
    if (input) {
        addMessageToChat('You', input); // Display user input
        document.getElementById('chat-input').value = ''; // Clear input field
        const response = await getOpenAIResponse(input);
        addMessageToChat('Chatbot', response); // Display chatbot response
    }
});
