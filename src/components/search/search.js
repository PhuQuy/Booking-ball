import React, { Component } from "react";
import "./search.scss";
import { Container, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import CustomizedInputBase from "../customizedInputBase/customizedInputBase";

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as searchActions from "../../store/search/actions";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  fullHeigh: {
    height: "80vh"
  },
  maxHeight: {
    height: "100%"
  }
}));
export default function Search() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        src="https://www.gideonsweet.com/wp-content/uploads/2019/10/1-tran-bong-da-bao-nhieu-phut-1024x640.jpg"
        className="mh"
      ></img>
      <Container className={classes.fullHeigh}>
        <Box display="flex" className={classes.maxHeight} alignItems="center">
          <Box
            textAlign="center"
            style={{ width: "100%" }}
          >
            <Box>
              <Typography variant="h4" color="secondary">
                Finding, Booking and Playing
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" color="secondary">
                The only website allow player booking the vsoocer ground online
              </Typography>
            </Box>
            <Box textAlign="center">
                <CustomizedInputBase></CustomizedInputBase>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

// export default connect(
//     ({ search }) => ({ ...search }),
//     dispatch => bindActionCreators({ ...searchActions }, dispatch)
//   )( search );
