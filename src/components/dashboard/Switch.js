import React from 'react'

export default function Switch({ list, value, onChange }) {
  return (
    <div id="switch">
      {list.map(el => {
        return (
          <button
            key={el}
            className={(value === el) ? "current" : ""}
            onClick={()=>{onChange(el)}}
          > {el} orders </button>
        )
      })}
    </div>
  )
}
