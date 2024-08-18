import axios from 'axios';

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";

export async function getCards() {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to fetch cards');
    }
}

export async function getCard(id) {
    try {
        const response = await axios.get(`${apiUrl}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || `Failed to fetch card with id ${id}`);
    }
}

export async function getMyCards() {
    try {
        const response = await axios.get(`${apiUrl}/my`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to fetch my cards');
    }
}

export async function deleteCard(id) {
    try {
        await axios.delete(`${apiUrl}/${id}`);
        return;
    } catch (error) {
        throw new Error(error.response?.data?.message || `Failed to delete card with id ${id}`);
    }
}

export async function createCard(card) {
    try {
        const response = await axios.post(apiUrl, card);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Failed to create card');
    }
}

export async function editCard(card) {
    try {
        const response = await axios.put(`${apiUrl}/${card.id}`, card);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || `Failed to edit card with id ${card.id}`);
    }
}

export async function changeLikeStatus(id) {
    try {
        const response = await axios.patch(`${apiUrl}/${id}/like`);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || `Failed to change like status for card with id ${id}`);
    }
}
