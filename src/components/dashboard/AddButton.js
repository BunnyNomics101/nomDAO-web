import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function AddButton() {

    const [shown, setShown] = useState(false)

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

            </div>
        </>
    )
}
