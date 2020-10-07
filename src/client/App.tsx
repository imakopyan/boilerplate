import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Box from '@material-ui/core/Box';

import React, { useEffect, useState } from "react";
import "./App.css";


function App() {
  const [serverResult, setServerResult] = useState<any | null>(null);
  const [value, setValue] = React.useState('form1');

  useEffect(() => {
    (async () => {
      const result = await fetch("/forms?" + new URLSearchParams({ form: value }));
      const newServerResult = await result.json();
      setServerResult(newServerResult);
    })();
  }, [value]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="App">
        <AppBar position="static">
            <Tabs  value={value} onChange={handleChange} >
              <Tab label="Форма 1" value="form1"/>
              <Tab label="Форма 2" value="form2"/>
              <Tab label="Форма 3" value="form3"/>
            </Tabs>
          </AppBar>
          <div role="tabpanel">
          <Box p={3}>
            {serverResult && serverResult.title}

          </Box>
        </div>

      </div>

  );
}

export default App;