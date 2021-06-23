import {
    WISHLIST_PRODUCT_REQUEST,
    WISHLIST_PRODUCT_SUCCESS,
    WISHLIST_PRODUCT_FAILED,
    WISHLIST_ADD_REQUEST,
    WISHLIST_REMOVE_REQUEST
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
    error: "",
    add_success: "",
}

export const Wishlist = (state = initialState, action) => {
    switch (action.type) {

        // All Cart Products
        case WISHLIST_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case WISHLIST_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case WISHLIST_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                products: [],
                error: action.payload
            }


        // Product Add To wishlist
        case WISHLIST_ADD_REQUEST:
            let exists = state.products.find(x => x._id === action.payload._id)

            if (exists) {
                toast.info('Already added into wishlist', { ...toastSetting })
            } else {
                let products = []

                if (localStorage.getItem('wishlist_products')) {
                    products = JSON.parse(localStorage.getItem('wishlist_products'))
                }

                products.push(action.payload)
                localStorage.setItem('wishlist_products', JSON.stringify(products))
                toast.success('One product added into wishlist', { ...toastSetting })

                return {
                    ...state,
                    products: [...state.products, action.payload],
                    add_success: true
                }
            }


        // Product remove
        case WISHLIST_REMOVE_REQUEST:
            const items = JSON.parse(localStorage.getItem('wishlist_products'))
            const filtered = items.filter(item => item._id !== action.payload)
            localStorage.setItem('wishlist_products', JSON.stringify(filtered))

            return {
                ...state,
                products: state.products.filter((product) => product._id !== action.payload),
                add_success: true
            }

        default:
            return state

    }
}