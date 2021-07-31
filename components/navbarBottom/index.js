import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { productsList } from '../../redux/Actions/cart'
import { wishListProducts } from '../../redux/Actions/wishlist'
import { useSelector, useDispatch } from 'react-redux'

import MyCart from '../cart/index'
import { Heart, ShoppingCart, User } from 'react-feather'

const index = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [isCart, setCart] = useState(false)
    const { products } = useSelector((state => state.cart))
    const wishlistProducts = useSelector((state => state.wishlist))

    useEffect(() => {
        dispatch(productsList())
        dispatch(wishListProducts())
    }, [dispatch])

    return (
        <div>
            {/* Navbar footer fixed in mobile */}
            <div className="navbar-fixed-footer d-lg-none">
                <div className="d-flex justify-content-between button-container">

                    {/* Wishlist icon */}
                    <div>
                        <button
                            type="button"
                            className="btn shadow-none badge-btn"
                            onClick={() => router.push('/favorite-list')}
                        >
                            <Heart size={23} />
                            <span className="badge">
                                {wishlistProducts.products && wishlistProducts.products.length ? wishlistProducts.products.length : 0}
                            </span>
                        </button>
                    </div>

                    {/* Logo */}
                    <div
                        className="logo-container flex-center flex-column"
                        onClick={() => router.push('/')}
                    >
                        <img src="/assets/logo-sm.png" className="img-fluid" alt="Famefair logo" />
                    </div>

                    {/* Cart & Account icon */}
                    <div className="ml-auto">
                        <button
                            type="button"
                            className="btn shadow-none badge-btn"
                            onClick={() => setCart(true)}
                        >
                            <ShoppingCart size={23} />
                            <span className="badge">{products && products.length ? products.length : 0}</span>
                        </button>
                        <button
                            type="button"
                            className="btn shadow-none badge-btn"
                            onClick={() => router.push('/login')}
                        >
                            <User size={25} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Shopping cart */}
            {isCart ?
                <MyCart
                    show={isCart}
                    onHide={() => setCart(false)}
                />
                : null}
        </div>
    );
};

export default index;