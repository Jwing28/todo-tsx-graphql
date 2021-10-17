import React from 'react';

/**
 * Dumb component provides ui to add a todo
 */
const AddTodo = ({
  onChange,
  value,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => (
  <>
    <input onChange={onChange} value={value} placeholder='Enter todo' />
    <button type='submit'>Submit</button>
  </>
);

export default AddTodo;
