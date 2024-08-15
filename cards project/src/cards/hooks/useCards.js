import { useCallback, useState } from "react";
import { useSnack } from "../../providers/SnackbarProvider";
import axios from "axios";
export default function useCards() {
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const setSnack = useSnack();
    const [card, setCard] = useState();

    const getAllCards = useCallback(async () => {
        try {
            let response = await axios.get(
                "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
            );
            setCards(response.data);
            setSnack("success", "All cards are here!");
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    }, []);
    const getCardById = useCallback(async (id) => {
        try {
            const response = await axios.get(
                `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${id}`
            );
            const data = response.data;
            setCard(data);
        }
        catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    }, []);

    const handleCreateCard = useCallback(
        async (cardFromClient) => {
            setError(null);
            setIsLoading(true);
            try {
                const { data } = await axios.post(
                    `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards`,
                    cardFromClient,
                    { "x-auth-token": localStorage.getItem("my token") }
                );
                const card = data;
                setCard(card);
                setSnack("success", "A new business card has been created");
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

    const handleDelete = useCallback((id) => {
        console.log("Card " + id + " deleted");
    }, []);

    const handleLike = useCallback((id) => {
        console.log("Card " + id + " has been liked");
    }, []);
    return { cards, card, error, isLoading, getAllCards, getCardById, handleDelete, handleLike };
}