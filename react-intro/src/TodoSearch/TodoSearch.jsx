import React from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext/TodoContext';

function TodoSearch() { //estado inmutable
  const {
    searchValue, setSearchValue
  }= React.useContext(TodoContext);
  
    return(
      <input className='TodoSearch'
        placeholder='Tareas Pendientes' 
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value)
      }}
      />
    );
  }

export { TodoSearch }