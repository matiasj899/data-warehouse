import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../src/components/Login";
import Contactos from "../src/components/Contactos";
import clienteAxios from "../src/config/axios";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Contactos" component={Contactos} />
      </Switch>
    </Router>
  );
}

export default App;
