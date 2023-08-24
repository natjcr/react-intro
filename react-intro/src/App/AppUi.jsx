import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { TodoContext } from '../TodoContext/TodoContext';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoList } from '../TodoList/TodoList';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodosError } from '../TodosError/TodosError';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import './index.css'



function AppUI() {
    return (
        <>
          <TodoCounter />
          <TodoSearch />
    
          <TodoContext.Consumer>
            {({
              loading,
              error,
              searchedTodos,
              completeTodo,
              deleteTodo
            }) => (
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
            )}
          </TodoContext.Consumer>

          
          
          <CreateTodoButton />
        </>
      );
}

export{ AppUI }