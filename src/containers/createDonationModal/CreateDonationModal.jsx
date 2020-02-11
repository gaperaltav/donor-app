import React, { Component } from 'react';
import BaseModal from 'components/baseModal/BaseModal';
import { propTypes } from "./propTypes";
import { TextField, Typography, Button, Select, InputLabel, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  updateDonationRequestTitle,
  updateDontaionRequestDescription,
  updateDontaionRequestBloodType,
} from 'store/actions/donationRequest';
import { bloodTypes } from 'common/constants/bloodTypes';

class CreateDonationModal extends Component {

  handlerTitleChanged = (event) =>
    this.props.updateDonationRequestTitle(event.target.value);

  handlerDescriptionChanged = (event) =>
    this.props.updateDontaionRequestDescription(event.target.value);

  handlerBloodTypeChanged = (event) =>
    this.props.updateDontaionRequestBloodType(event.target.value)

  canSubmit = () => {
    const { title, description, bloodType } = this.props.donationRequest;
    return title.trim() !== '' && description.trim() !== '' && bloodType !== '';
  };

  handlerSubmitCreateDonation = () => {
    const { donationRequest } = this.props;
    this.props.onSubmitModal(donationRequest);
  }

  render() {
    const {
      showAddModal,
      onCancelModal,
      donationRequest
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
            value={donationRequest.title}
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
            value={donationRequest.description}
            onChange={this.handlerDescriptionChanged}
          />
        </div>
        <div>
          <InputLabel>Blood Type</InputLabel>
          <Select
            value={donationRequest.bloodType}
            onChange={this.handlerBloodTypeChanged}
          >
            <MenuItem
              value={null}
            >
              Select a type...
              </MenuItem>
            {bloodTypes.map((type, index) =>
              <MenuItem
                key={index}
                value={type.value}
              >
                {type.value}
              </MenuItem>)}
          </Select>
        </div>
        <div>
          <Button variant="contained" onClick={onCancelModal}>Cancel</Button>
          <Button
            variant="contained"
            disabled={!this.canSubmit()}
            color="primary"
            onClick={this.handlerSubmitCreateDonation}
          >
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
  updateDontaionRequestBloodType,
},
  dispatch
);

CreateDonationModal.propTypes = propTypes;

export default connect(mapStateToprops, mapDispacthToProps)(CreateDonationModal);