import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { withAuth } from '../../components/withAuth'

import { districts } from '../../utils/districts'
import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import Footer from '../../components/footer/index'
import ProfileComponent from '../../components/account/profile/index'
import SingleSelect from '../../components/select/single'

const BasicInformation = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [isLoading, setLoading] = useState(false)
    const [isEdit, setEdit] = useState(false)
    const [area, setArea] = useState({ options: [], value: null, error: null })

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

    // Submit data
    const onSubmit = async (data) => {
        try {
            if (!area.value) return setArea({ ...area, error: 'Area is required' })

            setLoading(true)
            const formData = {
                ...data,
                area: area.value
            }

            console.log(formData)

            setTimeout(() => {
                reset()
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
            console.log(error)
        }
    }

    return (
        <div className="account-container">
            <Head>
                <title>Famefair || Basic Information</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavbarTop />
            <NavbarBottom />

            <main>
                <div className="container basic-info py-3">
                    <div className="row">
                        <div className="col-12 col-padding">
                            <div className="d-lg-flex">
                                <div className="profile-info-container mb-3 mb-lg-0">
                                    <ProfileComponent />
                                </div>
                                <div className="data-container flex-fill ps-lg-3">
                                    <div className="card border-0 shadow-sm">
                                        <div className="card-header bg-white p-4">
                                            <h6 className="mb-0">Basic Information</h6>
                                        </div>
                                        <div className="card-body p-4">
                                            {!isEdit ?

                                                // Content container
                                                <div className="content-container">
                                                    <div className="d-flex">
                                                        <div style={{ width: 90 }}>
                                                            <p>Name</p>
                                                            <p>E-mail</p>
                                                            <p>Phone</p>
                                                            <p>Area</p>
                                                            <p>Address</p>
                                                        </div>
                                                        <div>
                                                            <p>: Test user</p>
                                                            <p className="text-lowercase">: example@gmail.com</p>
                                                            <p>: 017xxxxxxxx</p>
                                                            <p>: Dhaka</p>
                                                            <p>: Ashulia, Savar</p>
                                                        </div>
                                                    </div>

                                                    <button
                                                        type="button"
                                                        className="btn shadow-none edit-btn mt-3"
                                                        onClick={() => setEdit(true)}
                                                    >Edit Information</button>
                                                </div>

                                                :
                                                // Edit container
                                                <div className="edit-info-container">
                                                    <form onSubmit={handleSubmit(onSubmit)}>
                                                        <div className="row">

                                                            {/* Name */}
                                                            <div className="col-12 col-lg-6">
                                                                <div className="form-group mb-4">
                                                                    {errors.name && errors.name.message ?
                                                                        <small className="text-danger">{errors.name && errors.name.message}</small>
                                                                        : <small>Name</small>}

                                                                    <input
                                                                        type="text"
                                                                        placeholder="Your name"
                                                                        className={errors.name ? "form-control shadow-none error" : "form-control shadow-none"}
                                                                        {...register("name", { required: "Name is required" })}
                                                                    />
                                                                </div>
                                                            </div>

                                                            {/* E-mail */}
                                                            <div className="col-12 col-lg-6">
                                                                <div className="form-group mb-4">
                                                                    {errors.email && errors.email.message ?
                                                                        <small className="text-danger">{errors.email && errors.email.message}</small>
                                                                        : <small>E-mail</small>}

                                                                    <input
                                                                        type="text"
                                                                        placeholder="example@gmail.com"
                                                                        className={errors.email ? "form-control shadow-none error" : "form-control shadow-none"}
                                                                        {...register("email",
                                                                            {
                                                                                required: "E-mail is required",
                                                                                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i }
                                                                            })
                                                                        }
                                                                    />
                                                                </div>
                                                            </div>

                                                            {/* Phone */}
                                                            <div className="col-12 col-lg-6">
                                                                <div className="form-group mb-4">
                                                                    {errors.phone && errors.phone.message ?
                                                                        <small className="text-danger">{errors.phone && errors.phone.message}</small>
                                                                        : <small>Phone</small>}

                                                                    <input
                                                                        type="text"
                                                                        placeholder="01xxxxxxxxx"
                                                                        className={errors.phone ? "form-control shadow-none error" : "form-control shadow-none"}
                                                                        {...register("phone", { required: "Phone is required" })}
                                                                    />
                                                                </div>
                                                            </div>

                                                            {/* Area */}
                                                            <div className="col-12 col-lg-6">
                                                                <div className="form-group mb-4">
                                                                    {area.error ? <small className="text-danger">{area.error}</small> : <small>Area</small>}

                                                                    <SingleSelect
                                                                        placeholder={'area'}
                                                                        error={area.error}
                                                                        options={area.options}
                                                                        value={(event) => setArea({ ...area, value: event.value, error: null })}
                                                                    />
                                                                </div>
                                                            </div>

                                                            {/* Address */}
                                                            <div className="col-12">
                                                                <div className="form-group mb-4">
                                                                    {errors.address && errors.address.message ?
                                                                        <small className="text-danger">{errors.address && errors.address.message}</small>
                                                                        : <small>Address</small>}

                                                                    <input
                                                                        type="text"
                                                                        placeholder="Enter primary address"
                                                                        className={errors.address ? "form-control shadow-none error" : "form-control shadow-none"}
                                                                        {...register("address", { required: "Address is required" })}
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="col-12 text-end">
                                                                <button
                                                                    type="submit"
                                                                    className="btn shadow-none submit-btn"
                                                                    disabled={isLoading}
                                                                >{isLoading ? 'Loading ...' : 'Submit'}</button>

                                                                <button
                                                                    type="button"
                                                                    className="btn shadow-none danger-btn ms-2"
                                                                    onClick={() => setEdit(false)}
                                                                >Cancel</button>
                                                            </div>

                                                        </div>
                                                    </form>
                                                </div>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </main>
        </div>
    );
};

export default withAuth(BasicInformation);