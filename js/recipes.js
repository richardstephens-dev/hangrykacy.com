const recipeApp = (function() {
    let jsonData = [];

    function slugify(text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-');        // Replace multiple - with single -
    }
    
    function groupRecipesByCategory(recipes) {
        const groupedRecipes = {};
    
        recipes.forEach(recipe => {
            const category = recipe["Category"];
            if (!groupedRecipes[category]) {
                groupedRecipes[category] = [];
            }
            groupedRecipes[category].push(recipe);
        });
    
        return groupedRecipes;
    }
    

    function updateHeader(isRecipePage) {
        if (isRecipePage) {
            $('#header-title-1').hide();
            $('#header-title-2').hide();
            $('#header-logo').hide();
        } else {
            $('#header-title-1').show();
            $('#header-title-2').show();
            $('#header-logo').show();
        }
    }

    function processRecipes() {
        const groupedRecipes = groupRecipesByCategory(jsonData);
        let contentHtml = '';
    
        for (const category in groupedRecipes) {
            contentHtml += '<h3>' + category + '</h3><ul>';
            groupedRecipes[category].forEach(recipe => {
                contentHtml += '<li><a href="javascript:void(0);" data-index="' + jsonData.indexOf(recipe) + '">' + recipe["Recipe Title"] + '</a></li>';
            });
            contentHtml += '</ul>';
        }
    
        $('#toc').html(contentHtml);
    }
    

    function displayRecipeDetails(index) {
        let recipe = jsonData[index];
    
        // Hide all other recipes
        $('#toc ul').hide();
    
        // Display the recipe details
        $('#heroimage').html('<img src="' + recipe["Photo"] + '" alt="Image of ' + recipe["Recipe Title"] + '">');
        $('#title').html('<h2>' + recipe["Recipe Title"] + '</h2>');
    
        // Process the ingredients to include checkboxes, subheadings, and ignore empty lines
        let ingredientsHtml = recipe["Ingredients"].split('\n').map((ingredient, idx) => {
            if (ingredient.endsWith(':')) {
                return `<li class="ingredient-subheading">${ingredient}</li>`; // Add class for subheadings
            } else {
                return `<li>
                            <label class="styled-checkbox">
                                <input type="checkbox" id="ingredient-${index}-${idx}">
                                <span>${ingredient}</span>
                            </label>
                        </li>`;
            }
        }).join('');    
        let stepsHtml = recipe["Steps"].split('\n').map(step => {
            if (step.endsWith(':')) {
                return `<li class="step-subheading">${step}</li>`;
            } else if (step.trim() !== '') {
                return `<li><p class="step">${step}</p></li>`;
            }
        }).join('');
        $('#title').show();
        $('#ingredients').show();
        $('#steps').show();
        $('#steps').html('<ul>' + stepsHtml + '</ul>');
        $('#ingredients').html('<h3>Ingredients</h3><ul>' + ingredientsHtml + '</ul>');
        $('#steps').html('<h3>Steps</h3><ul>' + stepsHtml + '</ul>');
        $('#details').html(`
        <button onclick="recipeApp.showRecipeList()" class="back-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
            </svg>
        </button>
    `);
        $('#toc h3').hide();
        updateHeader(true);
        const slug = slugify(recipe["Recipe Title"]);
        history.pushState({index: index}, recipe["Recipe Title"], '?recipe=' + slug);
    }
    
    
    

    function showRecipeList() {
        // Show the list of recipes again
        $('#toc ul').show();
        $('#toc h3').show();
        // Clear and hide the recipe details sections
        $('#title').empty().hide();
        $('#info').empty().hide();
        $('#ingredients').empty().hide();
        $('#steps').empty().hide();
        $('#notes').empty().hide();
        $('#substitutions').empty().hide();
    
        // Optional: Clear the 'details' section if you used it for the back button
        $('#details').empty();
        history.pushState(null, null, window.location.pathname);
        updateHeader(false);
    }
    

    function attachRecipeClickHandler() {
        $(document).off('click', '#toc ul li a').on('click', '#toc ul li a', function() {
            const index = $(this).data('index');
            recipeApp.displayRecipeDetails(index);
        });
    }

    // Call this once when the script loads
    attachRecipeClickHandler();

    return {
        processRecipes: processRecipes,
        displayRecipeDetails: displayRecipeDetails,
        showRecipeList: showRecipeList,
        setJsonData: function(data) {
            jsonData = data;
        }
    };
})();
