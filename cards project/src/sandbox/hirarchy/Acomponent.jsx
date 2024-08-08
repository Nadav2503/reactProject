import React from "react";
import Bcomponent from "./Bcomponent.jsx";

export default function Acomponent() {
    return (
        <div>
            <Bcomponent x={1} y={2}>
                3
            </Bcomponent>
        </div>
    );
}