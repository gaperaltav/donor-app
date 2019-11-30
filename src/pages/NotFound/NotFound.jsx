import React from 'react';
import { Navbar } from 'components';
import { Container } from '@material-ui/core';
import style from './style';

const NotFound = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container style={style.container} >
        <img style={style.img} src="/img/404.jpg" ></img>
      </Container>
    </ React.Fragment>
  );
};

export default NotFound;