document.addEventListener('DOMContentLoaded', function() {
    fetch('https://hangry-kacy-google-sheets.richardstephens-dev.workers.dev/')
        .then(response => response.json())
        .then(data => {
            recipeApp.setJsonData(data);
            recipeApp.processRecipes();

            const params = new URLSearchParams(window.location.search);
            const recipeSlug = params.get('recipe');
            if (recipeSlug) {
                const recipeIndex = jsonData.findIndex(recipe => slugify(recipe["Recipe Title"]) === recipeSlug);
                if (recipeIndex >= 0) {
                    recipeApp.displayRecipeDetails(recipeIndex);
                }
            }
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });

    window.onpopstate = function(event) {
        if (event.state && event.state.index !== undefined) {
            recipeApp.displayRecipeDetails(event.state.index);
        } else {
            recipeApp.showRecipeList();
        }
    };
});