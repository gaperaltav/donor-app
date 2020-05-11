import React from 'react';
import Modal from '@material-ui/core/Modal';
import { PropTypes } from 'prop-types';
import { Paper, Fade } from '@material-ui/core';

const styles = {
  paper: {
    width: '30%',
    padding: '15px',
    outline: 'none',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  }
};

const baseModal = (props) => {
  const { open, onClose } = props;

  return (
    <Modal
      open={open}
      onClose={onClose}
      style={styles.modal}
    >
      <Fade in={open}>
        <Paper style={styles.paper} >
          {props.children}
        </ Paper>
      </Fade>
    </Modal>
  );
};

baseModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default baseModal;