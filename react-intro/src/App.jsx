import React from 'react';
import './App.css'
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoList } from './TodoList/TodoList';
import { TodoSearch } from './TodoSearch/TodoSearch';


const defaultTodos = [
  { text: 'leer', completed:true },
  { text: 'Estudiar', completed:false },
  { text: 'Aprender terminos gastronomicos', completed:false },
  { text: 'Hacer lo de cátedra', completed:false },
  { text: 'Sacar a Merlín', completed:false }
]


function App() {
    return (
    <>
      <React.Fragment>

        <TodoCounter completed={16} total={20} />
        <TodoSearch />

        <TodoList>
          {defaultTodos.map(todo => (
            <TodoItem key={todo.text} 
            text={todo.text} completed={todo.completed}/>
          ))}
        </TodoList>

        <CreateTodoButton />      

      </React.Fragment>
    </>
  )
}



export default App
