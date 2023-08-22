import React from 'react'
import { MdAutoDelete } from 'react-icons/md'

const DeleteIcon = ({onClick }) => {
  return (
    <span className='Icon Icon-delete'
     onClick={onClick}>
        <MdAutoDelete />
    </span>
    
  )
}

export {DeleteIcon}