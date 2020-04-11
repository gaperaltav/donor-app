import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { propTypes } from './propTypes';
import { Box } from '@material-ui/core';
import { getDonationList, resetDonationList } from 'store/actions/donationList';
import DonationsTable from 'components/donationsTable';
import CreateDonationModal from '../createDonationModal';
import { createDonationRequest, resetDonationRequestToinitalState } from "store/actions/donationRequest";
import { withRouter } from "react-router-dom";

class DonationList extends Component {

  state = {
    showAddModal: false,
  }

  componentDidMount = () => {
    this.props.getDonationRequests();
  }

  onClickRowHandler = (id) => {
    this.props.history.push(`/detail/${id}`);
  };

  componentWillUnmount = () => {
    this.props.resetDonationList();
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
    const { donationList } = this.props;
    const { showAddModal } = this.state;
    return (
      <React.Fragment>
        <Box display="flex" flexDirection="column">
          <DonationsTable
            donations={donationList}
            onClickAdd={this.handlerShowAddModal}
            onClickRow={this.onClickRowHandler}
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

const mapStateToProps = ({ donationList }) => ({
  donationList: donationList.data,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getDonationRequests: getDonationList,
  resetDonationRequest: resetDonationRequestToinitalState,
  resetDonationList,
  createDonationRequest,
},
  dispatch
);

DonationList.propTypes = propTypes;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DonationList));


