import React, {useEffect} from 'react'
import { useLocation, useParams } from 'react-router'
import {useSelector, useDispatch} from "react-redux"
import  {addToCart}  from '../actions/cartActions'
import CartItem from "./CartItem"

export default function CartPage() {
    const dispatch = useDispatch()
    let cart = useSelector(state => state.shoppingCart)

    const productId = useParams().id

    const location = useLocation()
    const qty = location.search ?
                location.search.split("=")[1] :
                1
    
    useEffect(() => {
        dispatch(addToCart(productId, qty))        
    }, [dispatch, productId, qty])

    return (
        <ul className="cart">
            {cart.cartItems.map(item => {
                return (
                    <CartItem 
                        id={item.id}
                        title={item.title}
                        image = {item.image}    
                        price= {item.price}
                        available= {item.available}
                        qty = {qty}
                    />
                )
            })}
        </ul> 
    )
}
