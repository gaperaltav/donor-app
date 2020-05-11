import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import DonationDetailPage from 'pages/DonationDetailPage';
import HomePage from 'pages/Home';
import NotFoundPage from 'pages/NotFoundPage';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/detail/:id" component={DonationDetailPage} />

      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default AppRoutes;
