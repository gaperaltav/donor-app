import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import { Home, NotFound, DonationDetail } from 'pages';


const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail" component={DonationDetail} />

      <Route component={NotFound}/>
    </Switch>
  );
};

export default AppRoutes;
