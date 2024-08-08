import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import LeftNavBar from "./left-navigation/LeftNavBar.jsx";
export default function Header() {
    return (
        <AppBar position="sticky" color="primary" elevation={10}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Box>
                    <LeftNavBar />
                </Box>
            </Toolbar>
        </AppBar>
    );
}