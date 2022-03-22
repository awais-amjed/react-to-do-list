import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo }) {
  TodoItem.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    todo: PropTypes.object.isRequired,
  };

  return <li>{todo.title}</li>;
}

export default TodoItem;
