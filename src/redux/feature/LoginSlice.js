import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "loginValue",
  initialState: {
    loginState: [],
    error: "",
  },
  
  reducers: {
    loginResults: (state, action) => {
      if (action.payload) {
        state.loginState = action.payload
      }
    },
}
});

export const {loginResults} = LoginSlice.actions;
export default LoginSlice.reducer;
