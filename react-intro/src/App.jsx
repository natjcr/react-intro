import './App.css'

function App() {
    return (
    <>
      <div className='App'>

        <TodoCounter />
        <TodoSearch />

        <TodoList>
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </TodoList>

        <CreateTodoButton />        

      </div>
    </>
  )
}

function TodoCounter() {
  return(
    <h1>Haz Completado 3 de 5 TODOs</h1>
  );
}

function TodoItem() {
  return(
    <li>
      <span>✅</span>
      <p>JIMIN</p>
      <span>X</span>
    </li>
  );
}

export default App
