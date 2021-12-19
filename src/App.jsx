import React from 'react';

import Page from './Page';

export default function App() {
  const tasks = [
    { id: 1, title: '아무 것도 하지 않기 #1' },
    { id: 2, title: '아무 것도 하지 않기 #2' },
  ];

  function handleClick() {
    // TODO: 할 일 추가
  }

  return (
    <Page tasks={tasks} onClick={handleClick} />
  );
}
