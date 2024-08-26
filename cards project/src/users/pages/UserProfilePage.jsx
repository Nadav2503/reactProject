import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper, Grid, Divider } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import useUsers from '../hooks/useUsers';

export default function UserProfilePage() {
    const { user, isLoading, error, getUserById } = useUsers();
    const { id } = useParams();

    useEffect(() => {
        getUserById(id);
    }, [id, getUserById]);

    if (isLoading) return <Spinner />;
    if (error) return <Error errorMessage={error} />;
    if (!user) return <Error errorMessage="User not found" />;

    return (
        <Container sx={{ mt: 4 }}>
            <PageHeader
                title="User Profile"
                subtitle="Here you can find detailed information about the user"
                sx={{ mb: 4 }}
            />
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h5" component="div" gutterBottom>
                            {user.name}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                            {user.email}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body1" color="text.primary" gutterBottom>
                            <strong>Phone:</strong> {user.phone}
                        </Typography>
                        <Typography variant="body1" color="text.primary" gutterBottom>
                            <strong>Address:</strong> {user.address.city}, {user.address.street} {user.address.houseNumber}
                        </Typography>
                        <Typography variant="body1" color="text.primary">
                            <strong>User ID:</strong> {user.id}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body2" color="text.secondary">
                            This page provides detailed information about the user. You can view their contact details, address, and other relevant information.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
