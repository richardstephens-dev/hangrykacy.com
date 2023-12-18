import React, { useEffect, useState } from 'react';
import { Grid, useTheme } from '@mui/material';
import RecipeCard from './RecipeCard';

const RecipeCardsArea = ({ currentCategory }) => {
    const [recipes, setRecipes] = useState([]);
    const theme = useTheme();

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
        : recipes; // Use filtered recipes if a category is selected, otherwise all recipes.

    // If filteredRecipes is empty and currentCategory is not null, show no recipes
    const displayRecipes = filteredRecipes.length > 0 || !currentCategory ? filteredRecipes : [];

    // ...

    return (
        <Grid container spacing={3} sx={{ padding: '1em', backgroundColor: theme.palette.light.primary }}>
            {displayRecipes.map((recipe, index) => (
                <Grid item xs={12} sm={4} md={3} key={index}>
                    <RecipeCard {...recipe} />
                </Grid>
            ))}
        </Grid>
    );
};

export default RecipeCardsArea;
