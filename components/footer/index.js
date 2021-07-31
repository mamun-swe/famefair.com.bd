import React, { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Facebook, Instagram, Linkedin, Loader, Mail, MapPin, Phone, Send, Youtube } from 'react-feather';
// import { Subscribe } from '../../pages/api/index'

const index = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isLoading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            // const response = await Subscribe(data)

            // if (response.status === false) {
            //     toast.error(response.message)
            // } else {
            //     toast.success(response.message)
            // }

            console.log(data)
            setTimeout(() => {
                setLoading(false)
            }, 2000)

        } catch (error) {
            if (error) console.log(error)
        }
    }

    return (
        <div className="custom-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8 col-xl-9">
                        <div className="row">

                            {/* Contact information */}
                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <h6>Contact us</h6>
                                <p><a href="tel:+8801910357601"><Phone size={18} className="me-2" />+880 1533-592610 </a></p>
                                <p><a href="mailto:support@famefair.com"><Mail size={18} className="me-2" />support@famefair.com</a></p>
                                <p><MapPin size={18} className="me-2" />Ashulia, Savar, Dhaka 1215</p>
                            </div>

                            {/* Policy & Info */}
                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <h6>Policy & Info</h6>
                                <Link href={`/about-us`}>About Us</Link>
                                <Link href={`/privacy-policy`}>Privacy Policy</Link>
                                <Link href={`/terms-and-conditions`}>Terms Conditions</Link>
                                <Link href={`/faq`}>FAQs</Link>
                            </div>

                            {/* My account */}
                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <h6>My Account</h6>
                                <Link href="/account">Dashboard</Link>
                                <Link href="/account/order-list">Order List</Link>
                                <Link href="/account/review">Review</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 col-xl-3">

                        {/* Subscribe */}
                        <div>
                            <h6>Subscribe now</h6>
                            <p>Love Famefair ? Subscribe to our newsletter to get instant update when we add a product or start a campaign. You may also get coupons.</p>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="d-flex">
                                    <div className="flex-fill">
                                        <input
                                            type="text"
                                            className={errors.email ? "form-control shadow-none error" : "form-control shadow-none"}
                                            placeholder="example@gmail.com"
                                            {...register("email",
                                                {
                                                    required: true,
                                                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i }
                                                })}
                                        />
                                    </div>
                                    <div>
                                        <button type="submit" className="btn shadow-none" disabled={isLoading}>
                                            {isLoading ? <Loader className="spin" size={18} /> : <Send size={22} />}
                                        </button>
                                    </div>
                                </div>
                            </form>

                            {/* Social links */}
                            <div className="social-links">
                                <a href="https://www.facebook.com/famefair.com.bd" target="_blank"><Facebook size={18} /></a>
                                <a href="https://www.facebook.com/famefair.com.bd" target="_blank"><Youtube size={20} /></a>
                                <a href="https://www.facebook.com/famefair.com.bd" target="_blank"><Instagram size={20} /></a>
                                <a href="https://www.facebook.com/famefair.com.bd" target="_blank"><Linkedin size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copywrite */}
            {/* <div className="copy-write">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex">
                                <div><p>Copyright @ 2020-{new Date().getFullYear()} Eazybest Limited. Design & developed by <a href="https://www.antooba.con">ANTOOBA CORP.</a></p></div>
                                <div className="ml-auto">
                                    <img src="/assets/icons/credit-card.png" className="img-fluid" alt="..." />
                                    <img src="/assets/icons/mastercard.png" className="img-fluid" alt="..." />
                                    <img src="/assets/icons/visa.png" className="img-fluid" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default index;
