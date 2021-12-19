import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import List from './List';

export default function Page({
  taskTitle, onChange, onClick, tasks,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <Input value={taskTitle} onChange={onChange} onClick={onClick} />
      <List tasks={tasks} />
    </div>
  );
}

Page.propTypes = {
  taskTitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
