// Typing animation for the welcome message
// 

//typeWelcomeMessage();

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
    // Load existing entries from localStorage
    let journalEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];

    if (!journalEntries) {
        console.warn("Element with id 'journal-response' not found.");
        return; // Exit the function if the element does not exist
    }
    
    const smile1 = document.getElementById('smile1').value;
    const smile2 = document.getElementById('smile2').value;
    const smile3 = document.getElementById('smile3').value;
    const journalResponse = document.getElementById('journal-response');

    // Validate inputs
    if (!smile1 || !smile2 || !smile3) {
        journalResponse.textContent = "Please fill in all three things that made you smile.";
        return;
    }

    // Save the response to the array
    journalEntries.push({ smile1, smile2, smile3 });
    //journalResponse.textContent = "Journal entry saved!";
    document.getElementById('smile1').value = '';
    document.getElementById('smile2').value = '';
    document.getElementById('smile3').value = '';

    // Save the array to localStorage for persistence
    localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
}
