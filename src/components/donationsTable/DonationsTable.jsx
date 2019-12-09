import React, { Component } from "react";
import { propTypes } from './props';
import style from './style';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@material-ui/core";

class DonationsTable extends Component {
  render() {
    const { donations } = this.props;
    console.log(donations);
    return (
      <Paper style={style.paper} >
        <Table style={style.Table} >
          <TableHead>
            <TableRow>
              <TableCell>Blood type</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Created</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {donations && donations.map((donation) =>
              <TableRow hover={true} key={donation.id} >
                <TableCell key={donation.bloodType} component="th" scope="row">
                  {donation.bloodType}
                </TableCell>
                <TableCell key={donation.title} align="right">{donation.title}</TableCell>
                <TableCell key={donation.created_at} align="right">{donation.created_at}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

DonationsTable.propTypes = propTypes;

export default DonationsTable;