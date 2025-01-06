import {UserContext} from "./UserContext.tsx";


const ContextProvider=({children})=>{
    const role='user'
    const authenticated  =true
    return(
        <UserContext.Provider value={{role,authenticated}}>
            {children}
        </UserContext.Provider>
    )
}
export default ContextProvider