import { Button } from '@mui/material';
import React from 'react';

export default function EventComponent2() {

    return (
        <div>
            <Button variant="contained" onClick={(event) => {
                console.log(event.target.innerText);
            }}>
                click me
            </Button >
        </div >
    )
}

