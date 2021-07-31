import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import CTA from "./components/CTA/CTA";
import Home from "./views/Home";

const App = () => {
  return (
    <div className="App flex flex-col items-center">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/app" component={App} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
