import React, { useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

interface TodoId {
  idx: number;
}

/**
 * Container for todos app.
 * Maintains the state of todos (for now)
 */
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleComplete = (idx: TodoId) => {
    // todo: have complete and incomplete... later
  };

  const handleDelete = (idx: TodoId) => {
    // use id to remove the todo...
  };

  const handleSubmit = () => {};

  <div>
    <h2>You have ${} todos</h2>
    <form>
      {todos.map((todo, idx) => (
        <Todo todo={todo} onComplete={} onDelete={} />
      ))}
      <AddTodo onChange={handleChange} value={todo} />
    </form>
  </div>;
};

export default Todos;
