import React from 'react';
import './TodoItem.css';
import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';


function TodoItem (props) {
  const { onComplete , onDelete} = props;

  return (
    <li className='TodoItem'>
      <CompleteIcon 
        completed={props.completed} 
        onClick={onComplete}
      />
      <p className={`TodoItem-p 
        ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <DeleteIcon 
        onClick={onDelete}
      />
    </li>
  )
    
  }


/*   return(
    <li className='TodoItem'>
      <span className={`Icon Icon-check 
        ${props.completed && 'Icon-check--active'}`}
        completed={props.completed}
        onComplete={props.onComplete}
        >
          <BsJournalCheck />
      </span>

      <p className={`TodoItem-p 
        ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}</p>

      <span className='Icon Icon-delete'
        onDelete={props.onDelete}
        >
          <MdAutoDelete />
      </span>
    </li>
  ); */
  export { TodoItem }