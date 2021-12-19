import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import List from './List';

export default function Page({ tasks, onClick }) {
  return (
    <div>
      <h1>To-do</h1>
      <Input onClick={onClick} />
      <List tasks={tasks} />
    </div>
  );
}

Page.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired,
};
