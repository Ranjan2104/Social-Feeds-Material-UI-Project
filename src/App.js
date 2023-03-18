import './App.css';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';
import Feed from './Components/Feed';
import RightBar from './Components/RightBar';
import { Stack } from '@mui/system';
import Add from './Components/Add';
import { useState } from 'react';


function App() {
  const[mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent='space-between'>
          <SideBar mode={mode} setMode={setMode}/>
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
