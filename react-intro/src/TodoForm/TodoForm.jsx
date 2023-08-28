import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm() {
const {
    addTodo,
    setOpenModal,
} = React.useContext(TodoContext);

const[newTodoValue, setNewTodoValue] = React.useState('');

const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
};
const onCancel = () => {
    setOpenModal(false);
};
const onChange = (event) => {
    setNewTodoValue(event.target.value);
};
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe un nuevo TODO</label>
            <textarea 
                placeholder='Tareas Pendientes'
                value={newTodoValue}
                onChange={onChange}
             />
            <div className="TodoForm-buttonContainer">
                <button 
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}>                
                        Cancelar</button>
                <button 
                    className='TodoForm-button TodoForm-button--add'>
                        Add</button>
            </div>
        </form>
    )
}

export { TodoForm}