import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: false,
  data: {
    email: "",
    name: "",
    password: "",
    agno: "",
    whoRU: "",
    isLoggedIn: false,
  },
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    haveAnAccount(state, action) {
      state.account = !state.account;
      state.data.email = "";
      state.data.password = "";
    },
    changeEmail(state, action) {
      state.data.email = action.payload;
    },
    changeName(state, action) {
      state.data.name = action.payload;
    },

    changePassword(state, action) {
      state.data.password = action.payload;
    },
    changeAgno(state, action) {
      state.data.agno = action.payload;
    },
    loggedIn(state, action) {
      state.data.isLoggedIn = true;
    },
    loggedOut(state, action) { 
      state.data.isLoggedIn = false;
    },
    identifyWho(state,action){
      state.data.whoRU = action.payload;
    }
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
