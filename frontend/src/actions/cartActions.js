import * as actions from "../constants/cartConstants"
import Axios from "axios"
import {APP_NAME} from "../constants/mainConstants.js"


export const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const { data } = await Axios.get(`/api/products/${productId}`)
        dispatch({
            type: actions.ADD_TO_CART,
            payload: {
                id: data.id,
                image: data.image,
                title: data.title,
                category: data.category,
                price: data.price,
                available: data.available,
                qty
            }
        })
    } catch (error) {
        return
    }
    
    const storageItemName = `${APP_NAME}-shopping-cart`
    localStorage.setItem(storageItemName, 
    JSON.stringify(getState().shoppingCart))
}

export const removeFromCart = (productId)  => {
    return {
        type: actions.REMOVE_FROM_CART,
        payload: {
            productId
        }
    }
} 

export const clearCart = () => {
    return {
        type: actions.CLEAR_CART
    }
}