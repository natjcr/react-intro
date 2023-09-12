import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { TodoHeader } from '../TodoHeader/TodoHeader';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoList } from '../TodoList/TodoList';
import { TodosError } from '../TodosError/TodosError';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { Modal } from '../OpenModal/OpenModal';
import { TodoForm } from '../TodoForm/TodoForm';
import { useTodos } from './useTodos';
import { ChangeAlertWithStorageListener } from '../ChangeAlert/changealert';
import './index.css'



function App() {  
  const  {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    completedTodos,
    totalTodos, 
    searchValue, 
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();
    
  return (
    <>
    <TodoHeader loading={loading}>
      <TodoCounter 
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
     <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      /> 
    </TodoHeader>

    <TodoList
      error={error}
      loading={loading}
      searchedTodos={searchedTodos}
      totalTodos={totalTodos}
      searchText={searchValue}
      onError={() => <TodosError />}
      onLoading={() => <TodosLoading />}
      onEmptyTodos={() => <EmptyTodos />}
      onEmptySearchResults={
        (searchText) => <p className='resultados'>No Hay Resultados para {searchText}</p>
      }
      render={todo => 
        <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
      }
    />    

      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
      
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />

      <ChangeAlertWithStorageListener
        sincronize={sincronizeTodos}
      />
    </>
  );
}


export default App;