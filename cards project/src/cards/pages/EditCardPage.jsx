import { Container, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import useCards from "../hooks/useCards";
import useForm from "../../forms/hooks/useForm";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../models/cardSchema";
import CardComponent from "../components/card/CardComponent";
import mapCardToModel from "../helpers/normalization/mapCardToModel";
import normalizeCard from "../helpers/normalization/normalizeCard";

export default function EditCardPage() {
    const { id } = useParams();
    const { handleEditCard, getCardById, card } = useCards();
    const {
        data,
        errors,
        setData,
        handleChange,
        handleReset,
        validateForm,
        onSubmit,
    } = useForm(initialCardForm, cardSchema, (data) =>
        handleEditCard(id, data)
    );

    useEffect(() => {
        if (card) {
            setData(mapCardToModel(card));
        } else {
            getCardById(id);
        }
    }, [card]);

    return (
        <Container
            sx={{
                paddingTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
            }}
        >
            {card && (
                <CardComponent
                    card={{ _id: id, ...normalizeCard(data) }}
                    handleDelete={() => { }}
                    handleEdit={() => { }}
                    handleLike={() => { }}
                    sx={{ width: '100%', maxWidth: 600 }}
                />
            )}
            <CardForm
                title="Edit Card"
                onSubmit={onSubmit}
                onReset={handleReset}
                errors={errors}
                validateForm={validateForm}
                onInputChange={handleChange}
                data={data}
                sx={{ width: '100%', maxWidth: 600 }}
            />


        </Container>
    );
}
