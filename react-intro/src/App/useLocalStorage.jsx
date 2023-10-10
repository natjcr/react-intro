import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }))

    const {
        sincronizedItem,
        loading,
        error,
        item,
    } = state;


  /* const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true); 
    const [error, setError] = React.useState(false);   
    const [sincronizedItem, setSincronizedItem] = React.useState(true);   */
  
  
    // Action creators
    const onError = (error)=>dispatch({ type: actionTypes.error, payload: error});
    const onSuccess = (parsedItem)=>dispatch({ type: actionTypes.success, payload: parsedItem});
    const onSave = (newItem)=>dispatch({ type: actionTypes.save, payload: newItem});
    const onSincronize = ()=>dispatch({ type: actionTypes.sincronize });

    React.useEffect(()=>{
        setTimeout( ()=>{
        try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;

            if(!localStorageItem) {
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItem = initialValue;
            } else {
            parsedItem = JSON.parse(localStorageItem);
            }
            onSuccess(parsedItem);
        } catch (error) {
            onError(error);
        }
        },3000);
    },[sincronizedItem])

    const saveItem = (newItem) =>{
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName,stringifiedItem);
            onSave(newItem);
        } catch (error) {
            onError(error);
        }
    }

    const sincronizeItem = () =>{
        onSincronize();
    }

    return {
        item, 
        saveItem, 
        loading,
        error,
        sincronizeItem,
    };
}

const initialState = ({ initialValue })=>({
    sincronizedItem: true,
    loading: true,
    error: false,
    item :initialValue,
});

const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE',
    sincronize: 'SINCRONIZE',
}

const reducerObject = (state, payload) =>({
    [actionTypes.error]: {
        ...state,
        error: true,
    },
    [actionTypes.success]:{
        ...state,
        error:false,
        sincronizedItem: true,
        loading: false,
        item: payload,
    },
    [actionTypes.save]:{
        ...state,
        item:payload
    },
    [actionTypes.sincronize]:{
        ...state,
        sincronizedItem: false,
        loading: true,
    },
});

const reducer = (state, action) =>{
    return reducerObject(state, action.payload)[action.type] || state;
}

export { useLocalStorage }

/* const defaultTodos = [
  { text: 'Estudiar', completed: true },
  { text: 'Pasear a Merlín', completed: false },
  { text: 'Estudiar Fundamentos Culinarios', completed: false },
  { text: 'Ejercicio', completed: false },
  { text: 'Practicar', completed: true },
  { text: 'Meditar', completed: true },
];

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos())  */