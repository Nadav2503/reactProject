import React from "react";
import { CardContent, Typography } from "@mui/material";

export default function CardBody({ phone, address, email }) {
    return (
        <>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    <strong>Phone: </strong>
                    {phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Address: </strong>
                    {address.city} {address.street} {address.houseNumber}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>email: </strong>
                    {email}
                </Typography>
            </CardContent>
        </>
    );
}