import { AppBar, Box, Toolbar } from "@mui/material";
import React from "react";
import NavBarItem from "../../routes/components/NavBarItem";
import ROUTES from "../../routes/routesModel";
export default function Header() {
    return (
        <AppBar position="sticky" color="primary" elevation={10}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Box>
                    <NavBarItem to={ROUTES.CARDS} label={"Cards"} />
                    <NavBarItem to={ROUTES.ABOUT} label={"About"} />
                    <NavBarItem to={ROUTES.SANDBOX} label={"Sandbox"} />
                </Box>
            </Toolbar>
        </AppBar>
    );
}