import React from 'react';
import PropTypes from 'prop-types';

export default function Item({ task: { id, title } }) {
  return (
    <li>
      {id}
      -
      {title}
    </li>
  );
}

Item.propTypes = {
  task: PropTypes.arrayOf(PropTypes.object).isRequired,
};
