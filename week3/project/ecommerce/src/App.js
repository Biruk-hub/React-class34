import React from "react";
import AppProvider from "./provider";
import ApplicationRouter from "./router";

const App = () => {
  return (
    <AppProvider>
      <ApplicationRouter />
    </AppProvider>
  );
};

export default App;
