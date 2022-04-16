import React, { useEffect, useMemo, useState } from 'react'
import Header from '../components/dashboard/Header'
import AddButton from '../components/dashboard/AddButton'
import Switch from '../components/dashboard/Switch'
import borrowerImg from '../images/borrower.png'
import Orders from '../components/dashboard/Orders'

const SWITCH_VALUES = [
  "all",
  "my"
]


const FAKE_ORDERS = [
  {
    pubkey : "6KEsfpNm44KUUERoDNpkLFUz33JHvnt69Mo2jrevNL35",
    borrowers: "93wE..FkrB",
    NFTtoken: "Gn5oBM2Ms6iew2ctFUaUXCXTAzFWdP5ppn26RuHrMS2N",
    image: borrowerImg
  },
  {
    pubkey : "6KEsfpNm44KUUERoDNpkLFUz33JHvnt69Mo2jrevNL36",
    borrowers: "93wE..FkrB",
    NFTtoken: "Gn5oBM2Ms6iew2ctFUaUXCXTAzFWdP5ppn26RuHrMS2N",
    image: borrowerImg
  },
  {
    pubkey : "6KEsfpNm44KUUERoDNpkLFUz33JHvnt69Mo2jrevNL37",
    borrowers: "93wE..FkrB",
    NFTtoken: "Gn5oBM2Ms6iew2ctFUaUXCXTAzFWdP5ppn26RuHrMS2N",
    image: borrowerImg
  },

  {
    pubkey : "6KEsfpNm44KUUERoDNpkLFUz33JHvnt69Mo2jrevNL38",
    borrowers: "93wE..FkrB",
    NFTtoken: "Gn5oBM2Ms6iew2ctFUaUXCXTAzFWdP5ppn26RuHrMS2N",
    image: borrowerImg
  },
  {
    pubkey : "6KEsfpNm44KUUERoDNpkLFUz33JHvnt69Mo2jrevNL39",
    borrowers: "93wE..Fkr2",
    NFTtoken: "Gn5oBM2Ms6iew2ctFUaUXCXTAzFWdP5ppn26RuHrMS2N",
    image: borrowerImg
  },
  {
    pubkey : "6KEsfpNm44KUUERoDNpkLFUz33JHvnt69Mo2jrevNL40",
    borrowers: "93wE..FkrB",
    NFTtoken: "Gn5oBM2Ms6iew2ctFUaUXCXTAzFWdP5ppn26RuHrMS2N",
    image: borrowerImg
  },
]

const walletAddress= "93wE..Fkr2"

export default function Dashboard() {

  const [current, setCurrent] = useState(SWITCH_VALUES[0])
  
  const orders = useMemo(()=>{
    if(current ==="all") return FAKE_ORDERS; 
    else
      return FAKE_ORDERS.filter(order=>order.borrowers === walletAddress)
  },[current])
  
  useEffect(()=>{
    console.log(orders)
  },[orders])

  return (
    <div id="dashboard" >

      {/* top bar */}
      <Header />


      <div className='flex center-hor flex-auto vertical'
        style={{marginTop: "40px"}}
      >
        {/* switch */}
        <Switch
          value={current}
          list={SWITCH_VALUES}
          onChange={(value) => { setCurrent(value) }}
        />
        <br />
        {/* orders */}
        <Orders orders={orders}/>

      </div>
      {/* bottom right button */}
      <AddButton />
    </div>
  )
}
