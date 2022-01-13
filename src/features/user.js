import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", email: "", age: 0 };

console.log('initialStateValue', initialStateValue);

export const userSlice = createSlice({
    name: "user",
    //default state when app starts
    initialState: { value: initialStateValue },
    reducers: {
        //State contains the user data
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialStateValue;
        }
    }
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;