import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { toast, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from 'react-hook-form'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import Footer from '../../components/footer/index'
import GotoTop from '../../components/goTop/index'

const toastSetting = {
    autoClose: 1500,
    transition: Slide,
    position: "bottom-left",
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined
}

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
            toast.error(error, { ...toastSetting })
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
                    <div className="container reset-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card shadow-sm border-0">
                                    <div className="card-header text-center bg-white">
                                        <h5 className="mb-2">Reset Password</h5>
                                        <p className="mb-0" style={{ fontSize: 14 }}>Just enter your phone number, we will sent you a new password.</p>
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


                                            <button type="submit" className="btn btn-block shadow-none" disabled={isLoading}>
                                                {isLoading ? <span>Loading...</span> : <span>Reset</span>}
                                            </button>
                                        </form>

                                        <div className="text-right mt-4">
                                            <p className="mb-1">Back to <Link href="/login">Login</Link></p>
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
