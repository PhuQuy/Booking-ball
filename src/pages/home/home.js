import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import React, { Component } from "react";
import CenteredGrid from "../../components/gridTest";
import "./home.scss";
import SelectForm from "../../components/selectForm/selectForm";
import TemporaryDrawer from "../../components/drawer/drawer";

export default class home extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <CenteredGrid />
          <SelectForm/>
          <TemporaryDrawer/>
        </Container>
      </React.Fragment>
    );
  }
}
