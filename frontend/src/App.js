import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../src/components/Login";
import Contactos from "../src/components/Contactos";
import Usuarios from "../src/components/Usuarios";
import Company from "./components/Company";
import RegionCiudad from "../src/components/RegionCiudad";
import { UserContextProvider } from "./context/LoginContext";
import DeleteModal from "./components/DeleteModal";
import DeleteContacts from "./components/DeleteContacts";
import EditContact from "./components/EditContact";
function App() {
  return (
    <UserContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Contactos" component={Contactos} />
          <Route exact path="/Contactos/:id" component={DeleteContacts} />
          <Route exact path="/Contactos/Edit/:id" component={EditContact} />
          <Route exact path="/Usuarios" component={Usuarios} />
          <Route exact path="/Usuarios/:id" component={DeleteModal} />
        
          <Route exact path="/Compañias" component={Company} />
          <Route exact path="/Region-Ciudad" component={RegionCiudad} />
        </Switch>
      </Router>
    </UserContextProvider>
  );
}

export default App;
