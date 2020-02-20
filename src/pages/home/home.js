import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import React, { Component } from "react";
import "./home.scss";

export default class home extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          {/* <CenteredGrid />
          <SelectForm/>
          <TemporaryDrawer/> */}
        </Container>
      </React.Fragment>
    );
  }
}
