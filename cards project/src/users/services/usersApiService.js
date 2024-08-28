import axios from 'axios';
import { getToken } from './localStorageService';

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
        throw new Error(error.message);
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
        throw new Error(err.message);
    }
};

export const updateUser = async (id, userData) => {
    try {
        const token = getToken();
        if (!token) {
            throw new Error('No authentication token found');
        }

        console.log('Updating user with ID:', id);
        console.log('Request payload:', userData);

        const { data } = await axios.put(`${apiUrl}/${id}`, userData, {
            headers: {
                'x-auth-token': token
            }
        });

        console.log('Response data:', data);
        return data;
    } catch (error) {
        console.error('Update user error:', error.response ? error.response.data : error.message);
        throw new Error(error.message);
    }
};

