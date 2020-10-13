import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "@rjsf/material-ui";
import { formDataChange, getForm } from "./formSlice";
import { RootState } from "../../rootReducer";

type FormGeneratorType = {
  schema: object;
  uiSchema: object;
  formData: object;
}

export default function FormGenerator({schema, uiSchema, formData}: FormGeneratorType) {
  const dispatch = useDispatch();

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
