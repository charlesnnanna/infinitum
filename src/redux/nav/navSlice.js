import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name : "nav",
    initialState : {
        value : "home"
    },

    reducers : {
        setPage : (state, action) => {
            state.value = action.payload
        },

    }
})


export const { setPage} = navSlice.actions
export const selectNav = (state) => state.nav.value
export default navSlice.reducer