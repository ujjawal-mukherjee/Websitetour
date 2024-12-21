import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
function App() {
  console.log("App component is rendered!");
  return (  // Add the return statement to render the JSX
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;