import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton, CardActions } from "@mui/material";
import { useUser } from "../../../users/providers/UserProvider";

export default function CardActionBar({
    cardId,
    handleDelete,
    handleEdit,
    handleLike,
}) {
    const user = useUser();

    return (
        <CardActions sx={{ justifyContent: "space-between" }}>
            <Box>
                <IconButton onClick={() => handleDelete(cardId)}>
                    <DeleteIcon />
                </IconButton>

                <IconButton onClick={() => handleEdit(cardId)}>
                    <ModeEditIcon />
                </IconButton>
            </Box>
            <Box>
                <IconButton>
                    <CallIcon />
                </IconButton>
                <IconButton onClick={() => handleLike(cardId)}>
                    <FavoriteIcon />
                </IconButton>
            </Box>
        </CardActions>
    );
}
