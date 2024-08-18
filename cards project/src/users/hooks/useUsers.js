import { useState, useCallback } from 'react';
import { useCurrentUser } from '../providers/UserProvider';
import { setTokenInLocalStorage, removeToken, getUser } from '../services/localStorageService';
import { login, signup } from '../services/usersApiService';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import { useSnack } from '../../providers/SnackbarProvider';
import { normalizeUser } from '../../cards/helpers/normalization/normalizeUser';

export default function useUsers() {
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState();
    const { setUser, setToken } = useCurrentUser();
    const navigate = useNavigate();
    const setSnack = useSnack();

    const handleLogin = useCallback(async (userLogin) => {
        setIsLoading(true);
        try {
            const token = await login(userLogin);
            setTokenInLocalStorage(token);
            setToken(token);
            setUser(getUser());
            navigate(ROUTES.CARDS);
        } catch (err) {
            setError(err.message);
            setSnack("error", error);
        }
        setIsLoading(false);
    }, []);

    const handleLogout = useCallback(() => {
        setToken(null);
        setUser(null);
        removeToken();
    }, [setToken, setUser]);

    const handleSignup = useCallback(async (user) => {
        setIsLoading(true);
        try {
            const normalizedUser = normalizeUser(user);
            const token = await signup(normalizedUser);
            setTokenInLocalStorage(token);
            setToken(token);
            setUser(getUser());
            navigate(ROUTES.CARDS);
            await handleLogin({ email: user.email, password: user.password });
        } catch (err) {
            setError(err.message);
            setSnack("error", error);
        }
        setIsLoading(false);
    }, [handleLogin]);
    return { isLoading, error, handleLogin, handleLogout, handleSignup };
}
