import { useContext, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext.jsx";

interface ProtectedRouteProps {
    children: ReactNode;
    roles: string[];
}

interface UserContextType {
    role: string;
    authenticated: boolean;
}
const ProtectedRoute = ({ children, roles }: ProtectedRouteProps) => {

    const { role, authenticated }:UserContextType  = useContext(UserContext);

    if (!authenticated) {
        return <Navigate to={'/login'} />;
    }

    if (!roles.includes(role)) {
        return <Navigate to={'/unauthorized'} />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
