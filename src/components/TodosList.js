import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList({ todos }) {
  TodosList.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    todos: PropTypes.array.isRequired,
  };

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodosList;
