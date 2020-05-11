import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const styles = {
  AppBar: {
    position: 'absolute',
    background : '#6669FF',
  },
};

const Navbar = () => (
  <AppBar style={styles.AppBar} >
    <Toolbar>
      <Typography variant="h4" >
        Donor
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;