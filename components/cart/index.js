import React, { useState } from 'react'
import Icon from 'react-icons-kit'
import { ic_clear } from 'react-icons-kit/md'
import { arrowRight } from 'react-icons-kit/feather'

import CartProducts from './products'
import CartCheckout from './checkout'
import { products } from '../../utils/data'

const Index = ({ show, onHide }) => {
    const [isCheckout, setCheckout] = useState(false)
    const user = {
        name: 'Mamun',
        phone: '01533592610',
        area: 'Dhaka'
    }

    return (
        <div className="shopping-cart">

            {/* backdrop */}
            <div className={show ? "backdrop open-backdrop" : "backdrop"} onClick={onHide}></div>

            {/* cart container */}
            <div className={show ? "shopping-cart-container open" : "shopping-cart-container"}>

                {/* Cart header */}
                <div className="cart-header">
                    <div className="d-flex">
                        <div><h6 className="mb-0">Shopping Cart</h6></div>
                        <div className="ml-auto">
                            <button type="button" className="btn btn-light rounded-circle shadow-none" onClick={onHide}>
                                <Icon icon={ic_clear} size={22} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Cart body */}
                <div className={show ? "cart-body open" : "cart-body"}>
                    {isCheckout ?
                        <CartCheckout
                            user={user}
                            onHide={() => setCheckout(false)}
                        />
                        :
                        <CartProducts products={products.slice(0, 5)} />
                    }
                </div>

                {/* Cart Footer */}
                <div className="cart-footer text-center">
                    {products.length && !isCheckout ?
                        <button
                            type="button"
                            className="btn action-btn shadow-none btn-block"
                            onClick={() => setCheckout(true)}
                        >
                            Checkout Now <Icon icon={arrowRight} size={20} />
                        </button>
                        : null}
                </div>
            </div>
        </div>
    );
};

export default Index;
