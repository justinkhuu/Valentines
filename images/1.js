let selectedCards = [];

function selectCard(cardId) {
    // Add selected card to the array
    selectedCards.push(cardId);

    // Hide the card
    document.getElementById(`card${cardId}`).style.display = 'none';

    // Check if all cards are selected
    if (selectedCards.length === 3) {
        // All cards selected, proceed to next step
        showFinalCard();
    }
}

function hideCard(cardId) {
    // Hide the card
    document.getElementById(`card${cardId}`).style.display = 'none';

    // Display the next card if available
    const nextCardId = cardId < 3 ? cardId + 1 : 1;
    document.getElementById(`card${nextCardId}`).style.display = 'block';
}

function showFinalCard() {
    // Display the final card or perform other actions
    // For example:
    console.log("Final card:", selectedCards);
}
