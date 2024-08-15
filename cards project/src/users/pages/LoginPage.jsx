import React from 'react';
import { Button, Container, TextField } from '@mui/material';
import loginSchema from '../models/loginSchema';
import initialLoginForm from '../helpers/initialForms/initialLoginForm';
import { Navigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import useForm from '../../froms/hooks/useForm';

export default function LoginPage() {
    const { data, errors, handleChange, validateForm } = useForm(loginSchema, initialLoginForm);
    const user = null;
    if (user) return <Navigate to={ROUTES.ROOT} replace />;

    return (
        <Container
            sx={{
                pt: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '400px',
                margin: 'auto',
            }}
        >
            <TextField
                label="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                error={Boolean(errors.email)}
                helperText={errors.email}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Password"
                name="password"
                type="password"
                onChange={handleChange}
                value={data.password}
                error={Boolean(errors.password)}
                helperText={errors.password}
                fullWidth
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    if (validateForm()) {
                    }
                }}
                disabled={!validateForm()}
                fullWidth
            >
                Login
            </Button>
        </Container>
    );
}
