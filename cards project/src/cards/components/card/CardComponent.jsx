import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardHeaderComponent from "./CardHeaderComponent";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";

export default function CardComponent({ card }) {
    return (
        <Card sx={{ width: 250, m: 2 }}>
            <CardActionArea>
                <CardHeaderComponent
                    image={card.image.url}
                    alt={card.image.alt}
                    title={card.title}
                    subtitle={card.subtitle}
                />
                <CardBody
                    phone={card.phone}
                    address={card.address}
                    bizNumber={card.bizNumber}
                />
            </CardActionArea>
            <CardActionBar />
        </Card>
    );
}
