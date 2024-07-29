
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
        michael: {
            name: "Chef Michael Lee",
            title: "Grill Master",
            description: "Chef Michael is an expert in grilling, delivering perfectly cooked meats with a smoky, savory flavor. He has won numerous awards for his exceptional grilling skills."
        },
        sarah: {
            name: "Chef Sarah Kim",
            title: "Vegetarian Chef",
            description: "Chef Sarah creates delicious and nutritious vegetarian dishes that are both healthy and flavorful."
        },
        robert: {
            name: "Chef Robert Davis",
            title: "Seafood Chef",
            description: "Chef Robert specializes in seafood, ensuring the freshest and most delicious catches are served to our guests."
        },
        linda: {
            name: "Chef Linda Harris",
            title: "Sushi Chef",
            description: "Chef Linda brings the art of sushi to our kitchen, crafting beautiful and flavorful sushi rolls and sashimi."
        },
        david: {
            name: "Chef David Wilson",
            title: "Chef de Partie",
            description: "Chef David is skilled in various culinary techniques, contributing to the overall excellence of our kitchen."
        }
    };

    const chefCard = document.getElementById(`chef-${chefId}`);
    const details = chefDetails[chefId];

    if (details) {
        const existingDetailsDiv = chefCard.querySelector('.chef-extra-details');
        if (existingDetailsDiv) {
            existingDetailsDiv.remove();
        }

        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('chef-extra-details');
        detailsDiv.innerHTML = `
            <h4>About ${details.name}</h4>
            <p>${details.description}</p>
        `;
        chefCard.appendChild(detailsDiv);
    }
}

