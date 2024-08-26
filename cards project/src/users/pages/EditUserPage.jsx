import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import UserForm from "../components/UserForm";
import useUsers from "../hooks/useUsers";
import useForm from "../../forms/hooks/useForm";
import mapUserToModel from "../helpers/normalization/mapUserToModel";
import initialSignupForm from "../helpers/initialForms/initialSignupForm";
import signupSchema from "../models/signupSchema";

export default function EditUserPage() {
    const { id } = useParams();
    const { handleUpdateUser, getUserById, user } = useUsers();
    const {
        data,
        errors,
        setData,
        handleChange,
        handleReset,
        validateForm,
        onSubmit,
    } = useForm(initialSignupForm, signupSchema, (data) =>
        handleUpdateUser(id, data)
    );

    useEffect(() => {
        if (user) {
            setData(mapUserToModel(user));
        } else {
            getUserById(id);
        }
    }, [user]);

    return (
        <div>
            <Container
                sx={{
                    paddingTop: 8,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <UserForm
                    title="Edit User"
                    onSubmit={onSubmit}
                    onReset={handleReset}
                    errors={errors}
                    validateForm={validateForm}
                    onInputChange={handleChange}
                    data={data}
                />
            </Container>
        </div>
    );
}
