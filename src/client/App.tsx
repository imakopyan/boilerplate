import { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Box from "@material-ui/core/Box";
import FormGenerator from "./features/form/FormGenerator";
import { useSelector, useDispatch } from "react-redux";
import { formDataChange, getForm } from "./features/form/formSlice";
import { RootState } from "../client/rootReducer";

import React, { useState } from "react";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(false);
  const { formKey, formData, schema, uiSchema } = useSelector((state: RootState) => state.form);

  useEffect(() => {
    dispatch(getForm(value));
  }, [value]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: any) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Форма 1" value="form1" />
          <Tab label="Форма 2" value="form2" />
          <Tab label="Форма 3" value="form3" />
        </Tabs>
      </AppBar>
      <div role="tabpanel">
        <Box px={24} py={3}>
          {schema && <FormGenerator schema={schema} uiSchema={uiSchema} formData={formData} />}
        </Box>
      </div>
    </div>
  );
}

export default App;
