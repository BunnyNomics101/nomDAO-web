import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

export default function CopyBox({ value }) {

  const copy = () => {
    navigator.clipboard.writeText(value)
  }

  return (
    <div className="copy-box">
      {value}
      <div
        className="copy-button"
        onClick={()=>{
          copy()
        }}
      >
        <FontAwesomeIcon
          icon={faCopy}
        />
      </div>
    </div>
  )
}
