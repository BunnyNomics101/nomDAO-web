import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import PriceInfo from '../../constants/PriceInfo'

export default function AddButton() {

    const [shown, setShown] = useState(false)

    const [NFTAdress, setNFTAdress] = useState("");

    return (
        <>
            <div
                id="add-button"
                className={shown ? "shown" : ""}
                onClick={() => { setShown(prev => !prev) }}
            >
                <FontAwesomeIcon icon={faPlus} className="icon" />
            </div>
            <div
                id="add-menu"
                className={shown ? "shown" : ""}
            >
                <div>
                    {/* prince info */}
                    {Object.keys(PriceInfo).map((item, i) => {
                        return (
                            <div className='row' key={i}>
                                <div className="capital"> {item} </div>
                                <div> {PriceInfo[item]} </div>
                            </div>
                        )
                    })}
                    <hr />

                    {/* summary */}
                    <div className='row'>
                        <div> Summary </div>
                        <div>
                            1 NFT + 8.8 USDC
                        </div>
                    </div>
                </div>

                {/* input  */}
                <div className='input'>
                    <input
                        type="text"
                        placeholder='NFT Adress'
                        value={NFTAdress}

                        onChange={(e) => {
                            setNFTAdress(e.target.value)
                        }}
                    />
                    <button
                        className='add'
                        disabled={NFTAdress === ""}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
        </>
    )
}
