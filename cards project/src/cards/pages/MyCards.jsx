import React, { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import PageHeader from '../../components/PageHeader';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
import useCards from '../hooks/useCards';
import CardComponent from '../components/card/CardComponent';
import { useCurrentUser } from '../../users/providers/UserProvider';

export default function MyCards() {
    const { cards, isLoading, error, getMyCards, handleDelete, handleEditCard, handleLike } = useCards();
    const { user } = useCurrentUser();

    useEffect(() => {
        if (user) {
            getMyCards();
        }
    }, [user, getMyCards]);

    if (isLoading) return <Spinner />;
    if (error) return <Error errorMessage={error} />;
    if (!cards) return <Error errorMessage="No cards found" />;

    return (
        <Container>
            <PageHeader
                title="My Cards"
                subtitle="Here are all the business cards you have created"
                sx={{ mb: 4 }}
            />
            <Grid container spacing={4}>
                {cards.map(card => (
                    <Grid sx={{ display: "flex", flexWrap: "wrap", mt: 2, ml: 1.5 }} key={card._id}>
                        <CardComponent
                            card={card}
                            handleDelete={handleDelete}
                            handleEdit={handleEditCard}
                            handleLike={handleLike}
                            isLiked={card.likes.includes(user ? user._id : '')}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
