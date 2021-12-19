import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    newId: 100,
    tasks: [
      { id: 1, title: '아무 것도 하지 않기 #1' },
      { id: 2, title: '아무 것도 하지 않기 #2' },
    ],
  });

  const { tasks, newId } = state;

  function handleClick() {
    setState({
      newId: newId + 1,
      tasks: [...tasks, { id: newId, title: 'new task' }],
    });
  }

  return (
    <Page tasks={tasks} onClick={handleClick} />
  );
}
