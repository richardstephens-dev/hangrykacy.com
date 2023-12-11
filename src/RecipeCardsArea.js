import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import RecipeCard from './RecipeCard';

const RecipeCardsArea = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('https://hangry-kacy-google-sheets.richardstephens-dev.workers.dev/')
            .then(response => response.json())
            .then(data => {
                // Assuming 'data' is an array of recipe objects with correct keys
                const processedRecipes = data;
                setRecipes(processedRecipes);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <Grid container spacing={3} style={{ padding: '2em' }}>
            {recipes.map((recipe, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <RecipeCard {...recipe} />
                </Grid>
            ))}
        </Grid>
    );
};

export default RecipeCardsArea;
