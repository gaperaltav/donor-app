import React, { Fragment } from 'react';
import { Container } from '@material-ui/core';
import Navbar from 'components/Navbar';
import DonationDetail from 'containers/DonationDetail';

const DonationDetailPage = () => (
  <Fragment>
    <Navbar />
    <Container>
      <DonationDetail />
    </Container>
  </Fragment>
);

export default DonationDetailPage;