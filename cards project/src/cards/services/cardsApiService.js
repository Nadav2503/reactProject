import axios from "axios";
const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";

export const getCards = async () => {
    try {
        const response = await axios.get(apiUrl);
        const data = response.data;
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const getCard = async (cardId) => {
    try {
        const response = await axios.get(`${apiUrl}/${cardId}`);
        const data = response.data;
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const getMyCardsApi = async () => {
    try {
        const response = await axios.get(`${apiUrl}/my-cards`);
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteCard = async (cardId) => {
    try {
        const { data } = await axios.delete(`${apiUrl}/${cardId}`);
        return data;
    } catch (error) {
        throw new Error(err.message);
    }
};

export const createCard = async (card) => {
    try {
        const { data } = await axios.post(apiUrl, card);
        return data;
    } catch (error) {
        console.error("Error making request:", error.message);
        console.error("Request Data:", card);
        console.error("Response Data:", error.response ? error.response.data : "No response data");
        throw new Error(error.message);
    }
};

export const editCard = async (cardId, normalaizedCard) => {
    try {
        const { data } = await axios.put(`${apiUrl}/${cardId}`, normalaizedCard);
        return data;
    } catch (error) {
        console.error("Error making request:", error.message);
        throw new Error(error.message);
    }
};

export const changeLikeStatus = async (cardId) => {
    try {
        const { data } = await axios.patch(`${apiUrl}/${cardId}`);
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};