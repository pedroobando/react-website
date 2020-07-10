import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Contacts from "./components/pages/Contacts";
import Details from "./components/pages/Details";
import NotFoundPage from "./components/pages/NotFoundPage";
import News from "./components/pages/News";

const App = () => (
  <React.Fragment>
    <Navbar />
    <Switch>
      <Route path="/news" component={News} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/details" component={Details} />
      <Route path="/" component={Home} />
      <Route component={NotFoundPage} />
    </Switch>
    <Footer />
  </React.Fragment>
);

export default App;
