import React from 'react';
import { Typography, Grid, Paper, Button, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const RecipeDetail = () => {
    const theme = useTheme();
    const location = useLocation();
    const navigate = useNavigate();
    const recipe = location.state?.recipe;

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <Paper sx={{
            padding: '2em',
            margin: '2em',
            backgroundColor: theme.palette.mid.primary,
            border: `2px solid ${theme.palette.dark.primary}` // Corrected border property
        }}>
                        <Typography variant="h4" style={{ marginBottom: '1em' }}>{recipe.title}</Typography>
            <img src={recipe.imageUrl} alt={recipe.title} style={{ maxWidth: '100%', height: 'auto' }} />
            {/* Add more details here */}
            <Typography variant="body1">{recipe.ingredients}</Typography>
            {/* ... and so on for other details ... */}
            </Paper>
    );
};

export default RecipeDetail;
