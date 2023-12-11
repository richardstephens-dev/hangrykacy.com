import React from 'react';
import { Box, Typography } from '@mui/material';
const Header = () => {
    return (
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" p={0.5} style={{ backgroundColor: 'var(--background-color)' }}>
            <Typography variant="h4" style={{ fontFamily: 'Imbue, serif', color: 'var(--text-color)' }}>
                KACY IS
            </Typography>
            <img src="/favicon.png" alt="logo" style={{ maxWidth: "100px", marginBottom: "10px" }} />
            <Typography variant="h4" style={{ fontFamily: 'Imbue, serif', color: 'var(--text-color)' }}>
                HANGRY!
            </Typography>

        </Box>
    );
};


export default Header;
