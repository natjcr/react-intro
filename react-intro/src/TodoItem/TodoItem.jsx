import './TodoItem.css';
import { BsJournalCheck } from 'react-icons/bs';
import { MdAutoDelete } from 'react-icons/md';

function TodoItem(props) {
    return(
      <li className='TodoItem'>
        <span className={`Icon Icon-check 
          ${props.completed && 'Icon-check--active'}`}
          onClick={props.onComplete}
          completed={props.completed}
          onComplete={props.onComplete}
          >
            <BsJournalCheck />
        </span>

        <p className={`TodoItem-p 
          ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}</p>

        <span className='Icon Icon-delete'
          onClick={props.onDelete}
          completed={props.completed}
          onComplete={props.onComplete}
          >
            <MdAutoDelete />
        </span>
      </li>
    );
  }

  export { TodoItem }