// Typing animation for the welcome message
const welcomeText = "Welcome back, Daoud";
const welcomeTextElement = document.getElementById("welcome-text");
let index = 0;

function typeWelcomeMessage() {
    if (index < welcomeText.length) {
        welcomeTextElement.textContent += welcomeText.charAt(index);
        index++;
        setTimeout(typeWelcomeMessage, 100); // Adjust typing speed here
    }
}

typeWelcomeMessage();

function selectMood(mood) {
    const moodResponse = document.getElementById('mood-response');
    moodResponse.textContent = `You selected: ${mood}! Reflect on why you feel this way.`;
}

function getAffirmation() {
    const affirmations = [
        "You are enough.",
        "You are capable of great things.",
        "You deserve happiness.",
        "You are stronger than you think.",
        "You are loved.",
        "Believe in yourself."
    ];
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    const affirmationResponse = document.getElementById('affirmation-response');
    affirmationResponse.textContent = affirmations[randomIndex];
}

function saveJournal() {
    const journalInput = document.getElementById('journal-input').value;
    const journalResponse = document.getElementById('journal-response');
    if (journalInput) {
        journalResponse.textContent = "Journal entry saved!";
        document.getElementById('journal-input').value = ''; // Clear the input
    } else {
        journalResponse.textContent = "Please enter a journal entry.";
    }
}
