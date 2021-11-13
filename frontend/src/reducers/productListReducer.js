import * as actions from "../constants/productConstants"

export default function productListReducer(state = {
    loading: false,
    products: [],
    error: null
}, action) {
    switch(action.type) {
        case actions.PRODUCT_LIST_REQUEST: 
            return {
                ...state,
                loading:true
        }
        case actions.PRODUCT_LIST_SUCCESS: 
            return {
                ...state,
                loading: false,
                products: action.payload.products
            }
        case actions.PRODUCT_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error.message
            }
        default: 
            return state
    }
}