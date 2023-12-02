const { createSlice } = require('@reduxjs/toolkit');
const {
  signUpThunk,
  logInThunk,
  logOutThunk,
  refreshUserThunk,
} = require('./users-thunk');

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.pending, handlePending)
      .addCase(signUpThunk.rejected, handleRejected)
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.error = null;
      })

      .addCase(logInThunk.pending, handlePending)
      .addCase(logInThunk.rejected, handleRejected)
      .addCase(logInThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.token = payload.token;
        state.user = payload.user;
      })

      .addCase(logOutThunk.pending, handlePending)
      .addCase(logOutThunk.rejected, handleRejected)
      .addCase(logOutThunk.fulfilled, () => {
        return initialState;
      })

      .addCase(refreshUserThunk.pending, handlePending)
      .addCase(refreshUserThunk.rejected, handleRejected)
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
