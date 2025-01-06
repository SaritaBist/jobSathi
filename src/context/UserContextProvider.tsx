import { UserContext } from "./UserContext.tsx";
import { ReactNode } from "react";

interface ContextProviderProps {
    children: ReactNode;
}

const ContextProvider = ({ children }: ContextProviderProps) => {
    const role = 'user';
    const authenticated = true;

    return (
        <UserContext.Provider value={{ role, authenticated }}>
            {children}
        </UserContext.Provider>
    );
};

export default ContextProvider;
