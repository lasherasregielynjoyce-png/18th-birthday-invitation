// ========== ENVELOPE OPENING FUNCTIONALITY ==========
// Get the envelope element
const envelope = document.getElementById('envelope');
const envelopeContainer = document.getElementById('envelopeContainer');
const cardsContainer = document.getElementById('cardsContainer');

// Add click event to open envelope
if (envelope) {
    envelope.addEventListener('click', function() {
        console.log('Envelope clicked!');
        
        // Add the 'open' class to trigger the CSS animation
        envelope.classList.add('open');
        
        // After the flap opens (0.6s), hide the envelope and show the cards
        setTimeout(function() {
            console.log('Showing cards...');
            envelopeContainer.style.display = 'none';
            cardsContainer.style.display = 'flex';
            
            // Make sure the main card is active
            showCard('card-main');
        }, 600);
    });
}

// ========== CARD NAVIGATION ==========
// Function to show a specific card and hide others
function showCard(cardId) {
    console.log('Showing card:', cardId);
    
    // Get all cards
    const cards = document.querySelectorAll('.card');
    
    // Loop through all cards
    cards.forEach(function(card) {
        // Remove 'active' class from all cards (hide them)
        card.classList.remove('active');
    });
    
    // Add 'active' class to the selected card (show it)
    const selectedCard = document.getElementById(cardId);
    if (selectedCard) {
        selectedCard.classList.add('active');
        console.log('Card activated:', cardId);
    } else {
        console.error('Card not found:', cardId);
    }
}

// ========== CLOSE INVITATION ==========
// Function to close the invitation and go back to envelope
function closeInvitation() {
    console.log('Closing invitation...');
    
    // Remove the 'open' class from envelope
    envelope.classList.remove('open');
    
    // Hide cards and show envelope again
    cardsContainer.style.display = 'none';
    envelopeContainer.style.display = 'flex';
}

// ========== KEYBOARD NAVIGATION ==========
// Press 'Escape' to close the invitation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // Only close if cards are visible
        if (cardsContainer.style.display !== 'none') {
            closeInvitation();
        }
    }
});

// ========== INITIALIZATION ==========
window.addEventListener('load', function() {
    console.log('🎉 Invitation website loaded! Click the envelope to begin.');
});
