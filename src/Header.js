import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { StyledButton } from './StyledComponents';

const Header = () => {
    const theme = useTheme();
    const location = useLocation();
    const navigate = useNavigate();

    const isRecipePage = location.pathname.includes('/recipe/');

    const handleBackToRecipes = () => {
        navigate('/'); // Navigate back to the main page
    };

    return (
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" p={0.5} sx={{ backgroundColor: theme.palette.light.primary }}>
            {!isRecipePage &&
                <Typography variant="h4" sx={{ fontFamily: theme.typography.primary.fontFamily, color: theme.palette.black.main }}>
                    KACY IS
                </Typography>
            }
            <img src="/favicon.png" alt="logo" style={{ maxWidth: "100px", marginBottom: "10px" }} />
            {!isRecipePage &&
                <Typography variant="h4" sx={{ fontFamily: theme.typography.primary.fontFamily, color: theme.palette.black.main }}>
                    HANGRY!
                </Typography>
            }
            {isRecipePage &&
                <StyledButton theme={theme} onClick={handleBackToRecipes} variant="contained">
                    Browse All Recipes
                </StyledButton>
            }
        </Box>
    );
};

export default Header;
