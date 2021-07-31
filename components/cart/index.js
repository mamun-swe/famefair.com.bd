import React, { useState, useEffect } from 'react'
import { X } from 'react-feather'
import { Offcanvas } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import CommaNumber from 'comma-number'

import { useSelector, useDispatch } from 'react-redux'
import {
    productsList,
    incrementQuantity,
    decrementQuantity,
    removeProduct
} from '../../redux/Actions/cart'
import { addWistlist } from '../../redux/Actions/wishlist'


import ProductsComponent from './products'
import CartCheckout from './checkout'


const Index = ({ show, onHide }) => {
    const dispatch = useDispatch()
    const [isProcessing, setProcessing] = useState(false)
    const { products } = useSelector((state => state.cart))

    const [isCheckout, setCheckout] = useState(false)
    const user = {
        name: 'Mamun',
        phone: '01533592610',
        area: 'Dhaka'
    }

    useEffect(() => {
        dispatch(productsList())
    }, [dispatch])

    // Add to wishlist
    const addToWishlist = data => {
        dispatch(addWistlist(data))
        dispatch(removeProduct(data._id))
    }

    return (
        <div className="shopping-cart">
            <Offcanvas show={show} onHide={onHide} placement={'end'}>

                {/* Header */}
                <Offcanvas.Header>
                    <div className="d-flex w-100">
                        <div className="flex-grow-1">
                            <Button
                                variant="light"
                                className="rounded-circle shadow-none"
                                style={{ padding: "4px 6px" }}
                                onClick={onHide}
                            >
                                <X size={20} />
                            </Button>
                        </div>
                        <div><p className="fs-6 fw-bolder mt-1 mb-0">My Cart</p></div>
                    </div>
                </Offcanvas.Header>

                {/* Body */}
                <Offcanvas.Body bsPrefix="offcanvas-body">

                    <ProductsComponent
                        products={products}
                        increment={id => dispatch(incrementQuantity(id))}
                        decrement={id => dispatch(decrementQuantity(id))}
                        addWishlist={product => addToWishlist(product)}
                        remove={id => dispatch(removeProduct(id))}
                    />

                </Offcanvas.Body>

                {/* Footer */}
                <Offcanvas.Header bsPrefix="offcanvas-header">
                    <div className="w-100">

                        {/* Calculated total price */}
                        <div className="d-flex mb-3">
                            <div className="flex-grow-1">
                                <p style={{ fontSize: 16 }} className="mb-0 fw-bolder">Total</p>
                            </div>
                            <div><p style={{ fontSize: 16 }} className="mb-0 fw-bolder">Tk. {CommaNumber(50000)}</p></div>
                        </div>

                        {/* Checkout process */}
                        <div>
                            <button
                                type="button"
                                className="btn action-btn shadow-none"
                            // onClick={handleProcess}
                            // disabled={isProcessing}
                            >{isProcessing ? "Processing ..." : `Process Order`}</button>
                        </div>
                    </div>
                </Offcanvas.Header>
            </Offcanvas>
        </div>
    );
};

export default Index;
