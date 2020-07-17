import PropTypes from 'prop-types';


export const studentType = PropTypes.objectOf(
    PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        img: PropTypes.string,
        color: PropTypes.string,
        rating: PropTypes.number,
        age: PropTypes.number,
        spec: PropTypes.string,
        group: PropTypes.string
    })
);