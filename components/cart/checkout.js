import React, { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft } from 'react-feather'
import { useForm } from 'react-hook-form'

import { districts } from '../../utils/districts'
import SingleSelect from '../select/single'

const Checkout = (props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [area, setArea] = useState({ options: [], value: null, error: false })
    const [dCharge, setDcharge] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        if (districts) {
            let optionsArr = []
            for (let i = 0; i < districts.length; i++) {
                const element = districts[i]
                const item = {
                    label: `${element.name} - ${element.bn_name}`,
                    value: element.name
                }
                optionsArr.push(item)
            }
            setArea({ ...area, options: optionsArr })
        }
    }, [])

    // Handle area
    const handleArea = event => {
        if (event.value !== "Dhaka") {
            setDcharge(100)
        } else {
            setDcharge(60)
        }
        setArea({ ...area, value: event.value, error: false })
    }

    // Submit order
    const onSubmit = async (data) => {
        try {
            if (!area.value) return setArea({ ...area, error: true })

            const formData = {
                ...data,
                area: area.value,
                deliver_charge: dCharge,
                products: props.products
            }

            setLoading(true)
            console.log(formData)

            setTimeout(() => {
                setLoading(false)
                reset()
                props.onHide()
            }, 1000);
            // const response = await login(data)
            // if (response.status === true) {
            //     setLoading(false)
            //     localStorage.setItem('token', response.token)
            //     router.push('/account')
            // } else {
            //     setLoading(false)
            //     toast.error(response.message)
            // }
        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <div className="checkout-container p-3">
            <div className="back-to-cart mb-4">
                <button
                    type="button"
                    className="btn btn-block p-0 shadow-none text-left"
                    onClick={props.onHide}
                >
                    <ChevronLeft size={20} /> Back to Cart
                </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Name */}
                <div className="form-group mb-4">
                    {errors.name && errors.name.message ?
                        <small className="text-danger">{errors.name && errors.name.message}</small>
                        : <small>Name</small>}

                    <input
                        type="text"
                        placeholder="Your name"
                        className={errors.name ? "form-control shadow-none error" : "form-control shadow-none"}
                        defaultValue={props.user ? props.user.name : null}
                        {...register("name", { required: "Name is required" })}
                    />
                </div>

                {/* Phone */}
                <div className="form-group mb-4">
                    {errors.phone && errors.phone.message ?
                        <small className="text-danger">{errors.phone && errors.phone.message}</small>
                        : <small>Phone</small>}

                    <input
                        type="text"
                        className={errors.phone ? "form-control shadow-none error" : "form-control shadow-none"}
                        placeholder="01XXXXXXXXX"
                        defaultValue={props.user ? props.user.phone : null}
                        readOnly={props.user.phone}
                        {...register("phone", { required: "Phone is required" })}
                    />
                </div>

                {/* Area */}
                <div className="form-group mb-4">
                    <p>Area</p>

                    <SingleSelect
                        error={area.error}
                        placeholder={'Area'}
                        options={area.options}
                        value={handleArea}
                    />
                </div>

                {/* Shipping address */}
                <div className="form-group mb-4">
                    {errors.shipping_address && errors.shipping_address.message ?
                        <small className="text-danger">{errors.shipping_address && errors.shipping_address.message}</small>
                        : <small>Shipping address</small>}

                    <input
                        type="text"
                        className={errors.shipping_address ? "form-control shadow-none error" : "form-control shadow-none"}
                        placeholder="Enter shipping address"
                        {...register("shipping_address", { required: "Shipping address is required" })}
                    />
                </div>


                <div className="text-center">
                    {dCharge ? <p>{dCharge} tk. delivery charge will include your order. </p> : null}
                    <button
                        type="submit"
                        className="btn shadow-none action-btn"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Placing ...' : 'Place Order'}
                        <ArrowRight size={20} />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;