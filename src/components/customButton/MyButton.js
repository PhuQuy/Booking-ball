import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    background: '#007838',
    border: 0,
    borderRadius: 35,
    color: 'white',
    height: 40,
    padding: '0 19px'
  }
}));

export default function MyButton(props) {
    const { color, ...other } = props;
  const classes = useStyles();
  return (
      <Button className={classes.root} {...other}/>
  );
};