import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Icon } from 'react-icons-kit'
import { useRouter } from 'next/router'
import {
    heart,
    shoppingCart,
    user,
    menu
} from 'react-icons-kit/feather'

import Drawer from '../drawer/index'
import CartComponent from '../cart/index'
import SearchComponent from '../search/index'

import { productsList } from '../../redux/Actions/cart'
import { wishListProducts } from '../../redux/Actions/wishlist'
import { useSelector, useDispatch } from 'react-redux'

export default function Header() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [isCart, setCart] = useState(false)
    const [isDrawer, setDrawer] = useState(false)
    const { products } = useSelector((state => state.cart))
    const wishlistProducts = useSelector((state => state.wishlist))

    useEffect(() => {
        dispatch(productsList())
        dispatch(wishListProducts())
    }, [dispatch])

    return (
        <div>
            {/* header for desktop */}
            <div className="desktop-header-container d-none d-lg-block shadow-sm">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-between">

                                {/* Logo Container */}
                                <div className="logo-container">
                                    <Link href="/">
                                        <img src="/assets/logo.png" alt="Famefair Logo" style={{ width: 180, height: 40 }} />
                                    </Link>
                                </div>

                                {/* Search Container */}
                                <div className="search-container flex-fill">
                                    <SearchComponent />
                                </div>

                                {/* Buttons */}
                                <div className="button-container">
                                    <button
                                        type="button"
                                        className="btn shadow-none badge-btn favourite-btn"
                                        onClick={() => router.push('/favorite-list')}
                                    >
                                        <Icon icon={heart} size={20} />
                                        <span className="badge">
                                            {wishlistProducts.products && wishlistProducts.products.length ? wishlistProducts.products.length : 0}
                                        </span>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn shadow-none badge-btn"
                                        onClick={() => setCart(true)}
                                    >
                                        <Icon icon={shoppingCart} size={20} />
                                        <span className="badge">{products && products.length ? products.length : 0}</span>
                                    </button>

                                    <button
                                        type="button"
                                        className="btn shadow-none badge-btn"
                                        onClick={() => router.push('/login')}
                                    >
                                        <Icon icon={user} size={21} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header for Tablet & Mobile */}
            <div className="tablet-mobile-header-container d-lg-none bg-white shadow-sm">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex">
                                {/* Search container */}
                                <div className="search-container flex-fill">
                                    <SearchComponent />
                                </div>

                                {/* Menu button container */}
                                <div className="pl-1">
                                    <button
                                        type="button"
                                        className="btn shadow-none menu-btn rounded-circle"
                                        onClick={() => setDrawer(true)}
                                    >
                                        <Icon icon={menu} size={25} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar drawer */}
            <Drawer
                show={isDrawer}
                onHide={() => setDrawer(false)}
            />

            {/* Shopping cart */}
            {isCart ?
                <CartComponent
                    show={isCart}
                    onHide={() => setCart(false)}
                />
                : null}

        </div>
    )
}
