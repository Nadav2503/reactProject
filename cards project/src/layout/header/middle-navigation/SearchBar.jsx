import React, { useState } from 'react';
import { Box, IconButton, TextField, InputAdornment, useMediaQuery, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('search') || '';
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleSearchChange = (event) => {
        const query = event.target.value;
        if (query) {
            navigate(`/cards?search=${encodeURIComponent(query)}`);
        } else {
            navigate('/cards');
        }
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isMobile && !isOpen && (
                <IconButton onClick={() => setIsOpen(true)} sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            )}

            <TextField
                variant="outlined"
                placeholder="Search cards..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setIsOpen(true)}
                onBlur={() => setIsOpen(false)}
                sx={{
                    display: (isOpen || !isMobile) ? 'block' : 'none',
                    width: '100%',
                    maxWidth: isMobile ? 'calc(100vw - 64px)' : '400px',
                    transition: 'width 0.3s',
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    endAdornment: isOpen && (
                        <InputAdornment position="end">
                            <IconButton onClick={() => setIsOpen(false)}>
                                <CloseIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
}
