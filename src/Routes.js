import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        </Router>
  );
}

