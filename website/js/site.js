document.addEventListener('DOMContentLoaded', () => {
    
    // --- Newsletter Form Submission Handling ---
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                alert(`Thank you for signing up with: ${emailInput.value}! Welcome to Wonder Play.`);
                emailInput.value = ''; // Reset field
            }
        });
    }

    // --- Interactive Micro-interactions ---
    // Update shopping bag count as a placeholder function when categories are clicked
    const categoryCards = document.querySelectorAll('.category-card');
    const cartBadge = document.querySelector('.cart-badge');
    let currentCartCount = 0;

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const categoryName = card.querySelector('.card-label').textContent;
            console.log(`Navigating to category: ${categoryName}`);
            
            // Subtle easter egg: increment cart items as an interaction demo
            currentCartCount++;
            if (cartBadge) {
                cartBadge.textContent = currentCartCount;
            }
        });
    });
});