import React from 'react'
import { Button } from 'react-bootstrap'
import { ChevronDown, ChevronUp, Trash2 } from 'react-feather'
import EmptyComponent from '../empty/index'

const products = (props) => {
    return (
        <div className="cart-items-container">
            {props.products && props.products.length ?
                props.products.map((product, i) =>
                    <div className="cart-item d-flex border-bottom p-2" key={i}>

                        {/* Quantity Inc Desc container */}
                        <div className="quantity-inc-desc-container">
                            <ul>
                                <li>
                                    <button
                                        type="button"
                                        className="btn btn-sm shadow-none"
                                        onClick={() => props.increment(product._id)}
                                        disabled={product.quantity >= product.stockAmount ? true : false}
                                    >
                                        <ChevronUp className="icon" size={18} />
                                    </button>
                                </li>
                                <li><p>{product.quantity}</p></li>
                                <li>
                                    <button
                                        type="button"
                                        className="btn btn-sm shadow-none"
                                        onClick={() => props.decrement(product._id)}
                                        disabled={product.quantity <= 1 ? true : false}
                                    >
                                        <ChevronDown className="icon" size={18} />
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* image container */}
                        <div className="px-2">
                            <img src={product.image} width="50" height="50" alt="..." />
                        </div>

                        {/* content container */}
                        <div className="flex-fill">
                            <p className="fw-light text-dark mb-0">{product.name.length > 28 ? product.name.slice(0, 28) + " ..." : product.name}</p>
                            <p className="fw-light text-black-50 mb-0">৳ {product.price} x {product.quantity}</p>
                            {!product.shopType ? <p className="fw-light text-primary mb-0" onClick={() => props.addWishlist(product)}>Return Wishlist</p> : null}
                        </div>

                        {/* remove item container */}
                        <div className="pl-2">
                            <Button
                                variant="white"
                                className="shadow-none px-2 py-3"
                                onClick={() => props.remove(product._id)}
                            >
                                <Trash2 size={15} />
                            </Button>
                        </div>
                    </div>
                ) :
                <EmptyComponent message={'No products in cart.'} />
            }
        </div>
    );
};

export default products;