import React, { useEffect, useMemo, useState } from 'react'
import AddButton from '../components/dashboard/AddButton'
import Switch from '../components/dashboard/Switch'
import borrowerImg from '../images/borrower.png'
import Orders from '../components/dashboard/Orders'
import { useWallet } from '../context/Wallet'

const SWITCH_VALUES = [
    "all",
    "my"
]


const FAKE_ORDERS = [
    {
        pubkey: "6KEsfpNm44KUUERoDNpkLFUz33JHvnt69Mo2jrevNL35",
        borrowers: "93wE..FkrB",
        NFTtoken: "Gn5oBM2Ms6iew2ctFUaUXCXTAzFWdP5ppn26RuHrMS2N",
        image: borrowerImg
    },
    {
        pubkey: "6KEsfpNm44KUUERoDNpkLFUz33JHvnt69Mo2jrevNL36",
        borrowers: "93wE..FkrB",
        NFTtoken: "Gn5oBM2Ms6iew2ctFUaUXCXTAzFWdP5ppn26RuHrMS2N",
        image: borrowerImg
    },
    {
        pubkey: "6KEsfpNm44KUUERoDNpkLFUz33JHvnt69Mo2jrevNL37",
        borrowers: "93wE..FkrB",
        NFTtoken: "Gn5oBM2Ms6iew2ctFUaUXCXTAzFWdP5ppn26RuHrMS2N",
        image: borrowerImg
    },

    {
        pubkey: "6KEsfpNm44KUUERoDNpkLFUz33JHvnt69Mo2jrevNL38",
        borrowers: "93wE..FkrB",
        NFTtoken: "Gn5oBM2Ms6iew2ctFUaUXCXTAzFWdP5ppn26RuHrMS2N",
        image: borrowerImg
    },
    {
        pubkey: "6KEsfpNm44KUUERoDNpkLFUz33JHvnt69Mo2jrevNL39",
        borrowers: "93wE..Fkr2",
        NFTtoken: "Gn5oBM2Ms6iew2ctFUaUXCXTAzFWdP5ppn26RuHrMS2N",
        image: borrowerImg
    },
    {
        pubkey: "6KEsfpNm44KUUERoDNpkLFUz33JHvnt69Mo2jrevNL40",
        borrowers: "93wE..FkrB",
        NFTtoken: "Gn5oBM2Ms6iew2ctFUaUXCXTAzFWdP5ppn26RuHrMS2N",
        image: borrowerImg
    },
]

const walletAddress = "93wE..Fkr2"

export default function Borrow() {

    const [current, setCurrent] = useState(SWITCH_VALUES[0])

    //getting connect
    const {
        connect,
        disconnect,
        isConnected
    } = useWallet(); 

    //getting orders
    const orders = useMemo(() => {
        if (current === "all") return FAKE_ORDERS;
        else
            return FAKE_ORDERS.filter(order => order.borrowers === walletAddress)
    }, [current])

    return (
        <div id="dashboard" >
            <div
                className='flex center-hor flex-auto vertical'
                style={{ justifyContent: 'space-between' }}
            >
                {/* switch */}
                <Switch
                    value={current}
                    list={SWITCH_VALUES}
                    onChange={(value) => { setCurrent(value) }}
                />
                <br />

                {/* orders */}
                <Orders orders={orders} />

                {/* bottom right button */}
                <div className='bottom-row'>
                    <button
                        className={`connect ${isConnected?'disconnect':''}`}
                        onClick={isConnected?disconnect:connect}
                    >
                        {isConnected?"DISCONNECT": "CONNECT"}
                    </button>
                    <AddButton />
                </div>
            </div>
        </div>
    )
}
