import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("users/fetchUser", async (userId) => {
    const response = await axios(`https://jsonplaceholder.typicode.com/todos/${userId}`);
    return response.data;
})

const INITIAL_STATE = {
    userDetail : [],
};

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUser.pending, (state, action) => {
            console.log("Loading Start");
        }),
        builder.addCase(fetchUser.fulfilled,(state,action)=>{
            console.log(action);
            state.userDetail.push(action.payload);
            console.log("Laoding End");
        }),
        builder.addCase(fetchUser.rejected,()=>{
            console.log("Laoding End");
        })
    }
});

export default userSlice.reducer;