import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { propTypes } from './propTypes';
import { Box } from '@material-ui/core';
import { getDonationRequests } from 'store/actions/donationRequests';
import DonationsTable from 'components/donationsTable';
import CreateDonationModal from '../createDonationModal';
import { createDonationRequest, resetDonationRequestToinitalState } from "store/actions/donationRequest";

class DonationList extends Component {

  state = {
    showAddModal: false,
  }

  componentDidMount = () => {
    this.props.getDonationRequests();
  }

  handlerShowAddModal = () => {
    if (this.state.showAddModal) {
      this.props.resetDonationRequest();
    }
    this.setState({ showAddModal: !this.state.showAddModal });
  }


  handlerSubmitModal = (donation) => {
    const { createDonationRequest } = this.props;
    createDonationRequest(donation)
      .then(() => this.handlerShowAddModal());
  }

  render() {
    const { donationRequests } = this.props;
    const { showAddModal } = this.state;
    return (
      <React.Fragment>
        <Box display="flex" flexDirection="column">
          <DonationsTable
            donations={donationRequests}
            onClickAdd={this.handlerShowAddModal}
          />
          <CreateDonationModal
            showAddModal={showAddModal}
            onCancelModal={this.handlerShowAddModal}
            onSubmitModal={this.handlerSubmitModal}
          />
        </Box>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ donationRequests }) => ({
  donationRequests: donationRequests.data,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getDonationRequests,
  createDonationRequest,
  resetDonationRequest: resetDonationRequestToinitalState
},
  dispatch
);

DonationList.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(DonationList);


