import {useContext} from "react";

import {Navigate} from "react-router-dom";
import {UserContext} from "./UserContext.jsx";


const ProtectedRoute=({children,roles})=>{

    const  {role,authenticated}=useContext(UserContext)

    if(!authenticated){
        return <Navigate to={'/login'}/>
    }

    if(!roles.includes(role))
    {
        return <Navigate to={'/unauthorized'}/>
    }
    return children
}
export  default ProtectedRoute