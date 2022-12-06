import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const USERS_URL = '';

const initialState = {
    user: null,
    order: null,
    searchDetails: null
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (username) => {
    const response = await axios.get(`http://127.0.0.1:3003/user?username=${username}`);
    return (response.data)[0];
})

const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        SetLogin: (state, action) => {
            state.user = action.payload.user;
            state.order = action.payload.order;
        },
        Logout: (state) => {
            state.user = null;
            state.order = null;
        },
        SetSearchDetails: (state, action) => {
            state.searchDetails = action.payload;
        },
        DelSearchDetails: (state) => {
            state.searchDetails = null;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAllUser = (state) => state.user.user;
export const selectAllOrder = (state) => state.user.order;
export const selectAllDetails = (state) => state.user.searchDetails;
export const { SetLogin, Logout, SetSearchDetails, DelSearchDetails } = usersSlice.actions;
export default usersSlice.reducer