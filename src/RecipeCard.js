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
                style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: 'inherit', border: 'inherit' }}
            />}
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: theme.typography.primary.fontFamily, fontSize: {xs: '7vw', sm: '2.5vw', md: '1.5vw', lg: '1.75vw'}}}>
                        {title}
                    </Typography>
                    <Grid container spacing={1}>
                        {infoItems.map((item, index) => (
                            <React.Fragment key={index}>
                                <Grid item xs={2} sm={2} md={2} lg={2}>
                                    <img src={item.icon} alt={item.label} style={{ width: '100%' }} />
                                </Grid>
                                <Grid item xs={10} sm={10} md={10} lg={4} container direction="column" justifyContent="center">
                                    <Typography variant="body2" sx={{ fontFamily: theme.typography.secondary.fontFamily }}>
                                        {item.label}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontFamily: theme.typography.secondary.fontFamily }}>
                                        {item.detail}
                                    </Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
        </StyledButton>
    );
};

export default RecipeCard;
