import { Button, Container, TextField } from "@mui/material";
import Joi from "joi";
import React, { useState } from "react";

const initialForm = {
  firstName: "",
  lastName: "",
};

const schema = {
  firstName: Joi.string().min(2),
  lastName: Joi.string().min(2).max(12),
};

export default function FormExample() {
  const [data, setData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    const errorMessage = validateProperty(name, value);

    if (errorMessage) {
      setErrors((prev) => ({ ...prev, [name]: errorMessage }));
    } else {
      setErrors((prev) => {
        let obj = { ...prev };
        delete obj[name];
        return obj;
      });
    }

    setData((prev) => ({ ...prev, [name]: value }));
  };

  const validateProperty = (name, value) => {
    let joiSchema = Joi.object({ [name]: schema[name] });
    let { error } = joiSchema.validate({ [name]: value });
    return error ? error.details[0].message : null;
  };

  const validateForm = () => {
    const joiSchema = Joi.object(schema);
    const { error } = joiSchema.validate(data);
    if (error) return false;
    return true;
  };

  return (
    <Container
      sx={{
        pt: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        label="first name"
        name="firstName"
        onChange={handleChange}
        value={data.firstName}
        error={Boolean(errors.firstName)}
        helperText={errors.firstName}
      />
      <TextField
        label="last name"
        name="lastName"
        onChange={handleChange}
        value={data.lastName}
        error={Boolean(errors.lastName)}
        helperText={errors.lastName}
      />

      <Button disabled={!validateForm()}>Submit</Button>
    </Container>
  );
}
