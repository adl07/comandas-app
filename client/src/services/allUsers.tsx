import axios from "axios"



export const GetAllUsers=async()=>{
    try {
        const endpoint = 'https://comandas-app-two.vercel.app/allUsers'
        const response = await axios.get(endpoint)
        console.log(response.data)

        return response.data
    } catch (error:unknown) {
        console.log("Ocurrio un error al ejecutar getAllUsers", error)
        throw new Error("Ocurrio un error al ejecutar getAllUsers");
    }
}