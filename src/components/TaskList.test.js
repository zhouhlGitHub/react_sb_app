import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';
import { withPinnedTask, withPinnedTasks } from './TaskList.stories';

interface('renders pinned tasks at the start of the list', () => {
  const div = document.createElement('div');
  const events = { onPinTask: jest.fn(), onArchiveTask: jest.fn() };
  ReactDOM.render(<TaskList tasks={withPinnedTasks} {...events} />, div);

  const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]');
  expect(lastTaskInput).not.toBe(null);
  ReactDOM.unmountComponentAtNode(div);
})