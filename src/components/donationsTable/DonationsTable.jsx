import React from "react";
import { propTypes } from './props';
import style from './style';
import { Table, TableHead, TableRow, TableCell, TableBody, Paper, Toolbar, Typography, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { withRouter } from "react-router-dom";

const DonationsTable = (props) => {

  const onClickRowHandler = () => {
    props.history.push('/detail');
  };

  const {
    donations,
    onClickAdd,
  } = props;

  return (
    <Paper style={style.paper} >
      <Toolbar >
        <Typography variant="h6" id="tableTitle">
          Donor requests
        </Typography>
        <IconButton onClick={onClickAdd} aria-label="add">
          <AddIcon />
        </IconButton>
      </Toolbar>
      <Table style={style.Table} >
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
              <TableRow hover={true} onClick={onClickRowHandler} >
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

DonationsTable.propTypes = propTypes;

export default withRouter(DonationsTable);