import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { TodoContext } from '../TodoContext/TodoContext';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodosError } from '../TodosError/TodosError';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { Modal } from '../OpenModal/OpenModal';
import { TodoForm } from '../TodoForm/TodoForm';
import './index.css'


function AppUI() {
  const  {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal, 
  } = React.useContext(TodoContext);

    return (
        <>
          <TodoCounter />
          <TodoSearch />
  
            <TodoList>
              {loading && <TodosLoading />}
              {error && <TodosError />}
              {(!loading && searchedTodos.length === 0) &&
              <EmptyTodos />}

            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
              ))}
            </TodoList>

          <CreateTodoButton 
            setOpenModal={setOpenModal}
          />

          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
        </>
      );
}

export{ AppUI }