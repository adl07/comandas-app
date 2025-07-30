import axios from "axios"


export const GetAllRoles = async()=>{
   
    try {
        const endpoint = 'https://comandas-app-two.vercel.app/allRoles'
        const response = await axios.get(endpoint)
        console.log(response.data)
        return response.data
    } catch (error: unknown) {
        console.log("Ocurrio un error al ejecutar getAllRoles", error)
    }
}

GetAllRoles()

