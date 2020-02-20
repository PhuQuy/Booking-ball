import { Button, Icon } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    borderRadius: 40,
    width: 500
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  border40px: {
    borderRadius: 40
  }
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper
      component="form"
      className={classes.root}
      textAlign="center"
      style={{ margin: "0 auto" }}
    >
      <InputBase
        className={classes.input}
        placeholder="City, District, Address, "
        inputProps={{ "aria-label": "search google maps" }}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.button, classes.border40px}
        endIcon={<SearchIcon />}
      >
        Send
      </Button>
    </Paper>
  );
}
