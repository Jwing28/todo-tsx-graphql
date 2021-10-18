import React, { useState } from 'react';
import AddTodo from './AddTodo';
import Todo, { ITodo } from './Todo';

interface ITodos extends Array<ITodo> {}

/**
 * Container for todos app.
 * Maintains the state of todos (for now)
 */
const Todos = () => {
  const [todos, setTodos] = useState<ITodos>([]);
  const [todo, setTodo] = useState<ITodo>({ description: '', id: -1 });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ id: 0, description: e.target.value });
  };

  const handleComplete = (id: number) => {
    // todo: have complete and incomplete... later
  };

  const handleDelete = (id: number) => {
    // use id to remove the todo...
    const updatedTodos: ITodos = todos.filter((todo: ITodo) => todo.id === 0);
    setTodos(updatedTodos);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // add todo
    const newTodos: ITodos = todos.slice().concat(todo);
    setTodos(newTodos);
  };

  <div>
    <h2>You have ${todos.length} todos</h2>
    <form onSubmit={handleSubmit}>
      {todos.map((todo, idx) => (
        <Todo todo={todo} onComplete={handleComplete} onDelete={handleDelete} />
      ))}
      <AddTodo onChange={handleChange} value={todo.description} />
    </form>
  </div>;
};

export default Todos;
