import { useState } from 'react';

const useForm = (schema, initialFormState) => {
    const [data, setData] = useState(initialFormState);
    const [errors, setErrors] = useState({});

    const validateProperty = (name, value) => {
        const { error } = schema.extract(name).validate(value);
        return error ? error.details[0].message : null;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const errorMessage = validateProperty(name, value);

        setErrors((prev) => ({
            ...prev,
            ...(errorMessage ? { [name]: errorMessage } : {})
        }));

        setData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const { error } = schema.validate(data);
        return !error;
    };

    return {
        data,
        errors,
        handleChange,
        validateForm
    };
};

export default useForm;