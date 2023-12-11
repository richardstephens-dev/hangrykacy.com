import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';

const CategoryTabs = () => {
    const [value, setValue] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ 
            display: 'flex',
            borderColor: 'divider',
            backgroundColor: 'var(--background-color)',
            alignItems: 'center',
            justifyContent: 'center'
            }}
            >
            <Tabs 
                value={value} 
                onChange={handleChange}
                variant="scrollable"  // Enable scrollable variant
                scrollButtons="auto"  // Show scroll buttons automatically
                allowScrollButtonsMobile
                    sx={{
                            '.MuiTab-root': {
                                fontFamily: 'Imbue, serif',  // Use your desired font
                                fontWeight: 600,
                                fontSize: 'larger',
                                color: 'var(--text-color)',
                                textTransform: 'uppercase'
                            }
                    }}>
                <Tab label="Breakfast" />
                <Tab label="Appetizers" />
                <Tab label="Entrees" />
                <Tab label="Sides" />
                <Tab label="Desserts" />
                <Tab label="Drinks" />
            </Tabs>
        </Box>
    );
};

export default CategoryTabs;
