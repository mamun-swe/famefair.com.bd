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
            }, 1500);
            // setRegData(data)

            // const response = await sendOTP(data.phone)
            // if (response.status === 201) {
            //     setLoading(false)
            //     setOtp({ ...otp, core: response.data.otp, show: true })
            // }
        } catch (error) {
            setLoading(false)
            toast.error(error)
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
                                        <h5 className="mb-0">Register</h5>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit(onSubmit)}>

                                            {/* Name */}
                                            <div className="form-group mb-3">
                                                {errors.name && errors.name.message ? (
                                                    <small className="text-danger">{errors.name && errors.name.message}</small>
                                                ) : <small>Name</small>}

                                                <input
                                                    type="text"
                                                    className={errors.name ? "form-control shadow-none error" : "form-control shadow-none"}
                                                    placeholder="Your name"
                                                    {...register("name", { required: "Name is required" })}
                                                />
                                            </div>

                                            {/* E-mail */}
                                            <div className="form-group mb-3">
                                                {errors.email && errors.email.message ? (
                                                    <small className="text-danger">{errors.email && errors.email.message}</small>
                                                ) : <small>E-mail</small>}

                                                <input
                                                    type="text"
                                                    className={errors.email ? "form-control shadow-none error" : "form-control shadow-none"}
                                                    placeholder="example@gmail.com"
                                                    {...register("email",
                                                        {
                                                            required: "E-mail is required",
                                                            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i }
                                                        })
                                                    }
                                                />
                                            </div>

                                            {/* Password */}
                                            <div className="form-group mb-3">
                                                {errors.password && errors.password.message ? (
                                                    <small className="text-danger">{errors.password && errors.password.message}</small>
                                                ) : <small>Password</small>}

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

                                        <div className="text-right mt-1">
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
