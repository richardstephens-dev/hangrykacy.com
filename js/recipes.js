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
            $('#source').show();
            $('#substitutions').hide();
            $('#recipe-info').show();
        } else {
            $('#header-title-1').show();
            $('#header-title-2').show();
            $('#header-logo').show();
            $('#source').hide();
            $('#substitutions').show();
            $('#recipe-info').hide();
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
        $('#title').html('<h2>' + recipe["Recipe Title"] + '</h2>');
        let recipeInfoHtml = `
        <div id="prep-time" class="info-item">
            <img class="icon" src="images/prep_time.svg" />
            <span class="info-label">Prep Time:</span>
            <span class="info-data">${recipe["Prep Time"] || 'N/A'}</span>
        </div>
        <div id="cook-time" class="info-item">
        <img class="icon" src="images/cook_time.svg" />
        <span class="info-label">Cook Time:</span>
            <span class="info-data">${recipe["Cook Time"] || 'N/A'}</span>
        </div>
        <div id="total-time" class="info-item">
        <img class="icon" src="images/total_time.svg" />
        <span class="info-label">Total Time:</span>
            <span class="info-data">${recipe["Total Time"] || 'N/A'}</span>
        </div>
        <div id="servings" class="info-item">
        <img class="icon" src="images/servings.svg" />
        <span class="info-label">Servings:</span>
            <span class="info-data">${recipe["Servings"] || 'N/A'}</span>
        </div>
    `;
    $('#recipe-info').html(recipeInfoHtml).show();
        let ingredientsHtml = recipe["Ingredients"].split('\n').map((ingredient, idx) => {
            if (ingredient.trim() === '') {
                return ''; // Skip empty lines
            } else if (ingredient.endsWith(':')) {
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

        if (recipe["Substitutions"] && recipe["Substitutions"].trim() !== '') {
            let substitutionsHtml = `<h3>Substitutions</h3><p>${recipe["Substitutions"]}</p>`;
            $('#substitutions').html(substitutionsHtml).show();
        } else {
            $('#substitutions').empty().hide();
        }

        if (recipe["Source"] && recipe["Source"].trim() !== '') {
            let sourceHtml = `<h3><a href="${recipe["Source"]}" target="_blank">Recipe Source</a></h3>`;
            $('#source').html(sourceHtml).show();
        } else {
            $('#source').empty().hide();
        }

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
        $('#recipe-info').empty().hide();
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
