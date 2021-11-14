import * as actions from "../constants/cartConstants"
import { APP_NAME } from "../constants/mainConstants"

const localStorageItem = `${APP_NAME}-shopping-cart`
const isShoppingCardInLocalStoraqge = !!localStorage.getItem(localStorageItem)

export default function cartReducer(
    state = isShoppingCardInLocalStoraqge ?
        JSON.parse(localStorage.getItem(localStorageItem))
     :
    {
        cartItems: []
    }, 
    action) {
    switch(action.type) {
        case actions.ADD_TO_CART:
            const item = action.payload
            const productExist = state.cartItems.find(cartItem => cartItem.id === item.id)
            if(productExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => {
                        return x.id === productExist.id ? item : x
                    })
                }
            }
            return {
                ...state,
                cartItems: [...state.cartItems, item]
            }
        case actions.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => {
                    return item.id !== action.payload.productId
                })
            }
        case actions.CLEAR_CART:
            return {
                cartItems: []
            }
        default:
            return state
    }
}