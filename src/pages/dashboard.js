import React, { useState } from 'react'
import Header from '../components/dashboard/Header'
import AddButton from '../components/dashboard/AddButton'
import Switch from '../components/dashboard/Switch'

const SWITCH_VALUES = [
  "all",
  "my"
]

export default function Dashboard() {

  const [current, setCurrent] = useState(SWITCH_VALUES[0])


  return (
    <div id="dashboard" >

      {/* top bar */}
      <Header />


      <div className='flex center-hor'>
        {/* switch */}
        <Switch
          value={current}
          list={SWITCH_VALUES}
          onChange={(value)=>{setCurrent(value)}}
        />

        {/* orders */}

      </div>
      {/* bottom right button */}
      <AddButton />
    </div>
  )
}
