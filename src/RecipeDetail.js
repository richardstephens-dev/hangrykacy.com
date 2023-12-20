// RecipeDetail.js
import React from 'react';
import { Typography, Paper, Box, List, ListItem, Grid } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { StyledCheckbox } from './StyledComponents';

const RecipeDetail = () => {
    const theme = useTheme();
    const location = useLocation();
    const navigate = useNavigate();
    const recipe = location.state?.recipe;

    if (!recipe) {
        return <div>Loading...</div>;
    }

    const processIngredients = (ingredients) => {
        return ingredients.replace(/\n\n/g, '\n').split('\n').map(ingredient => {
            // Check if the ingredient contains a colon, indicating a subheading
            if (ingredient.includes(':')) {
                return { type: 'subheading', content: ingredient };
            } else {
                return { type: 'ingredient', content: ingredient };
            }
        });
    };

    const ingredientsArray = processIngredients(recipe.ingredients);

    const processSteps = (steps) => {
        return steps.replace(/\n\n/g, '\n').split('\n').map(step => {
            // Check if the step contains a colon, indicating a subheading
            if (step.includes(':')) {
                return { type: 'subheading', content: step };
            } else {
                // Remove any leading numbers and periods from the step
                return { type: 'step', content: step.replace(/^\d+\.\s*/, '') };
            }
        });
    };

    const stepsArray = processSteps(recipe.steps);

    return (
        <Paper sx={{
            padding: '2em',
            margin: '2em',
            backgroundColor: theme.palette.mid.primary,
            border: `2px solid ${theme.palette.dark.primary}`
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ marginTop: '2em' }}>
                        <Typography variant="h6" sx={{ fontFamily: theme.typography.primary.fontFamily, fontWeight: 800 }}>Ingredients:</Typography>
                        <Box>
                            {ingredientsArray.map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginTop: item.type === 'subheading' ? 1 : 0 }}>
                                    {item.type === 'subheading' ? (
                                        <Typography variant="subtitle1" sx={{ fontFamily: theme.typography.secondary.fontFamily, fontWeight: 'bold' }}>
                                            {item.content}
                                        </Typography>
                                    ) : (<StyledCheckbox theme={theme}>
                                        <input class="material-symbols-outlined" type="checkbox" id={`checkbox-${index}`} />
                                        <span>{item.content}</span>
                                    </StyledCheckbox>
                                    )}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ marginTop: '2em' }}>
                        <Typography variant="h6" sx={{ fontFamily: theme.typography.primary.fontFamily, fontWeight: 800 }}>Directions:</Typography>
                        <List>
                            {stepsArray.map((item, index) => (
                                <ListItem key={index}>
                                    {item.type === 'subheading' ? (
                                        <Typography variant="subtitle1" sx={{ fontFamily: theme.typography.secondary.fontFamily, fontWeight: 'bold' }}>
                                            {item.content}
                                        </Typography>
                                    ) : (
                                        <Typography variant="body1" sx={{ fontFamily: theme.typography.secondary.fontFamily }}>
                                            {`${index + 1}. ${item.content}`}
                                        </Typography>
                                    )}
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default RecipeDetail;
