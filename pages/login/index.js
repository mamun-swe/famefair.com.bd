import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Jwt from 'jsonwebtoken'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import Footer from '../../components/footer/index'
import GotoTop from '../../components/goTop/index'

const index = () => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isLoading, setLoading] = useState(false)

    if (typeof window !== "undefined") {
        const accessToken = localStorage.getItem("token")
        if (accessToken) router.replace("/account")
    }

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            console.log(data)

            setTimeout(() => {
                const token = Jwt.sign(
                    { phone: data.phone }, "MYSECRET", { expiresIn: '10d' }
                )

                localStorage.setItem('token', token)
                setLoading(false)
                router.push('/account')
            }, 1500);
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
            toast.error(error)
        }
    }

    return (
        <div>
            <Head>
                <title>Famefair || Login</title>
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
                                        <h5 className="mb-2">Login</h5>
                                        <p>Login your account</p>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit(onSubmit)}>

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

                                            <button type="submit" className="btn w-100 shadow-none" disabled={isLoading}>
                                                {isLoading ? <span>Loading...</span> : <span>Submit</span>}
                                            </button>
                                        </form>

                                        <div className="text-end mt-4">
                                            <p className="mb-1">Have no account ? <Link href="/register">Register</Link></p>
                                            <p>Forgot password ? <Link href="/reset">Reset</Link></p>
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
