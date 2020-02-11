import React, { Component } from 'react';
import BaseModal from 'components/baseModal/BaseModal';
import { propTypes } from "./propTypes";
import { TextField, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateDonationRequestTitle, updateDontaionRequestDescription } from 'store/actions/donationRequest';

class CreateDonationModal extends Component {

  handlerTitleChanged = (event) =>
    this.props.updateDonationRequestTitle(event.target.value);

  handlerDescriptionChanged = (event) =>
    this.props.updateDontaionRequestDescription(event.target.value);

  render() {
    const {
      showAddModal,
      onCancelModal,
    } = this.props;

    return (
      <BaseModal
        open={showAddModal}
      >
        <Typography variant="h4" >
          New Donation Request
        </Typography>
        <div>
          <TextField
            required
            id="standard-required"
            label="Title"
            defaultValue=""
            fullWidth
            margin="normal"
            onChange={this.handlerTitleChanged}
          />
        </div>
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Description"
            multiline
            fullWidth
            rowsMax="5"
            defaultValue=""
            onChange={this.handlerDescriptionChanged}
          />
        </div>
        <div>
          <Button variant="contained" onClick={onCancelModal} >Cancel</Button>
          <Button variant="contained" color="primary">
            Create
          </Button>
        </div>
      </BaseModal>
    );
  }
}

const mapStateToprops = ({ donationRequest }) => ({
  donationRequest: donationRequest.data,
});

const mapDispacthToProps = () => (dispatch) => bindActionCreators({
  updateDonationRequestTitle,
  updateDontaionRequestDescription,
},
  dispatch
);

CreateDonationModal.propTypes = propTypes;

export default connect(mapStateToprops, mapDispacthToProps)(CreateDonationModal);