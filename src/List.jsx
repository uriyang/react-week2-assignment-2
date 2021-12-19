import React from 'react';
import PropTypes from 'prop-types';

export default function List({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <p key={task.id}>
          {task.title}
        </p>
      ))}
    </div>
  );
}

List.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
