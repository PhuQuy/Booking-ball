import React, { Component } from 'react';

import { Grid, Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import './checkout.scss';

import BookingCard from '../../components/bookingCard';
import VerifyForm from '../../components/verifyForm';

class checkout extends Component {
  render () {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Container maxWidth='lg'>
          <Grid container className={classes.justifyContentCenter} spacing={10}>
            {/* Grid */}
            <Grid item xs={12} sm={10} md={6} >
              <h1 className='checkout-title'>Your booking</h1>
              {/* Card */}
              <BookingCard />
              {/* End Card */}
            </Grid>
            {/* End Grid */}

            {/* Grid */}
            <Grid item xs={12} sm={10} md={6}>
              <h1 className='checkout-title'>Verify order</h1>
              {/* Form */}
              <VerifyForm />
              {/* End Form */}
            </Grid>
            {/* End Grid */}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(checkout);
