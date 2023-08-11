function TodoItem(props) {
    return(
      <li>
        <span>✅</span>
        <p>{props.text}</p>
        <span>X</span>
      </li>
    );
  }

  export { TodoItem }