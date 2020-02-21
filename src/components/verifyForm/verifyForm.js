import React from 'react';

import {
  Grid,
  Box,
  TextField,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  Button
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { makeStyles } from "@material-ui/core/styles";

import './verifyForm.scss';

const useStyles = makeStyles(theme => ({
  btn: {
    backgroundColor: '#007838',
    borderRadius: 50,
    width: '100%',
    textTransform: 'capitalize'
  }
}));

export default function VerifyForm () {
  const classes = useStyles();
  return (
    <Grid alignItems='center' container spacing={3}>
      <Grid item xs={12} sm={12} md={8}>
        <TextField
          fullWidth
          type='text'
          label='Your name'
          placeholder='Enter your name here'
          InputLabelProps={{
            shrink: true
          }}
        />
      </Grid>

      <Grid item xs={12} sm={12} md={8}>
        <TextField
          fullWidth
          label='Phone number'
          type='text'
          helperText="Dont't get a code in your phone? Try again after 30s"
          placeholder='Enter your phone number here'
          InputLabelProps={{
            shrink: true
          }}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Button variant='contained' color={'primary'} className={classes.btn}>
          Get code
        </Button>
      </Grid>

      <Grid item xs={12} sm={12} md={8}>
        <FormControl fullWidth>
          <InputLabel shrink={true}>Verified code</InputLabel>
          <Input
            type='text'
            placeholder='Enter verified code'
            endAdornment={
              <InputAdornment position='end'>
                <CheckCircleIcon style={{ color: '#007838' }}></CheckCircleIcon>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Button variant='contained' color={'primary'} className={classes.btn}>
          Verify
        </Button>
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <Box mt={3}>
          <Button variant='contained' color={'primary'} className={classes.btn}>
            COMPLETE
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
