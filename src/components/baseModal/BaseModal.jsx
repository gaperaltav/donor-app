import React from 'react';
import Modal from '@material-ui/core/Modal';
import { propTypes } from './propTypes';
import style from "./style.js";
import { Paper, Fade } from '@material-ui/core';

const baseModal = (props) => {
  const { open, onClose } = props;
  return (
    <Modal
      open={open}
      onClose={onClose}
      style={style.modal}
    >
      <Fade in={open}>
        <Paper style={style.paper} >
          {props.children}
        </ Paper>
      </Fade>
    </Modal>
  );
};

baseModal.propTypes = propTypes;

export default baseModal;