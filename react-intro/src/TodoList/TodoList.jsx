import './TodoList.css'

function TodoList(props) {
    return(
      <section className='TodoList'>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}

        {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
        
        {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
        
        {props.searchedTodos.map(props.render)}

       
      </section>
      
    );
  }

export { TodoList }