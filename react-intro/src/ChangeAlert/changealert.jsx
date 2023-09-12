import React from "react";
import { useStorageListener } from "./useStorageListener";
import './changealert.css'

function ChangeAlert({ sincronize }){
    const { show,toggleShow } = useStorageListener(sincronize);
    if(show) {
        return(
            <div>
                <p className='changeParrafo'>Hubo hubo cambios</p>
                <button onClick={toggleShow} className='button'>
                    Volver a cargar la información
                </button>
            </div>);
        }else {
            return null;
        }
    }


export { ChangeAlert };