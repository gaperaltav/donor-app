import { PropTypes } from 'prop-types';

export const propTypes = {
    showAddModal: PropTypes.boolean,
    onCancelModal: PropTypes.func.isRequired,
    onSubmitModal: PropTypes.func.isRequired,
};
