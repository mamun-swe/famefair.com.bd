
import Head from 'next/head'
import { withAuth } from '../../components/withAuth'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import Footer from '../../components/footer/index'
import ProfileComponent from '../../components/account/profile/index'
// import EmptyComponent from '../../components/empty/index'
import OrderTable from '../../components/account/order/index'

import { orders } from '../../utils/data'

const OrderList = () => {
    return (
        <div className="account-container">
            <Head>
                <title>Famefair || Order List</title>
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
                                            <h6 className="mb-0">Order List</h6>
                                        </div>
                                        <div className="card-body p-0">
                                            {/* <EmptyComponent message={'No orders available.'} /> */}
                                            <OrderTable orders={orders} />
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

export default withAuth(OrderList);