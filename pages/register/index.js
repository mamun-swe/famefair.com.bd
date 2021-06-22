import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import Footer from '../../components/footer/index'
import GotoTop from '../../components/goTop/index'

const index = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [isLoading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            console.log(data)

            setTimeout(() => {
                setLoading(false)
                reset()
            }, 1500);
            // setRegData(data)

            // const response = await sendOTP(data.phone)
            // if (response.status === 201) {
            //     setLoading(false)
            //     setOtp({ ...otp, core: response.data.otp, show: true })
            // }
        } catch (error) {
            setLoading(false)
        }
    }


    return (
        <div>
            <Head>
                <title>Famefair || Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavbarTop />
            <NavbarBottom />

            {/* Auth container */}
            <main>
                <div className="auth-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card shadow-sm border-0">
                                    <div className="card-header text-center bg-white">
                                        <h5 className="mb-2">Register</h5>
                                        <p>New to Famefair ? Create account.</p>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit(onSubmit)}>

                                            {/* Name */}
                                            <div className="form-group mb-4">
                                                {errors.name && errors.name.message ?
                                                    <small className="text-danger">{errors.name && errors.name.message}</small>
                                                    : <small>Name</small>}

                                                <input
                                                    type="text"
                                                    className={errors.name ? "form-control shadow-none error" : "form-control shadow-none"}
                                                    placeholder="Your name"
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
                                                    {...register("phone", { required: "Phone is required" })}
                                                />
                                            </div>


                                            {/* Password */}
                                            <div className="form-group mb-4">
                                                {errors.password && errors.password.message ?
                                                    <small className="text-danger">{errors.password && errors.password.message}</small>
                                                    : <small>Password</small>}

                                                <input
                                                    type="password"
                                                    className={errors.password ? "form-control shadow-none error" : "form-control shadow-none"}
                                                    placeholder="*****"
                                                    {...register("password", {
                                                        required: "Password is required",
                                                        minLength: {
                                                            value: 8,
                                                            message: "Minimun length 8 character"
                                                        }
                                                    })}
                                                />
                                            </div>


                                            <button type="submit" className="btn btn-block shadow-none" disabled={isLoading}>
                                                {isLoading ? <span>Loading...</span> : <span>Submit</span>}
                                            </button>
                                        </form>

                                        <div className="text-right mt-4">
                                            <p>Already have an account ? <Link href="/login">Login</Link></p>
                                        </div>
                                    </div>

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
