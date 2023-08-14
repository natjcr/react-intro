import React from 'react';
import './TodoSearch.css'

function TodoSearch() { //estado inmutable
  const [searchValue, setSearchValue] = React.useState('');

  console.log('usuarios buscan ' + searchValue)

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