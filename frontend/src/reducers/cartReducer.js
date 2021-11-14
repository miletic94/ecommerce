import * as actions from "../constants/cartConstants"

export default function cartReducer(
    state = 
    {cartItems: []}, 
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
        default:
            return state
    }
}