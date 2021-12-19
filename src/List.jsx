import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

export default function List({ tasks }) {
  return (
    <ol>
      {tasks.map((task) => (
        <Item key={task.id} task={task} />
      ))}
    </ol>
  );
}

List.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
