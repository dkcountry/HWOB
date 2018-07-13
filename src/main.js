import React from 'react';
import { Switch, Route } from 'react-router-dom'
import DashBoard from "./components/dashBoard";
import Documents from "./components/documents";
import { BrowserRouter as Router} from 'react-router-dom';


const RouteHandler = () => (
  <main >
    <Switch>
      <Route exact path='/' component={DashBoard}/>
      <Route path="/documents" component={Documents}/>
    </Switch>
  </main >
)

export default RouteHandler;