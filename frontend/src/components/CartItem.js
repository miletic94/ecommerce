import React, { useState } from 'react'

export default function CartItem(props) {
    const [qty, setQty] = useState(props.qty)
    const [totalPrice, setTotalPrice] = useState(qty * props.price)
    return (
        <li className="cartItem" key={props.id}>
            <div>
                <img className="imgXsm" src={props.image} alt={props.title} />
                <div className="cartItemTitle">{props.title}</div>
            </div>
            <div>
                <div className="dFlex alignCenter">
                    <select
                        name="quantity"
                        className="quantity"
                        value = {qty}
                        onChange={(e) => {
                            setQty(e.target.value)
                            setTotalPrice(parseFloat(e.target.value * props.price).toFixed(2))
                        }}
                    >
                        {[...Array(props.available).keys()].map(num => {
                            return <option key={num+1} value={(num+1).toString()}>Qty: {num+1}</option>
                        })}
                    </select>
                </div>
                
                <div className="cartItemPrice">Price: {totalPrice}</div>
            </div>

            <button className="btnSecondary">Remove</button>
        </li> 
    )
}
