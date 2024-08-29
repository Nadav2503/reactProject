import axios from 'axios';
import { getToken } from './localStorageService';

const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users";

export const login = async (userLogin) => {
    try {
        const response = await axios.post(apiUrl + "/login", userLogin);
        return response.data;
    } catch (err) {
        throw new Error(err.response ? err.response.data.message : err.message);
    }
};

export const signup = async (normalizeUser) => {
    try {
        const { data } = await axios.post(apiUrl, normalizeUser);
        return data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : error.message);
    }
};

export const getUserData = async (id) => {
    try {
        const token = getToken();
        if (!token) {
            throw new Error('No authentication token found');
        }

        const response = await axios.get(`${apiUrl}/${id}`, {
            headers: {
                'x-auth-token': token
            }
        });

        if (response.status === 200 && response.data) {
            return response.data;
        } else {
            throw new Error('User not found');
        }
    } catch (err) {
        throw new Error(err.response ? err.response.data : err.message);
    }
};

export const updateUser = async (id, userData) => {
    try {
        const token = getToken();
        if (!token) {
            throw new Error('No authentication token found');
        }
        const { data } = await axios.put(`${apiUrl}/${id}`, userData, {
            headers: {
                'x-auth-token': token
            }
        });

        return data;
    } catch (error) {
        throw new Error(error.response ? error.response.data : error.message);
    }
};
