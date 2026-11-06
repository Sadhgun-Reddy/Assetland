import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return { ...state, ...action.payload };
        },
        removeUser: (state, action) => {
            return null;
        },
        updateProfile: (state, action) => {
            if (state) {
                return { ...state, ...action.payload };
            }
            return state;
        }
    },
});

export const { addUser, removeUser, updateProfile } = userSlice.actions;

export default userSlice.reducer;
