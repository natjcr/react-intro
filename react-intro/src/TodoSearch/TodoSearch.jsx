import React from 'react';
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }) { //estado inmutable
  
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