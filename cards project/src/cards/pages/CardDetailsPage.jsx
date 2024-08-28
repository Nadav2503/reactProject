import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CardMedia, Divider, Paper, Grid } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import Spinner from '../../components/Spinner';
import useCards from '../hooks/useCards';
import Error from '../../components/Error';

export default function CardDetailsPage() {
    const { card, isLoading, error, getCardById } = useCards();
    const { id } = useParams();
    useEffect(() => {
        getCardById(id);
    }, [id]);

    if (isLoading) return <Spinner />;
    if (error) return <Error errorMessage={error} />;
    if (!card) return <Error errorMessage="Card not found" />;

    return (
        <Container >
            <PageHeader
                title="Card Details"
                subtitle="Here you can find detailed information about the card"
                sx={{ mb: 4 }}
            />
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} md={6}>
                    <CardMedia
                        component="img"
                        sx={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 2 }}
                        image={card.image.url}
                        alt={card.image.alt}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Typography variant="h5" component="div" gutterBottom>
                            {card.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                            {card.subtitle}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body1" color="text.primary" gutterBottom>
                            <strong>Phone:</strong> {card.phone}
                        </Typography>
                        <Typography variant="body1" color="text.primary" gutterBottom>
                            <strong>Address:</strong> {card.address.city}, {card.address.street} {card.address.houseNumber}
                        </Typography>
                        <Typography variant="body1" color="text.primary">
                            <strong>Card Number:</strong> {card.bizNumber}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body2" color="text.secondary">
                            {card.description}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
