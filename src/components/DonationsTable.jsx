import React from "react";
import { PropTypes } from 'prop-types';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Toolbar, Typography, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const styles = {
  paper: {
    width: '100%',
    marginTop: '10px'
  }
};

const DonationsTable = (props) => {

  const {
    donations,
    onClickAdd,
    onClickRow,
  } = props;

  return (
    <Paper style={styles.paper} >
      <Toolbar >
        <Typography variant="h6" id="tableTitle">
          Donor requests
        </Typography>
        <IconButton onClick={onClickAdd} aria-label="add">
          <AddIcon />
        </IconButton>
      </Toolbar>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Blood type</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {donations && donations.map(donation =>
            <React.Fragment key={donation._id}>
              <TableRow hover={true} onClick={() => onClickRow(donation._id)} >
                <TableCell key={donation.bloodType} component="th" scope="row">
                  {donation.bloodType}
                </TableCell>
                <TableCell key={donation.title} align="right">{donation.title}</TableCell>
                <TableCell key={donation.created_at} align="right">{donation.created_at}</TableCell>
              </TableRow>
            </React.Fragment>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};

DonationsTable.propTypes = {
  donations: PropTypes.array.isRequired,
  onClickAdd: PropTypes.func.isRequired,
  onClickRow: PropTypes.func,
};

export default DonationsTable;