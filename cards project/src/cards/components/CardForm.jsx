import React from "react";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import { Container } from "@mui/material";

export default function CardForm({
    onSubmit,
    onReset,
    validateForm,
    title,
    errors,
    data,
    onInputChange,
}) {
    return (
        <Container
            sx={{
                paddingTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Form
                onSubmit={onSubmit}
                onReset={onReset}
                validateForm={validateForm}
                title={title}
                styles={{ maxWidth: "800px" }}
            >
                <Input
                    name="title"
                    label="Title"
                    error={errors.title}
                    onChange={onInputChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name="subtitle"
                    label="Subtitle"
                    error={errors.subtitle}
                    onChange={onInputChange}
                    data={data}
                    sm={6}
                    required={false}
                />
                <Input
                    name="description"
                    label="Description"
                    error={errors.description}
                    onChange={onInputChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name="phone"
                    label="Phone"
                    type="text"
                    error={errors.phone}
                    onChange={onInputChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name="email"
                    label="Email"
                    type="email"
                    error={errors.email}
                    onChange={onInputChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name="webUrl"
                    label="Website URL"
                    type="url"
                    error={errors.webUrl}
                    onChange={onInputChange}
                    data={data}
                    sm={6}
                    required={false}
                />
                <Input
                    name="imageUrl"
                    label="Image URL"
                    type="url"
                    error={errors.imageUrl}
                    onChange={onInputChange}
                    data={data}
                    sm={6}
                    required={false}
                />
                <Input
                    name="imageAlt"
                    label="Image Alt Text"
                    error={errors.imageAlt}
                    onChange={onInputChange}
                    data={data}
                    sm={6}
                    required={false}
                />
                <Input
                    name="state"
                    label="State"
                    error={errors.state}
                    onChange={onInputChange}
                    data={data}
                    sm={6}
                    required={false}
                />
                <Input
                    name="country"
                    label="Country"
                    error={errors.country}
                    onChange={onInputChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name="city"
                    label="City"
                    error={errors.city}
                    onChange={onInputChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name="street"
                    label="Street"
                    error={errors.street}
                    onChange={onInputChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name="houseNumber"
                    label="House Number"
                    type="number"
                    error={errors.houseNumber}
                    onChange={onInputChange}
                    data={data}
                    sm={6}
                />
                <Input
                    name="zip"
                    label="ZIP Code"
                    type="number"
                    error={errors.zip}
                    onChange={onInputChange}
                    data={data}
                    sm={6}
                />
            </Form>
        </Container>
    );
}
