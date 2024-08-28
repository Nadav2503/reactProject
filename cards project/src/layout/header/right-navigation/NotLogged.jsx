import React, { useState } from 'react';
import { Box, IconButton, Avatar, Tooltip, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import ROUTES from '../../../routes/routesModel';

export default function NotLogged() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <Tooltip title="Open menu">
                <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
                    <Avatar alt="avatar" src="/images/avatar.png" />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                PaperProps={{
                    sx: {
                        width: 200,
                        maxWidth: '95%',
                    },
                }}
            >
                <MenuItem component={Link} to={ROUTES.SIGNUP} onClick={handleMenuClose}>
                    Signup
                </MenuItem>
                <MenuItem component={Link} to={ROUTES.LOGIN} onClick={handleMenuClose}>
                    Login
                </MenuItem>
            </Menu>
        </Box>
    );
}
