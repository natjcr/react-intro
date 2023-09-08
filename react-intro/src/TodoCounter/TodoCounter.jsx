import React from 'react';
import './TodoCounter.css'

function TodoCounter({ completedTodos,
  totalTodos, loading }) {
  
    return(
      <>
      {totalTodos === completedTodos && (
        <h2 className='TodoCounter'>¡Felicidades, completaste todos las tareas!</h2>
      )}
      {totalTodos !== completedTodos && (
      <h1 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
        Has Completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
      </h1>
      )}
    </>
    );

  }

export { TodoCounter }