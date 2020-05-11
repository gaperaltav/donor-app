import React from 'react';
import { PropTypes } from 'prop-types';
import { Card, CardActionArea, CardContent, Typography } from '@material-ui/core/';

const style = {
  card: {
    width: '100%',
    minHeight: '95px',
    margin: '10px',
    action: {
      height: '100%',
    },
    title: {
      color: '#323232',
    }
  },
};

const DonationCard = (props) => {
  return (
    <Card style={style.card}  >
      <CardActionArea style={style.card.action}>
        <CardContent>
          <Typography style={style.card.title} gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

DonationCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DonationCard;
