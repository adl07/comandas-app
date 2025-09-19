import axios from "axios";

export const getOrdersStates = async () => {
  try {
    const endpoint = "https://comandas-app-two.vercel.app/ordersStates";
    const response = await axios.get(endpoint);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log("Ocurrio un error en getOrdersStates", error);
    throw new Error("Ocurrio un error en getOrdersStates", error);
  }
};
