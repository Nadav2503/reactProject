import { CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Countries() {
    const [allCountries, setAllCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            let response = await fetch("https://restcountries.com/v3.1/all");
            let data = await response.json();
            console.log(data);
            setAllCountries(data);
        };
        getCountries();
    }, []);

    if (allCountries.length === 0) {
        return <CircularProgress />;
    }
    return (
        <div>
            {allCountries.map((country) => (
                <Typography>{country.name.common}</Typography>
            ))}
        </div>
    );
}