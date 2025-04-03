import React from "react";

import { Global, ThemeProvider } from "@emotion/react";

import { globalStyles, theme } from "./styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
    </ThemeProvider>
  );
};

export default App;
