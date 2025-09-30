import { createSlice } from "@reduxjs/toolkit";
import type { UsersInterface } from "../interfaces/users";

const initialState = {
    users: [] as UsersInterface[],
};

const getUsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUsers:(state, action)=>{
            state.users = action.payload;
        },
        removeUsers: (state, action) =>{
        }
    }
})


export const {addUsers,removeUsers } = getUsersSlice.actions;
export default getUsersSlice.reducer;