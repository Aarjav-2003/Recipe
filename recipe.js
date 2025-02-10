// recipe.js

// Recipe data
const recipes = {
    1: {
        title: "Creamy Alfredo Pasta",
        description: "To make this Creamy Alfredo Pasta, you'll need butter, garlic, heavy cream, Parmesan cheese, and your favorite pasta. Cook the pasta as per the instructions. In a pan, melt butter, add minced garlic, and sauté. Add heavy cream and let it simmer. Stir in the Parmesan cheese until the sauce is smooth. Toss the cooked pasta in the sauce and serve hot."
    },
    2: {
        title: "Margherita Pizza",
        description: "For this classic Margherita Pizza, you'll need pizza dough, tomato sauce, fresh mozzarella cheese, and basil leaves. Preheat your oven. Roll out the pizza dough, spread the tomato sauce evenly, and top it with slices of mozzarella cheese. Bake until the crust is golden and the cheese is melted. Garnish with fresh basil leaves before serving."
    },
    3: {
        title: "Caesar Salad",
        description: "This Caesar Salad requires Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing. Chop the Romaine lettuce and toss it with croutons and grated Parmesan cheese. Drizzle the Caesar dressing over the salad and mix well. Top with extra Parmesan and serve immediately."
    }
};

// Get elements from the DOM
const modal = document.getElementById("recipe-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.querySelector(".close");

// Function to open the modal and display recipe details
function openModal(recipeId) {
    modalTitle.textContent = recipes[recipeId].title;
    modalDescription.textContent = recipes[recipeId].description;
    modal.style.display = "block";
}

// Close the modal when the 'x' is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicked outside the content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Attach event listeners to the buttons
document.querySelectorAll('.view-recipe').forEach(button => {
    button.addEventListener('click', function() {
        const recipeId = this.getAttribute('data-recipe');
        openModal(recipeId);
    });
});
