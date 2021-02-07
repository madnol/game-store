import React from "react";

//Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";

//STYLES
import GlobalStyles from "./components/GlobalStyles";

//ROUTER
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
