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

function addMessageToChat(sender, message) {
    const chatOutput = document.getElementById('chat-output');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatOutput.appendChild(messageDiv);
}

// Function to get the response from OpenAI API
async function getOpenAIResponse(prompt) {
    const apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your actual API key
    const apiUrl = 'https://api.openai.com/v1/completions';

    const requestBody = {
        model: 'text-davinci-003', // GPT-3 model
        prompt: prompt,
        max_tokens: 150,
        temperature: 0.7,
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify(requestBody),
        });

        const data = await response.json();
        return data.choices[0].text.trim(); // Get the chatbot's response
    } catch (error) {
        console.error('Error:', error);
        return 'Sorry, I am having trouble responding right now.';
    }
}
