import { combineReducers } from 'redux'
import { Cart } from './cart'
import { Wishlist } from './wishlist'


export default combineReducers({
    cart: Cart,
    wishlist: Wishlist
})