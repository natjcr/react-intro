import './TodoItem.css';
import { BsJournalCheck } from 'react-icons/bs';
import { MdAutoDelete } from 'react-icons/md';

function TodoItem(props) {
    return(
      <li className='TodoItem'>
        <span className={`Icon Icon-check 
          ${props.completed && 'Icon-check--active'}`}
          onClick={props.onComplete}>
          <BsJournalCheck />
        </span>
        <p className={`TodoItem-p 
          ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}</p>
        <span className='Icon Icon-delete'
          onClick={props.onDelete}><MdAutoDelete />
        </span>
      </li>
    );
  }

  export { TodoItem }