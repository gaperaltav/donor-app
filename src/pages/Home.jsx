import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from 'components/Navbar';
import DonationList from 'containers/DonationList';

const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <DonationList />
      </Container>
    </ React.Fragment>
  );
};

export default HomePage;