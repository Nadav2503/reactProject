import axios from 'axios';

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users";

export const login = async (userLogin) => {
    try {
        const response = await axios.post(apiUrl + "/login", userLogin);
        const data = response.data;
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
};

export const signup = async (normalizeUser) => {
    try {
        const { data } = await axios.post(apiUrl, normalizeUser);
        return data;
    } catch (error) {
        console.error('Error details:', error.response ? error.response.data : error.message);
        throw new Error(error.message);
    }
}

export const getUserData = async (id) => {
    try {
        const response = await axios.get(`${apiUrl}/${id}`);
        const data = response.data;
        return data;
    } catch (err) {
        console.error('Error details:', err.response ? err.response.data : err.message);
        throw new Error(err.message);
    }
}

export const updateUser = async (id, userData) => {
    try {
        const { data } = await axios.put(`${apiUrl}/${id}`, userData);
        return data;
    } catch (error) {
        console.error('Error details:', error.response ? error.response.data : error.message);
        throw new Error(error.message);
    }
}
