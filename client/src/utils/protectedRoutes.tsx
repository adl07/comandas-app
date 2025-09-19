import { Navigate, Outlet } from "react-router-dom"

interface routeProps{
    access: boolean,
    redirectPath: string
}


export const ProtectedRoute =({access, redirectPath}: routeProps)=>{
    if(!access){
        return <Navigate to={redirectPath} replace/>
    }

    return <Outlet/>
}