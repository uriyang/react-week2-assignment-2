import React from 'react';
import PropTypes from 'prop-types';

export default function Item({ title }) {
  return (
    <li>
      {title}
    </li>
  );
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
};
