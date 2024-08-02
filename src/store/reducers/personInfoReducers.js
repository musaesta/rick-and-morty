import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personInfoState: {},
};

const personInfoReducer = createSlice({
  name: "personInfo",
  initialState,
  reducers: {
    setPersonInfo: (state, action) => {
      state.personInfoState = { ...action.payload };
    },
  },
});
const { reducer, actions } = personInfoReducer;
export const { setPersonInfo } = actions;

export default reducer;
