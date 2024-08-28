import { jwtDecode } from "jwt-decode";
const TOKEN = 'my token';

export const setTokenInLocalStorage = (token) => {
    localStorage.setItem(TOKEN, token);
};

export const removeToken = () => {
    localStorage.removeItem(TOKEN);
}

export const getToken = () => {
    return localStorage.getItem('my token');
};
export const getUser = () => {
    try {
        const myToken = getToken();
        if (myToken) {
            return jwtDecode(myToken);
        }
        return null;
    } catch (err) {
        return null;
    }
};