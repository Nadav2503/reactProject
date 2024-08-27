import React, { useEffect } from 'react';
import useCards from '../hooks/useCards';
import CardComponent from '../components/card/CardComponent';
import { Container, Grid } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import { useCurrentUser } from '../../users/providers/UserProvider';

export default function FavoritesPage() {
    const { cards, getFavoriteCards, handleLike, handleDelete, handleEditCard } = useCards();
    const { user } = useCurrentUser();

    useEffect(() => {
        getFavoriteCards();
    }, [getFavoriteCards]);

    return (
        <Container >
            <PageHeader
                title="Favorite Cards"
                subtitle="Welcome to favorite cards page"
                sx={{ mb: 4 }}
            />
            <Grid container spacing={4}>
                {cards.map(card => (
                    <Grid item xs={12} md={4} key={card._id}>
                        <CardComponent
                            card={card}
                            handleDelete={handleDelete}
                            handleEdit={handleEditCard}
                            handleLike={handleLike}
                            isLiked={card.likes.includes(user._id)}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
