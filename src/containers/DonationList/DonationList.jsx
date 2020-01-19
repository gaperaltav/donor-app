import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { propTypes } from './propTypes';
import { Box } from '@material-ui/core';
import { getDonationRequests } from 'store/actions/donationRequests';
import DonationsTable from 'components/donationsTable';
import CreateDonationModal from '../createDonationModal';

class DonationList extends Component {

  state = {
    showAddModal: false,
  }

  componentDidMount = () => {
    this.props.getDonationRequests();
  }

  handlerShowAddModal = () =>
    this.setState({ showAddModal: !this.state.showAddModal });

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
},
  dispatch
);

DonationList.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(DonationList);


