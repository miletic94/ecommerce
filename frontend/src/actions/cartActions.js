import * as actions from "../constants/cartConstants"
import Axios from "axios"
import {APP_NAME} from "../constants/mainConstants.js"


export const addToCart = (productId, qty) => async (dispatch, getState) => {
    
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
    console.log(getState().shoppingCart)

    localStorage.setItem("test", Math.round(Math.random()*10))
    const storageItemName = `${APP_NAME}-shopping-cart`
    localStorage.setItem(storageItemName, 
    JSON.stringify(getState().shoppingCart))
}