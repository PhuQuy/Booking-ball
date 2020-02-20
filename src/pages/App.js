import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#007838"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#fff",
      main: "#fff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#fff"
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
});
const Home = lazy(() => import("./home"));
const ContactUs = lazy(() => import("./contactUs"));
const Checkout = lazy(() => import("./checkout"));

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Suspense>
    </Router>
  </ThemeProvider>
);

export default App;
