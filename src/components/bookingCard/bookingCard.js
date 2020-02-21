import React from 'react';
import './bookingCard.scss';

import { Grid, Card, CardContent, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  pb2: {
    paddingBottom: '5px !important'
  }
}));

export default function BookingCard () {
  const classes = useStyles();
  return (
    <Card className='booking-card'>
      <CardContent className='booking-card-content'>
        <Box fontSize={20} px={3} py={1} mt={2} className='football-field-name'>
          OLD TRAFFORD STADIUM
        </Box>
        <Box className='information' mt={3} px={3}>
          <Grid container spacing={5}>
            <Grid className={classes.pb2} item xs={12} sm={6} pb={0}>
              <Box className='time'>Friday, 13th, Jan 03.2020</Box>
            </Grid>
            <Grid className={classes.pb2} item xs={12} sm={4} md={5}>
              <Box py={1} fontWeight="bold" borderRadius={50} textAlign="center" className='time-label'>17:00-18:00</Box>
            </Grid>
            <Grid className={classes.pb2} item xs={12} sm={6}>
              <Box display='flex' alignItems='center' className='ground'>
                <Box py={1} px={4} fontWeight="bold" borderRadius={50} mr={2} className='ground-label'>G1</Box>
                <Box fontSize={17} className='ground-name'>Ground G1</Box>
              </Box>
            </Grid>
            <Grid className={classes.pb2} item xs={12} sm={6}>
              <Box borderBottom={1} className='customer-name'>
                <Box fontSize={14}>Your name</Box>
                <Box fontSize={18} m={0} py={1} fontWeight='bold'>Jack London</Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box fontWeight="bold" fontSize={15} display='flex' alignItems='center' className='verify'>
                <Box mr={1} width={10} height={10} className='verify-label' border={1} borderRadius="50%"></Box>
                <Box className='verify-status'>Verify order booking</Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
}
