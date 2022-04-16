import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'

export default function LoanButton() {
  return (
    <div className='loan-button'>
      <FontAwesomeIcon icon={faHandshake} className="icon"/>
    </div>
  )
}
