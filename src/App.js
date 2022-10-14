import React from "react";
import Header from "./components/Header";
import {Container} from './components/styles/Container.styled'
import { ThemeProvider } from "styled-components";
import GlobalStyles
from "./components/styles/Global";
import Emailbox from "./components/email/Emailbox";
import Apicall from "./components/firefolder/Apicall";

const theme = {
  colors: {
    header: '#defbe8',
    body: '#defbe8',
    footer: '#defbe8',
    primary:  '#defbe8',
    secondary:  '#ff00b8',
    accent: '#ff00b8', 
    paragraph: '#470033'
  },
}



function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        <Apicall />
        <h1>join the aesticult, pursue the science of aestiology</h1> 
     </Container>
     <p><Emailbox /></p>
    </ThemeProvider>
  );
}

export default App;