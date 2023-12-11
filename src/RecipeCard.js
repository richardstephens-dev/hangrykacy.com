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
    const infoItems = [
        { label: 'Prep Time', detail: prepTime, icon: '/prep_time.svg' },
        { label: 'Cook Time', detail: cookTime, icon: '/cook_time.svg' },
        { label: 'Total Time', detail: totalTime, icon: '/total_time.svg' },
        { label: 'Servings', detail: servings, icon: '/servings.svg' },
    ];

    return (
        <Card sx={{
            maxWidth: 345,
            fontFamily: 'Nunito, sans-serif',
            backgroundColor: 'var(--background-color)',
            color: 'var(--text-color)',
            margin: '1em',
            border: '1px solid var(--main-color)',
        }}>
            <CardActionArea>
                {imageUrl && <CardMedia component="img" height="140" image={imageUrl} alt={title} />}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: 'Imbue, serif' }}>
                        {title}
                    </Typography>
                    {infoItems.map((item, index) => (
                        <Grid container key={index} alignItems="center" spacing={1}>
                            <Grid item xs={2}>
                                <img src={item.icon} alt={item.label} style={{ width: '100%' }} />
                            </Grid>
                            <Grid item xs={10} container>
                                <Grid item xs={12}>
                                    <Typography variant="body2" sx={{ fontFamily: 'Nunito, sans-serif' }}>
                                        {item.label}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2" sx={{ fontFamily: 'Nunito, sans-serif' }}>
                                        {item.detail}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default RecipeCard;
