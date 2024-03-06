import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import Details from "./Details";
import Update from "./Update";
import { RegistrationProvider } from "./context";

function App() {
  return (
    <Router>
      <RegistrationProvider>
        <Route path="/" exact component={RegistrationForm} />
        <Route path="/details" component={Details} />
        <Route path="/update" component={Update} />
      </RegistrationProvider>
    </Router>
  );
}

export default App;
