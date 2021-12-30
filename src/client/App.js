import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import TestComponent from "./components/TestComponent/TestComponent";
import Meals from "./components/Meals/Meals";
import Footer from "./components/Footer/Footer";
import { Context, ContextProvider } from "./components/Context";

import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  const bucket = {
    searchValue,
    setSearchValue,
  };
  return (
    <ContextProvider value={bucket}>
      <Router>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/meals">
          <Meals />
        </Route>
        <Route exact path="/meals/:id">
          <p> ID:1 Koshary </p>
        </Route>
        <Route exact path="/test-component">
          <TestComponent />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Footer />
      </Router>
    </ContextProvider>
  );
}

export default App;
