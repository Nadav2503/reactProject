import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = useState({ firstName: "tzach" });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within provider");
    }

    return context;
};