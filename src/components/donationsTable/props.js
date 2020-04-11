import PropTypes from 'prop-types';

const propTypes = {
    donations: PropTypes.array.isRequired,
    onClickAdd: PropTypes.func.isRequired,
    onClickRow: PropTypes.func,
};

export {
    propTypes,
  };
  