import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from "react-router-dom";
import './NavBar.scss'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);
const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState(true);
  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const openLogin = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };
  const handleChange = () => event => {
    setState(event.target.checked);
  };
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" noWrap className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </Typography>
                <Typography variant="h6" noWrap className="nav-item">
                    <Link to="/contact-us" className="nav-link">Contact Us</Link>
                </Typography>
                <Button color="inherit" onClick={openLogin}>Login</Button>
                <Dialog
                  fullScreen={fullScreen}
                  open={open}
                  onClose={close}
                  aria-labelledby="responsive-dialog-title"
                >
                  <DialogTitle id="responsive-dialog-title">{"Dialog Title"}</DialogTitle>
                  <DialogContent>
                    <FormControl className={classes.margin}>
                      <TextField
                        className={classes.margin}
                        id="outlined-secondary"
                        label="Phone Number"
                        variant="outlined"
                        endAdornment={
                          <InputAdornment position="end">
                              <AccountCircle />
                          </InputAdornment>
                        }
                      />
                         <TextField
                        className={classes.margin}
                        id="outlined-secondary"
                        label="OTP Code"
                        variant="outlined"
                        endAdornment={
                          <InputAdornment position="end">
                              <AccountCircle />
                          </InputAdornment>
                        }
                      />
                      <FormControlLabel
                        control={
                          <GreenCheckbox
                            checked={state}
                            onChange={handleChange()}
                            value="checkedG"
                          />
                        }
                        label="Custom color"
                      />
                      <p>Forgot Password</p>
                      <Button variant="contained" color="primary">LOGIN</Button>
                      <p>Not has an account yet? <a>Sign up now</a></p>
                    </FormControl>
                  </DialogContent>


                  <DialogActions>
                  
                  </DialogActions>

                </Dialog>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default NavBar;