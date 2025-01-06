import { createContext } from 'react';

interface UserContextType {
    role: string;
    authenticated: boolean;
}

export const UserContext = createContext<UserContextType >({role:'admin',authenticated:false});
