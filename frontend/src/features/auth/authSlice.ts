import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authActions from './index';

interface AuthState {
  user: Record<string, any> | null,
  isAuthenticated: boolean,
  isError: boolean,
  error: string | null,
  isSuccess: boolean,
  isLoading: boolean
}

const user = JSON.parse(localStorage.getItem("user")!);

const initialState: AuthState = {
  user:  user || null,
  isAuthenticated: false,
  isError: false,
  error: null,
  isSuccess: false,
  isLoading: false
}



export const register = createAsyncThunk(
    "auth/register",
    async (data: { username:string, email:string, password:string}, thunkAPI) => {
        try {
            return await authActions.register(data);
        } catch (error: any) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (data: { email:string, password:string}, thunkAPI) => {
        try {
            return await authActions.login(data);
        } catch (error: any) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, thunkAPI) => {
        try {
            return await authActions.logout();
        } catch (error: any) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const checkAuth = createAsyncThunk(
    "auth/checkAuth",
    async (_, thunkAPI) => {
        try {
            return await authActions.checkAuth();
        } catch (error: any) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthState: (state) => {
        state.error = null,
        state.isError = false,
        state.isSuccess = false
    },
  },
  extraReducers(builder) {
    builder
    .addCase(register.pending, (state) => {
        state.isLoading = true;
    })
    .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.isAuthenticated = true
    })
    .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload as string;
        state.user = null;
    })
    .addCase(login.pending, (state) => {
        state.isLoading = true;
    })
    .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.isAuthenticated = true
    })
    .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload as string;
        state.user = null;
    })
    .addCase(logout.pending, (state) => {
        state.isLoading = true;
    })
    .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = null;
        state.isAuthenticated = false
    })
    .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload as string;
    })
    .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
    })
    .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.user = action.payload.user;
        state.isAuthenticated = true
    })
    .addCase(checkAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload as string;
        state.user = null;
        state.isAuthenticated = false
    })
  },
})

export const { resetAuthState } = authSlice.actions
export default authSlice.reducer