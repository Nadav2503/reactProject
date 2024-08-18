import { useCallback, useState } from 'react';
import { useSnack } from '../../providers/SnackbarProvider';
import {
    getCards,
    getCard,
    deleteCard,
    createCard,
    editCard,
    changeLikeStatus
} from '../services/cardsApiService';
import useAxios from '../../hooks/useAxios';

export default function useCards() {
    const [cards, setCards] = useState([]);
    const [card, setCard] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const setSnack = useSnack();
    useAxios();

    const getAllCards = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await getCards();
            setCards(data);
            setSnack('success', 'All cards are here!');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, [setSnack]);

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

    const handleCreateCard = useCallback(async (cardFromClient) => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await createCard(cardFromClient);
            setCard(data);
            setSnack('success', 'A new business card has been created');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, [setSnack]);

    const handleEditCard = useCallback(async (cardFromClient) => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await editCard(cardFromClient);
            setCard(data);
            setSnack('success', 'Card has been updated');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, [setSnack]);

    const handleDelete = useCallback(async (id) => {
        setIsLoading(true);
        setError(null);
        try {
            await deleteCard(id);
            setCards(prevCards => prevCards.filter(card => card.id !== id));
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
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }, [setSnack]);

    return { cards, card, error, isLoading, getAllCards, getCardById, handleCreateCard, handleEditCard, handleDelete, handleLike };
}
