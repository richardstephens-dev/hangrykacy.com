import React from 'react';
import { Card, CardContent, Typography, CardMedia, CardActionArea, Grid } from '@mui/material';

const RecipeCard = ({ 
    "Recipe Title": title, 
    "Photo": imageUrl, 
    "Servings": servings, 
    "Prep Time": prepTime, 
    "Cook Time": cookTime, 
    "Total Time": totalTime
}) => {
    return (
        <Card sx={{ 
            maxWidth: 345,
            fontFamily: 'Imbue, serif',
            backgroundColor: 'var(--background-color)',
            color: 'var(--text-color)',
            margin: '1em',
            border: '1px solid var(--main-color)',
        }}>
            <CardActionArea>
                {imageUrl && <CardMedia component="img" height="140" image={imageUrl} alt={title} />}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: 'Imbue, serif' }}>
                        {title}
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item container alignItems="center" xs={12}>
                            <Grid item xs={2}><img src="/prep_time.svg" alt="Prep Time" style={{ width: '100%' }} /></Grid>
                            <Grid item xs={10}><Typography>{prepTime}</Typography></Grid>
                        </Grid>
                        <Grid item container alignItems="center" xs={12}>
                            <Grid item xs={2}><img src="/cook_time.svg" alt="Cook Time" style={{ width: '100%' }} /></Grid>
                            <Grid item xs={10}><Typography>{cookTime}</Typography></Grid>
                        </Grid>
                        <Grid item container alignItems="center" xs={12}>
                            <Grid item xs={2}><img src="/total_time.svg" alt="Total Time" style={{ width: '100%' }} /></Grid>
                            <Grid item xs={10}><Typography>{totalTime}</Typography></Grid>
                        </Grid>
                        <Grid item container alignItems="center" xs={12}>
                            <Grid item xs={2}><img src="/servings.svg" alt="Servings" style={{ width: '100%' }} /></Grid>
                            <Grid item xs={10}><Typography>{servings}</Typography></Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default RecipeCard;
