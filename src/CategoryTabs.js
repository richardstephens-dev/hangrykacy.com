import React, { useState } from 'react';
import { Tabs, Tab, Box, useTheme } from '@mui/material';
const tabCategories = ["Breakfast", "Appetizers", "Entrees", "Sides", "Desserts", "Drinks", "James"];

const CategoryTabs = ({ onCategoryChange }) => {
    const [value, setValue] = useState(false);
    const theme = useTheme(); // Access the theme
    const handleChange = (event, newValue) => {
        setValue(newValue);
        onCategoryChange(tabCategories[newValue]);
    };

    return (
        <Box sx={{ 
                display: 'flex',
                borderColor: 'divider',
                backgroundColor: theme.palette.light.primary, // Use theme color                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Tabs 
                value={value} 
                onChange={handleChange}
                variant="scrollable"  // Enable scrollable variant
                scrollButtons="auto"  // Show scroll buttons automatically
                allowScrollButtonsMobile
                sx={{
                    '.MuiTab-root': {
                        fontFamily: theme.typography.primary.fontFamily,
                        fontWeight: 600,
                        fontSize: 'larger',
                        color: theme.palette.black.primary,
                        textTransform: 'uppercase'
                    }
                }}>
                {tabCategories.map((category, index) => (
                    <Tab key={category} label={category} />
                ))}
            </Tabs>
        </Box>
    );
};

export default CategoryTabs;
