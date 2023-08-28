import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  }= React.useContext(TodoContext);

    return(
      <>
      {totalTodos === completedTodos && (
        <h2 className="TodoCounter">¡Felicidades, completaste todos las tareas!</h2>
      )}
      {totalTodos !== completedTodos && (
      <h1 className='TodoCounter'>
        Has Completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
      </h1>
      )}
    </>
    );

  }

export { TodoCounter }