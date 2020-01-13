import React, { Component } from 'react';
import BaseModal from 'components/baseModal/BaseModal';
import { propTypes } from "./propTypes";

class CreateDonationModal extends Component {
  render() {
    const { showAddModal } = this.props;
    return (
      <BaseModal
        open={showAddModal}
      >
      </BaseModal>
    );
  }
}

CreateDonationModal.propTypes = propTypes;

export default CreateDonationModal;