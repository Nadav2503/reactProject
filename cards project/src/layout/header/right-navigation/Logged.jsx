import React from 'react';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import ROUTES from '../../../routes/routesModel';
import useUsers from '../../../users/hooks/useUsers';
import { useCurrentUser } from '../../../users/providers/UserProvider';
import useAnchor from '../hooks/useAnchor';
import { Menu, MenuItem } from '@mui/material';


const MenuItems = ({ user, handleLogout }) => [
    { label: 'Profile', onClick: () => window.location.href = `${ROUTES.USER_PROFILE}/${user._id}` },
    { label: 'Edit Profile', onClick: () => window.location.href = `${ROUTES.EDIT_USER}/${user._id}` },
    { label: 'Logout', onClick: handleLogout }
];

export default function Logged() {
    const { handleLogout } = useUsers();
    const { user } = useCurrentUser();
    const { anchorEl, open, openAnchor, closeAnchor } = useAnchor();

    return (
        <div>
            <Tooltip title="Open settings">
                <IconButton onClick={openAnchor} sx={{ p: 0, display: 'inline-flex' }}>
                    <Avatar alt="avatar" src="/images/avatar.png" />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={closeAnchor}
            >
                {user && MenuItems({ user, handleLogout }).map((item, index) => (
                    <MenuItem
                        key={index}
                        component={item.label === 'Logout' ? 'button' : Link}
                        to={item.label === 'Logout' ? undefined : item.onClick ? undefined : `${ROUTES.LOGIN}`}
                        onClick={item.onClick || closeAnchor}
                    >
                        {item.label}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
