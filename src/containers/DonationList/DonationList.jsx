import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { propTypes } from './propTypes';
import { Box } from '@material-ui/core';
import { getDonations } from 'store/actions/donations';
import DonationsTable from 'components/donationsTable';
import CreateDonationModal from '../createDonationModal';

class DonationList extends Component {

  state = {
    showAddModal: false,
  }

  componentDidMount = () => {
    this.props.getDonations();
  }

  handlerShowAddModal = () =>
    this.setState({ showAddModal: !this.state.showAddModal });

  render() {
    const { donations } = this.props;
    const { showAddModal } = this.state;
    return (
      <React.Fragment>
        <Box display="flex" flexDirection="column" >
          <DonationsTable
            donations={donations}
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

const mapStateToProps = ({ donations }) => ({
  donations: donations.data,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getDonations,
},
  dispatch
);

DonationList.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(DonationList);


