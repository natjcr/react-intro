import './TodoCounter.css'

function TodoCounter({ total, completed }) {
    return(
      <>
      {total === completed && (
        <h2 className="TodoCounter">¡Felicidades, completaste todos las tareas!</h2>
      )}
      {total !== completed && (
      <h1 className='TodoCounter'>
        Has Completado <span>{completed}</span> de <span>{total}</span> TODOs
      </h1>
      )}
    </>
    );

  }

export { TodoCounter }