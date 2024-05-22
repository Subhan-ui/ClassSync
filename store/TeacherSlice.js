import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  DHL_405: "",
  CS_308: "",
  CS_306: "",
  MATH_305: "",
  BBA_412: "",
  IS_401: "",
  // 4TH
  CS_406: "",
  SE_412: "",
  SE_410: "",
  SE_408: "",
  STAT_402: "",
  MATH_513: "",
  IS_402: "",
  // 6TH
  SE_502: "",
  SE_504: "",
  SE_506: "",
  SE_510: "",
  SE_512: "",
  SE_514: "",
  // 8TH
  BBA_510: "",
};

const teacherSlice = createSlice({
  name: "Teacher",
  initialState,
  reducers: {
    changeState(state,action){
        const {name,value}=action.payload;
        state[name] = value;
    },
    changeWholeState(state,action){
      state.DHL_405= action.payload.DHL_405
      state.CS_308=  action.payload.CS_308
      state.CS_306=  action.payload.CS_306
      state.MATH_305=action.payload.MATH_305
      state.BBA_412= action.payload.BBA_412
      state.IS_401=  action.payload.IS_401
      state.CS_406=  action.payload.IS_402
      state.SE_412=  action.payload.SE_412
      state.SE_410=  action.payload.SE_410
      state.SE_408=  action.payload.SE_408
      state.STAT_402=action.payload.STAT_402
      state.MATH_513=action.payload.MATH_513
      state.IS_402=  action.payload.IS_402
      state.SE_502=  action.payload.SE_502
      state.SE_504=  action.payload.SE_504
      state.SE_506=  action.payload.SE_506
      state.SE_510=  action.payload.SE_510
      state.SE_512=  action.payload.SE_512
      state.SE_514=  action.payload.SE_514
      state.BBA_510= action.payload.BBA_510
    }
  },
});

export const teacherActions = teacherSlice.actions;
export default teacherSlice.reducer;