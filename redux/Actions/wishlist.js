import {
    WISHLIST_PRODUCT_REQUEST,
    WISHLIST_PRODUCT_SUCCESS,
    WISHLIST_PRODUCT_FAILED,
    WISHLIST_ADD_REQUEST,
    WISHLIST_REMOVE_REQUEST
} from '../types'

// Prduct Get Action
export const wishListProducts = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: WISHLIST_PRODUCT_REQUEST })
            let products = []
            if (localStorage.getItem('wishlist_products')) {
                products = JSON.parse(localStorage.getItem('wishlist_products'))
            }
            dispatch({
                type: WISHLIST_PRODUCT_SUCCESS,
                payload: products
            })
        } catch (error) {
            dispatch({
                type: WISHLIST_PRODUCT_FAILED,
                payload: error.message
            })
        }
    }
}


// Product Add Action
export const addWistlist = (data) => {
    return async (dispatch) => {
        dispatch({ type: WISHLIST_ADD_REQUEST, payload: data })
    }
}


// Product Remove Action
export const removeFromList = (data) => {
    return async (dispatch) => {
        dispatch({ type: WISHLIST_REMOVE_REQUEST, payload: data })
    }
}