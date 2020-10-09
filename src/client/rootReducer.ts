import { combineReducers } from "@reduxjs/toolkit";

import formReducer from "./features/form/formSlice";

const rootReducer = combineReducers({
  form: formReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
