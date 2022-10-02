import React from "react";
import "./App.css";
import { PageTitle } from "./components/page-title/PageTitle";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <PageTitle title="Weather App" />
      <Header />
    </div>
  );
}

export default App;
