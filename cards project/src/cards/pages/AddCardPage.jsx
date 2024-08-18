import React from 'react';
import CardForm from '../components/CardForm';
import initialCardForm from '../helpers/initialForms/initialCardForm';
import { cardSchema } from '../models/cardSchema';
import useForm from '../../forms/hooks/useForm';

export default function AddCardPage() {
    const handleSubmit = (formData) => {
        console.log('Submitted Card Details:', formData);
    };

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
