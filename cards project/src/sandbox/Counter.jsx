import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';

export default function Counter() {

    const [counter, setCounter] = useState(0);
    const handleClickPlus = () => {
        setCounter((prev) => prev + 1);
    }
    const handleClickMinus = () => {
        setCounter((prev) => prev - 1);
    }
    return (
        <div style={{ display: "flex" }}>
            <Button onClick={handleClickMinus}>-</Button>
            <Typography>{counter}</Typography>
            <Button onClick={handleClickPlus}>+</Button>
        </div>
    );
}
