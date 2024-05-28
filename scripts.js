// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const recipes = document.querySelectorAll('.recipe');

    recipes.forEach(recipe => {
        recipe.addEventListener('mouseenter', function() {
            recipe.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.3)';
        });

        recipe.addEventListener('mouseleave', function() {
            recipe.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        });
    });
});


