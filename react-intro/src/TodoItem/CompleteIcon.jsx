import React from 'react'
import { BsJournalCheck } from 'react-icons/bs'


const CompleteIcon = ({ onClick }) => {
  return (
    <span className={`Icon Icon-check 
      : 'Icon-check--active`}
      >
      <BsJournalCheck
      type="check"
      onClick={onClick} />
    </span>
    
  )
}

export { CompleteIcon }