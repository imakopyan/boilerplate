import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Box from "@material-ui/core/Box";
import FormGenerator from "./features/form/FormGenerator";

import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("form1");

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
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
          <FormGenerator key={value} value={value} />
        </Box>
      </div>
    </div>
  );
}

export default App;
