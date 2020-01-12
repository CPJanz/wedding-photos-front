import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Gallery from "../Gallery/Gallery";
import Loading from "../Loading/Loading";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome</h1>
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;