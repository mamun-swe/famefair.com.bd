import {
    CART_PRODUCT_REQUEST,
    CART_PRODUCT_SUCCESS,
    CART_PRODUCT_FAILED,
    PRODUCT_ADD_CART_REQUEST,
    PRODUCT_REMOVE_FROM_CART,
    INCREMENT_PRODUCT_QUANTITY,
    DECREMENT_PRODUCT_QUANTITY,
    CLEAR_CART
} from '../types'
import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const toastSetting = {
    autoClose: 1500,
    transition: Slide,
    position: "bottom-left",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
}

const initialState = {
    loading: false,
    products: [],
    show: false,
    error: "",
    add_success: "",
}

export const Cart = (state = initialState, action) => {
    switch (action.type) {

        // All Cart Products
        case CART_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CART_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case CART_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                products: [],
                error: action.payload
            }


        // Product Add To Cart
        case PRODUCT_ADD_CART_REQUEST:
            let exists = state.products.find(x => x._id === action.payload._id)

            if (exists) {
                toast.success('One product added into cart', { ...toastSetting })
                return {
                    ...state,
                    products: state.products.map((product) => {
                        if (product._id === action.payload._id) {
                            product.quantity += action.payload.quantity || 1
                            localStorage.setItem('products', JSON.stringify(state.products))
                        }
                        return product
                    }),
                    add_success: true,
                    show: true
                }
            } else {
                let products = []

                if (localStorage.getItem('products')) {
                    products = JSON.parse(localStorage.getItem('products'))
                }

                products.push(action.payload)
                localStorage.setItem('products', JSON.stringify(products))
                toast.success('One product added into cart', { ...toastSetting })

                return {
                    ...state,
                    products: [...state.products, action.payload],
                    add_success: true,
                    show: true
                }
            }


        // Product remove
        case PRODUCT_REMOVE_FROM_CART:
            const items = JSON.parse(localStorage.getItem('products'))
            const filtered = items.filter(item => item._id !== action.payload)
            localStorage.setItem('products', JSON.stringify(filtered))

            return {
                ...state,
                products: state.products.filter((product) => product._id !== action.payload),
                add_success: true
            }

        // Increment Quantity
        case INCREMENT_PRODUCT_QUANTITY:
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product._id === action.payload) {
                        product.quantity += 1
                        localStorage.setItem('products', JSON.stringify(state.products))
                    }
                    return product
                }),

                add_success: true
            }

        // Decrement Quantity
        case DECREMENT_PRODUCT_QUANTITY:
            return {
                ...state,
                products: state.products.map((product) => {
                    if (product._id === action.payload) {
                        product.quantity -= 1
                        localStorage.setItem('products', JSON.stringify(state.products))
                    }
                    return product
                }),
                add_success: true
            }

        // Clear cart
        case CLEAR_CART:
            localStorage.removeItem('products')

            return {
                ...state,
                products: []
            }


        default:
            return state

    }
}