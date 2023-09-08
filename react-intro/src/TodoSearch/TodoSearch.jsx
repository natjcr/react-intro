import React from 'react';
import './TodoSearch.css'


function TodoSearch({
  searchValue, setSearchValue}) { //estado inmutable
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
    console.log(event.target.value)
  }
  
    return (
      <input className='TodoSearch'
        placeholder='Tareas Pendientes' 
        value={searchValue}
        onChange={onSearchValueChange}
      />
    );
  }

export { TodoSearch }