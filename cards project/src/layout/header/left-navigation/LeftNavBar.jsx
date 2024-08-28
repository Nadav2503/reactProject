import React, { useState } from 'react';
import { Box, IconButton, Menu, MenuItem, Divider, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ROUTES from '../../../routes/routesModel';
import Logo from '../logo/Logo';
import LogoIcon from '../logo/LogoIcon';
import { useCurrentUser } from '../../../users/providers/UserProvider';
import { useNavigate } from 'react-router-dom';

export default function LeftNavBar() {
    const { user } = useCurrentUser();
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = (to) => {
        navigate(to);
        handleMenuClose();
    };

    return (
        <Box>
            <Logo />
            <LogoIcon />
            <IconButton onClick={handleMenuOpen} sx={{ ml: 2 }}>
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                    sx: {
                        width: 200,
                        maxWidth: '95%',
                    },
                }}
            >
                <MenuItem onClick={() => handleNavigate(ROUTES.ABOUT)}>About</MenuItem>
                <MenuItem onClick={() => handleNavigate(ROUTES.CARDS)}>Cards</MenuItem>
                {user && (
                    <>
                        {user.isAdmin || user.isBusiness ? (
                            <MenuItem onClick={() => handleNavigate(ROUTES.FAV_CARDS)}>Favorites</MenuItem>
                        ) : null}
                        {user.isBusiness && (
                            <MenuItem onClick={() => handleNavigate(ROUTES.MY_CARDS)}>My Cards</MenuItem>
                        )}
                    </>
                )}
                <Divider />
            </Menu>
        </Box>
    );
}
