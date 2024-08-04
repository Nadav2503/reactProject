import React from 'react'
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

export default function SignupPage() {
    let user = null;

    if (user) return <Navigate to={ROUTES.ROOT} replace />;

    return <div>Welcom to signup page</div>;
}
