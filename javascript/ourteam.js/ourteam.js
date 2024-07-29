// ourTeam.js

document.addEventListener('DOMContentLoaded', function() {
    const learnMoreButtons = document.querySelectorAll('.learn-more');

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const chefId = this.getAttribute('data-chef');
            loadChefDetails(chefId);
        });
    });
});

function loadChefDetails(chefId) {
    const chefDetails = {
        john: {
            name: "Chef John Doe",
            title: "Executive Chef",
            description: "Chef John has over 20 years of experience and has worked in top Michelin-starred restaurants around the world."
        },
        // Add details for other chefs
    };

    const chefCard = document.getElementById(`chef-${chefId}`);
    const details = chefDetails[chefId];

    if (details) {
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('chef-extra-details');
        detailsDiv.innerHTML = `
            <h4>About ${details.name}</h4>
            <p>${details.description}</p>
        `;
        chefCard.appendChild(detailsDiv);
    }
}
