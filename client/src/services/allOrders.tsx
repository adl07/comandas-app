/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";




export const GetAllOrders= async()=>{
    try {
        const endpoint = 'https://comandas-app-two.vercel.app/allOrders'
        const response = await axios.get(endpoint)
        console.log(response)
        return response.data
    } catch (error: any) {
        console.log("Ocurrio un error al ejecutar getAllOrders", error)
        throw new Error("Ocurrio un error al ejecutar getAllOrders");
        
    }
}


export const CreateOrder=async(input: any)=>{

    console.log(input)
    try {
        const endpoint = 'https://comandas-app-two.vercel.app/order'
        const response = await axios.post(
            endpoint,
            input,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            
        })
        console.log(response)
        return response.data
    } catch (error: unknown) {
        console.log("Ocurrio un error al ejecutar getAllOrders", error)
        throw new Error("Ocurrio un error al ejecutar getAllOrders");
        
    }
}