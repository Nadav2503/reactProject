import React, { useCallback } from 'react';
import CardForm from '../components/CardForm';
import initialCardForm from '../helpers/initialForms/initialCardForm';
import cardSchema from '../models/cardSchema';
import useForm from '../../forms/hooks/useForm';
import useCards from '../hooks/useCards';

export default function AddCardPage() {
    const { handleCreateCard } = useCards();

    const handleSubmit = useCallback(async (formData) => {
        try {
            await handleCreateCard(formData);
        } catch (error) {
            console.error('Failed to create card:', error);
        }
    }, [handleCreateCard]);

    const {
        data,
        errors,
        handleChange,
        handleReset,
        validateForm,
        onSubmit,
    } = useForm(initialCardForm, cardSchema, handleSubmit);

    return (
        <div>
            <CardForm
                title="Add New Card"
                onSubmit={onSubmit}
                onReset={handleReset}
                validateForm={validateForm}
                errors={errors}
                data={data}
                onInputChange={handleChange}
            />
        </div>
    );
}
