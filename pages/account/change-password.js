import React, { useState } from 'react'
import Head from 'next/head'
import { useForm } from 'react-hook-form'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import Footer from '../../components/footer/index'
import ProfileComponent from '../../components/account/profile/index'

const ChangePassword = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [isLoading, setLoading] = useState(false)

    // Submit data
    const onSubmit = async (data) => {
        try {
            setLoading(true)
            console.log(data)

            setTimeout(() => {
                reset()
                setLoading(false)
            }, 1500)

        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    return (
        <div className="account-container">
            <Head>
                <title>Famefair || Change Password</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavbarTop />
            <NavbarBottom />

            <main>
                <div className="container change-password-container py-3">
                    <div className="row">
                        <div className="col-12 col-padding">
                            <div className="d-lg-flex">
                                <div className="profile-info-container mb-3 mb-lg-0">
                                    <ProfileComponent />
                                </div>
                                <div className="data-container flex-fill pl-lg-3">
                                    <div className="card border-0 shadow-sm">
                                        <div className="card-header bg-white p-4">
                                            <h6 className="mb-0">Change Password</h6>
                                        </div>
                                        <div className="card-body p-4">
                                            <div className="form-container">

                                                <form onSubmit={handleSubmit(onSubmit)}>

                                                    {/* Old Password */}
                                                    <div className="form-group mb-4">
                                                        {errors.oldPassword && errors.oldPassword.message ?
                                                            <small className="text-danger">{errors.oldPassword && errors.oldPassword.message}</small>
                                                            : <small>Old Password</small>}

                                                        <input
                                                            type="password"
                                                            className={errors.oldPassword ? "form-control shadow-none error" : "form-control shadow-none"}
                                                            placeholder="*****"
                                                            {...register("oldPassword", {
                                                                required: "Old password is required",
                                                                minLength: {
                                                                    value: 8,
                                                                    message: "Minimun length 8 character"
                                                                }
                                                            })}
                                                        />
                                                    </div>

                                                    {/* New Password */}
                                                    <div className="form-group mb-4">
                                                        {errors.newPassword && errors.newPassword.message ?
                                                            <small className="text-danger">{errors.newPassword && errors.newPassword.message}</small>
                                                            : <small>New password</small>}

                                                        <input
                                                            type="password"
                                                            className={errors.newPassword ? "form-control shadow-none error" : "form-control shadow-none"}
                                                            placeholder="*****"
                                                            {...register("newPassword", {
                                                                required: "New password is required",
                                                                minLength: {
                                                                    value: 8,
                                                                    message: "Minimun length 8 character"
                                                                }
                                                            })}
                                                        />
                                                    </div>

                                                    {/* Confirm Password */}
                                                    <div className="form-group mb-4">
                                                        {errors.confirmPassword && errors.confirmPassword.message ?
                                                            <small className="text-danger">{errors.confirmPassword && errors.confirmPassword.message}</small>
                                                            : <small>Confirm password</small>}

                                                        <input
                                                            type="password"
                                                            className={errors.confirmPassword ? "form-control shadow-none error" : "form-control shadow-none"}
                                                            placeholder="*****"
                                                            {...register("confirmPassword", {
                                                                required: "Confirm password is required",
                                                                minLength: {
                                                                    value: 8,
                                                                    message: "Minimun length 8 character"
                                                                }
                                                            })}
                                                        />
                                                    </div>

                                                    <div className="text-right">
                                                        <button
                                                            type="submit"
                                                            className="btn shadow-none submit-btn"
                                                            disabled={isLoading}
                                                        >
                                                            {isLoading ? 'Saving ...' : 'Save'}
                                                        </button>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </main>
        </div>
    );
};

export default ChangePassword;