import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Home = lazy(() => import("./home"));
const ContactUs = lazy(() => import("./contactUs"));

const App = () => (
  <Router>
  <NavBar />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact-us" component={ContactUs} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
