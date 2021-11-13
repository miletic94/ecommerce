import * as actions from "../constants/productConstants"

export default function productDetailsReducer(state = {
    loading: false,
    product: {},
    error: null
}, action) {
    switch(action.type) {
        case actions.PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
            case actions.PRODUCT_DETAILS_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    product: {
                        ...action.payload.product, 
                        rating: {
                            rate: action.payload.product.rating.rate,
                            count: action.payload.product.rating.count
                        }
                    }
                }
            case actions.PRODUCT_DETAILS_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: action.payload.error
                }
        default:
            return state
    }
}