import React from 'react';
import { Card, CardContent, Typography, CardMedia, CardActionArea, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import { useN, useNavigate } from 'react-router-dom';
import { StyledButton } from './StyledComponents';

const RecipeCard = ({
    "Recipe Title": title,
    "Photo": imageUrl,
    "Servings": servings,
    "Prep Time": prepTime,
    "Cook Time": cookTime,
    "Total Time": totalTime,
    "Ingredients": ingredients,
    "Substitutions": substitutions,
    "Steps": steps,
    "Source": source
}) => {
    const infoItems = [
        { label: 'Prep:', detail: prepTime, icon: '/prep_time.svg' },
        { label: 'Cook:', detail: cookTime, icon: '/cook_time.svg' },
        { label: 'Total:', detail: totalTime, icon: '/total_time.svg' },
        { label: 'Serves:', detail: servings, icon: '/servings.svg' },
    ];
    const navigate = useNavigate();
    const theme = useTheme();

    const handleCardClick = () => {
        navigate(`/recipe/${title.replaceAll(' ', '-')}`, {
            state: { recipe: { title, imageUrl, servings, prepTime, cookTime, totalTime, ingredients, substitutions, steps, source } }
        });
    };


    return (
        <StyledButton theme={theme} onClick={handleCardClick} sx={{
            maxWidth: 345
        }}>
            {imageUrl && <img
                src={imageUrl}
                alt={title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />}
            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: theme.typography.primary.fontFamily, fontSize: { xs: '7vw', sm: '2.5vw', md: '1.5vw', lg: '1.75vw' } }}>
                {title}
            </Typography>
        </StyledButton>
    );
};

export default RecipeCard;
