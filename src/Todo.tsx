import React from 'react';

interface ATodo {
  description: string;
  id: number;
}

const Todo = ({
  todo,
  onComplete,
  onDelete,
}: {
  todo: ATodo;
  onComplete: () => {};
  onDelete: () => {};
}) => (
  <div>
    <div>{todo}</div>
    <div>
      <button onClick={onComplete}>Completed</button>
      <button onClick={onDelete}>X</button>
    </div>
  </div>
);

export default Todo;
