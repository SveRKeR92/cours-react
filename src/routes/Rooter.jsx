import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, {lazy, Suspens} from "react";


import Home from '../pages/Home'
import About from '../pages/About'
import NoMatch from './NoMatch'

const Rooter = () => (
      <Router>
            <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="*" component={NoMatch} />
            </Switch>
      </Router>
)

export default Rooter