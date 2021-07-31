
import Head from 'next/head'
import {
    AlertCircle,
    CheckCircle,
    DollarSign,
    PieChart
} from 'react-feather'
import { withAuth } from '../../components/withAuth'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import Footer from '../../components/footer/index'
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

                                <div className="data-container flex-fill  ps-lg-3">
                                    <div className="card border-0 shadow-sm">
                                        <div className="card-header bg-white p-4">
                                            <h6 className="mb-0">Welcome Famefair account</h6>
                                        </div>
                                        <div className="card-body p-3">

                                            <div className="item-container">
                                                <div className="item-body">
                                                    <p><PieChart size={20} className="text-info mr-1" /> Total Order</p>
                                                    <h5>110.0</h5>
                                                </div>
                                            </div>

                                            <div className="item-container">
                                                <div className="item-body">
                                                    <p><CheckCircle size={20} className="text-info mr-1" /> Success Order</p>
                                                    <h5>110.0</h5>
                                                </div>
                                            </div>

                                            <div className="item-container">
                                                <div className="item-body">
                                                    <p><AlertCircle size={20} className="text-info mr-1" /> Pending Order</p>
                                                    <h5>110.0</h5>
                                                </div>
                                            </div>

                                            <div className="item-container">
                                                <div className="item-body">
                                                    <p><DollarSign size={20} className="text-info mr-1" /> Total Purchase</p>
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

                <Footer />
            </main>
        </div>
    );
};

export default withAuth(index);