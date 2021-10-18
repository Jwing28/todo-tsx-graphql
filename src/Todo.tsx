import React from 'react';

export interface ITodo {
  description: string;
  id: number;
}

const Todo = ({
  todo,
  //   onComplete,
  onDelete,
}: {
  todo: ITodo;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}) => (
  <div>
    <div>{todo.description}</div>
    <div>
      {/* <button onClick={() => onComplete(todo.id)}>Completed</button> */}
      <button onClick={() => onDelete(todo.id)}>X</button>
    </div>
  </div>
);

export default Todo;
