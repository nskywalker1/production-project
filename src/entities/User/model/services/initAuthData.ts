import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { User } from "../../../../entities/User";
import { USER_LOCALSTORAGE_KEY } from "@/shared/consts/localstorage";
import { getUserDataByIdQuery } from "../../../../entities/User/api/userApi";

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    "user/initAuthData",
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;
        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

        if (!userId) {
            return rejectWithValue("");
        }

        try {
            const response = await dispatch(
                getUserDataByIdQuery(userId),
            ).unwrap();
            return response;
        } catch (e) {
            return rejectWithValue("error");
        }
    },
);
