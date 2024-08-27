import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton, CardActions } from "@mui/material";
import { useCurrentUser } from "../../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
export default function CardActionBar({
    cardId,
    handleDelete,
    handleLike,
    isLiked,
    cardOwnerId
}) {
    const { user } = useCurrentUser();
    const navigate = useNavigate();

    const isLoggedIn = !!user;
    const canEdit = user && (user.isAdmin || user._id === cardOwnerId);
    const canDelete = user && (user.isAdmin || user._id === cardOwnerId);

    return (
        <CardActions sx={{ justifyContent: "space-between" }}>
            <Box>
                {canDelete && (
                    <IconButton onClick={() => handleDelete(cardId)}>
                        <DeleteIcon />
                    </IconButton>
                )}

                {canEdit && (
                    <IconButton onClick={() => navigate(ROUTES.EDIT_CARD + "/" + cardId)}>
                        <ModeEditIcon />
                    </IconButton>
                )}
            </Box>
            <Box>
                <IconButton>
                    <CallIcon />
                </IconButton>

                {isLoggedIn && handleLike && (
                    <IconButton onClick={() => handleLike(cardId)}>
                        <FavoriteIcon color={isLiked ? "error" : "action"} />
                    </IconButton>
                )}
            </Box>
        </CardActions>
    );
}
