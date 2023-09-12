import React from "react";

function useLocalStorage(itemName, initialValue) {    
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true); 
    const [error, setError] = React.useState(false);   
    const [sincronizedItem, setSincronizedItem] = React.useState(true);  
  
    React.useEffect(() => {
     setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem;
        
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem=[];
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
  
        setLoading(false);
      } catch(error) {
        setLoading(false);
        setSincronizedItem(true);
        setError(true);
      }
     }, 2000)
    }, [sincronizedItem]);
    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
  
      setItem(newItem)
    };

    const sincronizeItem = () => {
      setLoading(true);
      setSincronizedItem(false);
    }

  
    return {
      item, 
      saveItem, 
      loading, 
      error,
      sincronizeItem
    };
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