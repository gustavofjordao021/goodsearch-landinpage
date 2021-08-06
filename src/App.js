import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import Footer from "./components/Footer/Footer";
import Application from "./views/Application";

const App = () => {
  return (
    <div className="App flex flex-col items-center">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/app" component={Application} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
