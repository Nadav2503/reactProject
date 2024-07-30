import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton, CardActions } from "@mui/material";

export default function CardActionBar() {
    return (
        <CardActions sx={{ justifyContent: "space-between" }}>
            <Box>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
                <IconButton>
                    <ModeEditIcon />
                </IconButton>
            </Box>
            <Box>
                <IconButton>
                    <CallIcon />
                </IconButton>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
            </Box>
        </CardActions>
    );
}