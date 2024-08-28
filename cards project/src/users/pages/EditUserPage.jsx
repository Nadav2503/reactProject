import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import UserForm from '../components/UserForm';
import useUsers from '../hooks/useUsers';
import useForm from '../../forms/hooks/useForm';
import normalizeUserForUpdate from '../helpers/normalization/normalizeUserForUpdate';
import mapUserToModelForUpdate from '../helpers/normalization/mapUserToModelForUpdate';
import userSchema from '../models/userSchema';
import initialUserForm from '../helpers/initialForms/initialUserForm';

export default function EditUserPage() {
    const { id } = useParams();
    const { handleUpdateUser, getUserById, isLoading, error, user } = useUsers();
    const {
        data,
        errors,
        setData,
        handleChange,
        handleReset,
        validateForm,
        onSubmit,
        handleChangeCheckBox,
    } = useForm(initialUserForm, userSchema, (data) => handleUpdateUser(id, data));

    useEffect(() => {
        if (user) {
            setData(mapUserToModelForUpdate(user));
        } else {
            getUserById(id);
        }
    }, [user]);

    if (isLoading) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    if (!user) {
        return <Typography>No user data available.</Typography>;
    }

    return (
        <div>
            <Container
                sx={{
                    paddingTop: 8,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <UserForm
                    title="Edit User"
                    onSubmit={onSubmit}
                    onReset={handleReset}
                    validateForm={validateForm}
                    onInputChange={handleChange}
                    handleChangeCheckBox={handleChangeCheckBox}
                    errors={errors}
                    data={data}
                />
            </Container>
        </div>
    );
}
