import React from 'react'
import { BsJournalCheck } from 'react-icons/bs'


const CompleteIcon = ({ onClick }) => {
  return (
    <span className={`Icon Icon-check 
      : 'Icon-check--active'}`}
      onClick={onClick}>
      <BsJournalCheck />
    </span>
    
  )
}

export { CompleteIcon }