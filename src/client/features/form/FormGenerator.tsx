import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "@rjsf/material-ui";
import { formDataChange, getForm } from "./formSlice";
import { RootState } from "../../rootReducer";

export default function FormGenerator(props: any) {
  const dispatch = useDispatch();
  const { formKey, formData, schema, uiSchema } = useSelector((state: RootState) => state.form);
  useEffect(() => {
    dispatch(getForm(props.value));
  }, []);

  if (!schema) return null 
  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      formData={formData}
      onSubmit={() => console.log(formData)}
      onChange={({ formData }) => dispatch(formDataChange(formData))}
    />
  );
}
