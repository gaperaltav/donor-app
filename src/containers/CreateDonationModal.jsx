import React, { Component } from 'react';
import BaseModal from 'components/BaseModal';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { bloodTypes } from 'common/constants/bloodTypes';
import { TextField, Typography, Button, InputLabel, Select, MenuItem } from '@material-ui/core';
import { Close, Add } from '@material-ui/icons';
import {
  updateDonationRequestTitle,
  updateDontaionRequestDescription,
  updateDontaionRequestBloodType,
} from 'store/actions/donationRequest';

const style = {
  modalActionArea: {
    display: "flex",
    justifyContent: "center",
    marginTop: '20px',
    cancelButton: {
      width: '125px',
    },
    submitButton: {
      width: '125px',
      marginLeft: '10px',
    }
  }
};

class CreateDonationModal extends Component {

  handlerTitleChanged = (event) =>
    this.props.updateDonationRequestTitle(event.target.value);

  handlerDescriptionChanged = (event) =>
    this.props.updateDontaionRequestDescription(event.target.value);

  handlerBloodTypeChanged = (event) =>
    this.props.updateDontaionRequestBloodType(event.target.value);

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
        <Typography variant="h5" >
          New donation request
        </Typography>
        <div>
          <TextField
            required
            id="standard-required"
            label="Title"
            fullWidth
            margin="normal"
            value={donationRequest.title}
            onChange={this.handlerTitleChanged}
            style={style.input}
          />
        </div>
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Description"
            multiline
            fullWidth
            rowsMax="5"
            value={donationRequest.description}
            onChange={this.handlerDescriptionChanged}
          />
        </div>
        <div style={{ marginTop: '18px' }}  >
          <InputLabel>Blood Type</InputLabel>
          <Select
            value={donationRequest.bloodType}
            onChange={this.handlerBloodTypeChanged}
            style={{ width: '100%' }}
          >
            <MenuItem disabled value="">
              <em>Blood types</em>
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
        <div style={style.modalActionArea} >
          <Button
            variant="contained"
            onClick={onCancelModal}
            style={style.modalActionArea.cancelButton}
            color="secondary"
            startIcon={<Close />}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={!this.canSubmit()}
            color="primary"
            onClick={this.handlerSubmitCreateDonation}
            style={style.modalActionArea.submitButton}
            startIcon={<Add />}
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

CreateDonationModal.propTypes = {
  showAddModal: PropTypes.bool.isRequired,
  onCancelModal: PropTypes.func.isRequired,
  onSubmitModal: PropTypes.func.isRequired,

  // mapDispacthToProps
  updateDonationRequestTitle: PropTypes.func.isRequired,
  updateDontaionRequestDescription: PropTypes.func.isRequired,
  updateDontaionRequestBloodType: PropTypes.func.isRequired,

  // mapStateToprops
  donationRequest: PropTypes.object.isRequired,
};

export default connect(mapStateToprops, mapDispacthToProps)(CreateDonationModal);