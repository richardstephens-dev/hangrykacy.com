import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import RecipeCard from './RecipeCard';

const RecipeCardsArea = ({ currentCategory }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('https://hangry-kacy-google-sheets.richardstephens-dev.workers.dev/')
            .then(response => response.json())
            .then(data => {
                setRecipes(data); // Set the fetched recipes
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    // Filter recipes to only include those that match the current category
// ...

const filteredRecipes = currentCategory
    ? recipes.filter(recipe => recipe.Category === currentCategory)
    : recipes; // Default to all recipes if no category is selected

// If filteredRecipes is empty and currentCategory is not null, show all recipes
const displayRecipes = filteredRecipes.length > 0 || !currentCategory ? filteredRecipes : recipes;

// ...

    return (
        <Grid container spacing={3} style={{ padding: '2em' }}>
            {displayRecipes.map((recipe, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <RecipeCard {...recipe} />
                </Grid>
            ))}
        </Grid>
    );
};

export default RecipeCardsArea;
