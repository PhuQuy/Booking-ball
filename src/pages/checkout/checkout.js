import React, { Component } from 'react';

import {
  Grid,
  Container,
  Card,
  CardContent,
  Box,
  TextField,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  Button,
  IconButton
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import './checkout.scss';

class checkout extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Container maxWidth='lg'>
          <Grid container className={classes.justifyContentCenter} spacing={10}>
            {/* Grid */}
            <Grid item xs={12} sm={10} md={6}>
              <h1 className='checkout-title'>Your booking</h1>
              {/* Card */}
              <Card className='booking-card'>
                <CardContent className='booking-card-content'>
                  <Box px={3} py={1} mt={2} className='football-field-name'>
                    OLD TRAFFORD STADIUM
                  </Box>
                  <Box className='information' mt={3} px={3}>
                    <Grid container spacing={5}>
                      <Grid className={classes.pb2} item xs={12} sm={6} pb={0}>
                        <Box className='time'>Friday, 13th, Jan 03.2020</Box>
                      </Grid>
                      <Grid className={classes.pb2} item xs={12} sm={4} md={5}>
                        <Box className='time-label'>17:00-18:00</Box>
                      </Grid>
                      <Grid className={classes.pb2} item xs={12} sm={6}>
                        <Box
                          display='flex'
                          alignItems='center'
                          className='ground'>
                          <Box className='ground-label'>G1</Box>
                          <Box className='ground-name'>Ground G1</Box>
                        </Box>
                      </Grid>
                      <Grid className={classes.pb2} item xs={12} sm={6}>
                        <Box className='customer-name'>
                          <span>Your name</span>
                          <h5>Jack London</h5>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box
                          display='flex'
                          alignItems='center'
                          className='verify'>
                          <Box className='verify-label'></Box>
                          <Box className='verify-status'>
                            Verify order booking
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
              {/* End Card */}
            </Grid>
            {/* End Grid */}
            {/* Grid */}
            <Grid item xs={12} sm={10} md={6}>
              <h1 className='checkout-title'>Verify order</h1>

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
                  <Button variant='contained' color={'primary'} className='btn'>
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
                          <CheckCircleIcon
                            style={{ color: '#007838' }}></CheckCircleIcon>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <Button variant='contained' color={'primary'} className='btn'>
                    Verify
                  </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                  <Box mt={3}>
                    <Button
                      variant='contained'
                      color={'primary'}
                      className='btn'>
                      COMPLETE
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {/* End Grid */}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(checkout);
