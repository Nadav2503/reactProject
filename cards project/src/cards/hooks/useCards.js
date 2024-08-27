import { useCallback, useState } from 'react';
import { useSnack } from '../../providers/SnackbarProvider';
import { useNavigate } from "react-router-dom";
import {
    getCards,
    getCard,
    deleteCard,
    createCard,
    editCard,
    changeLikeStatus,
    getMyCardsApi,
} from '../services/cardsApiService';
import useAxios from '../../hooks/useAxios';
import { useCurrentUser } from '../../users/providers/UserProvider';
import { getToken } from '../../users/services/localStorageService';

export default function useCards() {
    const [cards, setCards] = useState([]);
    const [card, setCard] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();
    const navigate = useNavigate();
    const { user } = useCurrentUser();
    useAxios();

    const fetchCards = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await getCards();
            setCards(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const getAllCards = useCallback(async () => {
        await fetchCards();
        setSnack('success', 'All cards are here!');
    }, [fetchCards, setSnack]);

    const getCardById = useCallback(async (id) => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await getCard(id);
            setCard(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const getMyCards = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const token = getToken();
            const data = await getMyCardsApi(token);
            setCards(data);
            setSnack('success', 'Your cards are here!');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, [setSnack]);

    const handleCreateCard = useCallback(async (cardFromClient) => {
        setIsLoading(true);
        setError(null);
        try {
            const token = getToken();
            const data = await createCard(cardFromClient, token);
            setCard(data);
            setSnack('success', 'A new business card has been created');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, [setSnack]);

    const handleEditCard = useCallback(
        async (cardId, cardFromClient) => {
            setIsLoading(true);
            try {
                const card = await editCard(cardId, normalizeCard(cardFromClient));
                setCard(card);
                setSnack("success", "The business card has been successfully updated");
                setTimeout(() => {
                    navigate(ROUTES.ROOT);
                }, 1000);
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        },
        [setSnack, navigate]
    );

    const handleDelete = useCallback(async (id) => {
        setIsLoading(true);
        setError(null);
        try {
            await deleteCard(id);
            setCards(prevCards => prevCards.filter(card => card._id !== id));
            setSnack('success', 'Card has been deleted');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, [setSnack]);

    const handleLike = useCallback(async (id) => {
        setIsLoading(true);
        setError(null);
        try {
            await changeLikeStatus(id);
            setSnack('success', 'Card like status changed');
            await fetchCards();
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, [fetchCards, setSnack]);

    const getFavoriteCards = useCallback(async () => {
        if (!user) {
            setCards([]);
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            const allCards = await getCards();
            const favoriteCards = allCards.filter(card => card.likes.includes(user._id));
            setCards(favoriteCards);
            setSnack('success', 'Your favorite cards are here!');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, [user, setSnack]);

    return { cards, card, error, isLoading, getAllCards, getCardById, getMyCards, handleCreateCard, handleEditCard, handleDelete, handleLike, getFavoriteCards };
}
