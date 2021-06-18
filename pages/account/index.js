
import Head from 'next/head'
import Icon from 'react-icons-kit'
import {
    pieChart,
    checkCircle,
    alertCircle,
    dollarSign
} from 'react-icons-kit/feather'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import ProfileComponent from '../../components/account/profile/index'

const index = () => {
    return (
        <div className="account-container">
            <Head>
                <title>Famefair || Account</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavbarTop />
            <NavbarBottom />

            <main>
                <div className="container py-3">
                    <div className="row">
                        <div className="col-12 col-padding">
                            <div className="d-lg-flex">
                                <div className="profile-info-container mb-3 mb-lg-0">
                                    <ProfileComponent />
                                </div>
                                <div className="data-container flex-fill pl-lg-3">
                                    <div className="card border-0 shadow-sm">
                                        <div className="card-header bg-white p-4">
                                            <h6 className="mb-0">Welcome Famefair account</h6>
                                        </div>
                                        <div className="card-body p-3">

                                            <div className="item-container">
                                                <div className="item-body">
                                                    <p><Icon icon={pieChart} size={20} className="text-info mr-1" /> Total Order</p>
                                                    <h5>110.0</h5>
                                                </div>
                                            </div>

                                            <div className="item-container">
                                                <div className="item-body">
                                                    <p><Icon icon={checkCircle} size={20} className="text-info mr-1" /> Success Order</p>
                                                    <h5>110.0</h5>
                                                </div>
                                            </div>

                                            <div className="item-container">
                                                <div className="item-body">
                                                    <p><Icon icon={alertCircle} size={20} className="text-info mr-1" /> Pending Order</p>
                                                    <h5>110.0</h5>
                                                </div>
                                            </div>

                                            <div className="item-container">
                                                <div className="item-body">
                                                    <p><Icon icon={dollarSign} size={20} className="text-info mr-1" /> Total Purchase</p>
                                                    <h5>৳ 110.0</h5>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default index;