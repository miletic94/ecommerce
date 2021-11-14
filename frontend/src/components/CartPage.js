import React, {useEffect} from 'react'
import { useLocation, useParams, useNavigate } from 'react-router'
import {useSelector, useDispatch} from "react-redux"
import  {addToCart, clearCart, removeFromCart}  from '../actions/cartActions'
import { Link } from "react-router-dom"
import MessageBox from './MessageBox'

export default function CartPage() {
    const dispatch = useDispatch()
    let cart = useSelector(state => state.shoppingCart)

    const productId = useParams().id

    const location = useLocation()
    const qty = location.search ?
                location.search.split("=")[1] :
                1
    const navigate = useNavigate() 
    useEffect(() => {
        if(!!productId && !!qty) {
            dispatch(addToCart(productId, qty))
        }
        navigate("/cart")
    }, [dispatch, productId, qty, navigate])

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId))
    }

    return (
        <main> 
            {cart.cartItems.length === 0 ? 
            <MessageBox>
                <pre>Cart is Empty <Link to={"/"}>Go back to shopping</Link></pre>
            </MessageBox> :
            (
                <div className="dFlex directionColumn alignCenter">
                    <Link to={"/"}>
                        <h2 className="backToShopping">BACK TO SHOPPING</h2>
                    </Link>
                    <ul className="cart">
                    {cart.cartItems.map(item => {
                        return (
                        <li className="cartItem" key={item.id}>
                            <div>
                                <img className="imgXsm" src={item.image} alt={item.title} />
                                <div className="cartItemTitle">{item.title}</div>
                            </div>
                            <div>
                                <div className="dFlex alignCenter">
                                    <select
                                        name="quantity"
                                        className="quantity"
                                        value = {item.qty}
                                        onChange={(e) => {
                                            dispatch(addToCart(item.id, e.target.value))
                                        }}
                                    >
                                        {[...Array(item.available).keys()].map(num => {
                                            return <option key={num+1} value={(num+1).toString()}>Qty: {num+1}</option>
                                        })}
                                    </select>
                                </div>
                    
                                <div className="cartItemPrice">Price: {(parseInt(item.qty) * Number(item.price).toFixed(2)).toFixed(2)}</div>
                            </div>
                            <button className="btnSecondary"
                                onClick= {() => handleRemoveFromCart(item.id)}
                            >Remove</button>
                        </li>
                        )
                    })}
                    </ul>
                    <div className="card buyCard">
                    <div className="subtotal">
                        Subtotal: {`
                        ${cart.cartItems.reduce((a, item) => {
                            return a + parseInt(item.qty)
                        }, 0)} items
                        ${cart.cartItems.reduce((a, item) => {
                            const result = (Number(a) + parseInt(item.qty) * Number(item.price).toFixed(2)).toFixed(2)
                            return result
                        }, 0)}$
                        `}
                    </div>
                    <button className="btnPrimary">
                        Buy
                    </button>
                    <button  
                        className="clearCart"
                        onClick={() => dispatch(clearCart()) }
                    > 
                        Clear Shopping Cart
                    </button>
                    </div>
                </div>
                )  
        }
        </main> 
    )
}
