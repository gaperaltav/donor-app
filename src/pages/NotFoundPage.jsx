import React from 'react';
import { Navbar } from 'components';
import { Container } from '@material-ui/core';

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    width: '50%',
    marginTop: '35px',
  }
};

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container style={style.container} >
        <img style={style.img} src="/img/404.jpg" ></img>
      </Container>
    </ React.Fragment>
  );
};

export default NotFoundPage;