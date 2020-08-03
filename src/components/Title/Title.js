import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ text }) => <h1 className="Title">{text}</h1>;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
