import React from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ROUTES from '../../routes/routesModel';
import { useNavigate } from 'react-router-dom';

export default function AddNewCardButton() {
    const navigate = useNavigate();
    return (
        <Fab
            color="primary"
            aria-label="add"
            sx={{
                position: "fixed",
                bottom: 70,
                right: 16,
            }}
            onClick={() => {
                navigate(ROUTES.ADD_CARDS);
            }}
        >
            <AddIcon />
        </Fab>
    );
}