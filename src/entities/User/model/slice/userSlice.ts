import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSchema, User } from "../types/user";
import { JsonSettings } from "../types/jsonSettings";
import {
    LOCAL_STORAGE_LAST_DESIGN_KEY,
    USER_LOCALSTORAGE_KEY,
} from "@/shared/consts/localstorage";
import { setFeatureFlags } from "@/shared/features";
import { saveJsonSettings } from "../services/saveJsonSettings";
import { initAuthData } from "../../../../entities/User/model/services/initAuthData";

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
            localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
            localStorage.setItem(
                LOCAL_STORAGE_LAST_DESIGN_KEY,
                action.payload.features?.isAppRedesigned ? "new" : "old",
            );
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, action: PayloadAction<JsonSettings>) => {
                if (state.authData) {
                    state.authData.jsonSettings = action.payload;
                }
            },
        );
        builder.addCase(initAuthData.rejected, (state) => {
            state._inited = true;
        });
        builder.addCase(
            initAuthData.fulfilled,
            (state, action: PayloadAction<User>) => {
                state._inited = true;
                state.authData = action.payload;
                setFeatureFlags(action.payload.features);
            },
        );
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
