import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../src/components/Login";
import Contactos from "../src/components/Contactos";
import Usuarios from "../src/components/Usuarios";
import Company from "../src/components/Company";
import RegionCiudad from "../src/components/RegionCiudad";
import { UserContextProvider } from "./context/LoginContext";
function App() {
  return (
    <UserContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Contactos" component={Contactos} />
          <Route exact path="/Usuarios" component={Usuarios} />
          <Route exact path="/Compañias" component={Company} />
          <Route exact path="/Region-Ciudad" component={RegionCiudad} />
        </Switch>
      </Router>
    </UserContextProvider>
  );
}

export default App;
