import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../components/Layout";
import Movies from "../pages/Movies";
import Tv from "../pages/Tv";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/tv" component={Tv} />
          <Route exact path="" component={Movies} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
