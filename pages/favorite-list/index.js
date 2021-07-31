
import Head from 'next/head'
import { useEffect } from 'react'
import { X } from 'react-feather'
import {
    wishListProducts,
    removeFromList
} from '../../redux/Actions/wishlist'
import { addProduct } from '../../redux/Actions/cart'
import { useSelector, useDispatch } from 'react-redux'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import Footer from '../../components/footer/index'
import GotoTop from '../../components/goTop/index'
import EmptyComponent from '../../components/empty/index'


const index = () => {
    const dispatch = useDispatch()
    const { products } = useSelector((state => state.wishlist))
    const lastItem = products.length - 1

    useEffect(() => {
        dispatch(wishListProducts())
    }, [dispatch])

    // Remove item from list
    const removeItem = id => dispatch(removeFromList(id))

    // Return to cart
    const returnToCart = data => {
        dispatch(addProduct(data))
        removeItem(data._id)
    }

    return (
        <div>
            <Head>
                <title>Famefair || Favorite List</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavbarTop />
            <NavbarBottom />

            <main>
                <div className="favorite-list-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card shadow-sm">

                                    {products && products.length ?
                                        products && products.map((item, i) =>
                                            <div
                                                key={i}
                                                className={i === lastItem ? "card-body p-2 py-3 p-lg-4" : "card-body p-2 py-3 p-lg-4 border-bottom"}
                                            >
                                                <div className="d-md-flex">
                                                    <div className="image-container">
                                                        <img src={item.image} className="img-fluid" alt={item.name} />
                                                    </div>

                                                    <div className="flex-fill px-2 px-lg-4">
                                                        <h6>{item.name}</h6>
                                                        <p><span>SKU :</span> {item.sku}</p>
                                                        <p><span>BRAND :</span> {item.brand ? item.brand : 'N/A'}</p>
                                                    </div>

                                                    <div className="text-end ps-2 ps-lg-0">
                                                        <button
                                                            type="button"
                                                            className="btn shadow-none cart-btn"
                                                            onClick={() => returnToCart(item)}
                                                        >Add to cart</button>
                                                        <button
                                                            type="button"
                                                            className="btn shadow-none remove-btn ms-2"
                                                            onClick={() => removeItem(item._id)}
                                                        >
                                                            <X size={20} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : <EmptyComponent message={'No products in wishlist.'} />}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
                <GotoTop />
            </main>
        </div>
    );
};

export default index;