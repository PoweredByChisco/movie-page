import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import WorkingOn from "../components/WorkingOn";
import Movies from "../pages/Movies";
import Tv from "../pages/Tv";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/workingOn" component={WorkingOn}/>
          <Route exact path="/tv" component={Tv} />
          <Route exact path="" component={Movies} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
