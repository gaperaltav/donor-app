import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { propTypes } from './propTypes';
import { Box } from '@material-ui/core';
import { getDonations } from 'store/actions/donations';
import DonationsTable from 'components/donationsTable';

class DonationList extends Component {

  componentDidMount() {
    this.props.getDonations();
  }

  render() {
    const { donations } = this.props;
    return (
      <Box display="flex" flexDirection="column" >
        <DonationsTable
          donations={donations}
        />
      </Box>
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


