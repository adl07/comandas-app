/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { addUsers } from "../reducers/users";

export const GetAllUsers = async (dispatch?: any) => {
  try {
    const endpoint = "https://comandas-app-two.vercel.app/allUsers";
    const response = await axios.get(endpoint);

    dispatch(addUsers(response.data))

    return response.data;
  } catch (error: unknown) {
    console.log("Ocurrio un error al ejecutar getAllUsers", error);
    throw new Error("Ocurrio un error al ejecutar getAllUsers");
  }
};
