import React from 'react'
import Icon from 'react-icons-kit'
import {
    ic_clear,
    ic_expand_less,
    ic_expand_more
} from 'react-icons-kit/md'

const Products = (props) => {
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
                                    // onClick={() => dispatch(incrementQuantity(product._id))}
                                    // disabled={product.quantity >= product.stockAmount ? true : false}
                                    >
                                        <Icon icon={ic_expand_less} className="icon" size={18} />
                                    </button>
                                </li>
                                <li><p>{10}</p></li>
                                <li>
                                    <button
                                        type="button"
                                        className="btn btn-sm shadow-none"
                                    // onClick={() => dispatch(decrementQuantity(product._id))}
                                    // disabled={product.quantity <= 1 ? true : false}
                                    >
                                        <Icon icon={ic_expand_more} className="icon" size={18} />
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* image container */}
                        <div className="image-container px-2">
                            <img src={product.image} className="img-fluid" alt="..." />
                        </div>

                        {/* content container */}
                        <div className="content-container flex-fill">
                            <p className="name">{product.name.slice(0, 20)}...</p>
                            <p className="quantity">Quantity: {10}</p>
                        </div>

                        {/* price container */}
                        <div className="price-container flex-fill">
                            <p>{100} ৳</p>
                        </div>

                        {/* remove item container */}
                        <div className="remove-item-container px-1">
                            <button
                                type="button"
                                className="btn btn-sm shadow-none"
                            // onClick={() => dispatch(removeProduct(product._id))}
                            >
                                <Icon icon={ic_clear} className="icon" size={17} />
                            </button>
                        </div>
                    </div>
                ) :
                <div className="text-center p-4">
                    <img src="/assets/empty.png" className="img-fluid" alt="..." style={{ width: 200 }} />
                    <p>Your cart is empty</p>
                </div>
            }


        </div>
    );
};

export default Products;