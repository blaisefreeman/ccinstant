import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppContainer from "./Containers/AppContainer.js"
import "./App.css";

function App() {

  const leftDrawerWidth = 240;
  const rightDrawerWidth = 200;
  const maxWidthBody = 840;

  const theme = createMuiTheme({
     palette: {
       primary: green,
       secondary: orange
     },
     breakpoints : {
       values: {
         xs: 0,
         sm: 600,
         md: 720,                                       // right drawer becomes visible
         lg: 720 + leftDrawerWidth,                     // left drawer becomes visible
         xl: 840 + leftDrawerWidth + rightDrawerWidth,  // right drawer fixes to left side of content
       }
     },
     layout: {
       maxWidthBody: maxWidthBody,
       leftDrawerWidth: leftDrawerWidth,
       rightDrawerWidth: rightDrawerWidth,
     }
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer  />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;