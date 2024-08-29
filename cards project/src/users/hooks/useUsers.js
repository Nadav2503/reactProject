import { useState, useCallback } from 'react';
import { useCurrentUser } from '../providers/UserProvider';
import { setTokenInLocalStorage, removeToken, getUser } from '../services/localStorageService';
import { login, signup, getUserData, updateUser } from '../services/usersApiService';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';
import { useSnack } from '../../providers/SnackbarProvider';
import normalizeUser from '../helpers/normalization/normalizeUser';

export default function useUsers() {
    const [isLoading, setIsLoading] = useState(false);
    const { user, setUser, setToken } = useCurrentUser();
    const navigate = useNavigate();
    const setSnack = useSnack();

    const handleLogin = useCallback(async (userLogin) => {
        setIsLoading(true);
        try {
            const token = await login(userLogin);
            setTokenInLocalStorage(token);
            setToken(token);
            const userFromLocalStorage = getUser();
            setUser(userFromLocalStorage);
            navigate(ROUTES.CARDS);
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || "An unexpected error occurred";
            setSnack("error", errorMessage);
        } finally {
            setIsLoading(false);
        }
    }, [navigate, setToken, setUser, setSnack]);

    const handleSignup = useCallback(async (user) => {
        setIsLoading(true);
        try {
            const normalizedUser = normalizeUser(user);
            const { token } = await signup(normalizedUser);
            setTokenInLocalStorage(token);
            setToken(token);
            setUser(getUser());
            navigate(ROUTES.CARDS);
            await handleLogin({ email: user.email, password: user.password });
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || "An unexpected error occurred";
            setSnack("error", errorMessage);
        } finally {
            setIsLoading(false);
        }
    }, [handleLogin, navigate, setToken, setUser, setSnack]);

    const handleLogout = useCallback(() => {
        setToken(null);
        setUser(null);
        removeToken();
        navigate(ROUTES.LOGIN);
    }, [navigate, setToken, setUser]);

    const getUserById = useCallback(async (id) => {
        setIsLoading(true);
        try {
            const userData = await getUserData(id);
            setUser(userData);
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || "An unexpected error occurred";
            setSnack("error", errorMessage);
            navigate(ROUTES.ERROR);
        } finally {
            setIsLoading(false);
        }
    }, [setSnack, setUser, navigate]);

    const handleUpdateUser = useCallback(async (id, userData) => {
        setIsLoading(true);
        try {
            const normalizedUser = normalizeUser(userData);
            await updateUser(id, normalizedUser);
            setSnack("success", "User updated successfully");
            navigate(ROUTES.USER_PROFILE + `/${id}`);
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || "An unexpected error occurred";
            setSnack("error", errorMessage);
        } finally {
            setIsLoading(false);
        }
    }, [navigate, setSnack]);

    return { isLoading, user, handleLogin, handleLogout, handleSignup, getUserById, handleUpdateUser };
}
