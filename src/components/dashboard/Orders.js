import React from 'react'
import PropTypes from 'prop-types'
import CopyBox from '../CopyBox'
import LoanButton from '../LoanButton'

function Orders({ orders }) {
    return (
        <div id="orders">
            {orders.map((order,index) => (
                <div className='container' key={index}>
                    <img src={order.image} alt="" />
                    <div className='rows'>
                        <div className='row'>
                            <h1>Order Public Key:</h1>
                            <CopyBox value={order.pubkey} />
                        </div>
                        <div className='row'>
                            <h1>Borrowers</h1>
                            <CopyBox value={order.borrowers} />
                        </div>
                        <div className='row' >
                            <h1>Order Public Key:</h1>
                            <CopyBox value={order.NFTtoken} />
                        </div>
                    </div>
                    <LoanButton />
                </div>
            ))}
        </div>
    )
}

Orders.propTypes = {
    orders: PropTypes.array
}

export default Orders
