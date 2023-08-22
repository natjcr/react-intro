import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUi';

/* const defaultTodos = [
  { text: 'Estudiar', completed: true },
  { text: 'Pasear a Merlín', completed: false },
  { text: 'Estudiar Fundamentos Culinarios', completed: false },
  { text: 'Ejercicio', completed: false },
  { text: 'Practicar', completed: true },
  { text: 'Meditar', completed: true },
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos())  */

function App() {  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

   const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );


  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  return (
    <AppUI 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App;