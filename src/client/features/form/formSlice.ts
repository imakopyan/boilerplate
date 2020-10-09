import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";

interface FormState {
  formKey: number;
  formData: any;
  schema: any;
  uiSchema: any;
  // serverError: string | null;
  // serverSuccessMessage: string | null;
  // submitting: boolean;
}

const initialState: FormState = {
  formKey: Date.now(),
  formData: null,
  schema: null,
  uiSchema: null,
  // serverError: null,
  // serverSuccessMessage: null,
  // submitting: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    formDataChange(state, action: PayloadAction<any>) {
      state.formData = action.payload;
      // state.serverSuccessMessage = null;
      // state.serverError = null;
    },
    setForm(state, action: PayloadAction<any>) {
      state.formKey = action.payload.value;
      state.formData = action.payload.form.formData;
      state.schema = action.payload.form.schema;
      state.uiSchema = action.payload.form.uiSchema;
    },
  },
});

export const { formDataChange, setForm } = formSlice.actions;

export const getForm = (value: any): AppThunk => async (dispatch) => {
  try {
    const form = await await fetch(
      "/forms?" + new URLSearchParams({ form: value })
    );
    const newServerResult = await form.json();
    dispatch(setForm({ value, form: newServerResult }));
  } catch (err) {
    console.log(err);
  }
};

export default formSlice.reducer;
