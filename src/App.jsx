import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegistrationForm from "./pages/registration";
import Details from "./pages/details";
import Update from "./pages/profileUpdate";
// import Update from "./Update";
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
