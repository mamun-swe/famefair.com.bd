
import Head from 'next/head'
import { useRouter } from 'next/router'
import { withAuth } from '../../../components/withAuth'
import { DateFormate } from '../../../utils/_helpers'
import { ShortName } from '../../../components/shortName'

import NavbarTop from '../../../components/navbarTop/index'
import NavbarBottom from '../../../components/navbarBottom/index'
import Footer from '../../../components/footer/index'
import ProfileComponent from '../../../components/account/profile/index'
import ProductsList from '../../../components/account/products/index'
import { products } from '../../../utils/data'

const Order = () => {
    const { query } = useRouter()

    return (
        <div className="account-container">
            <Head>
                <title>Famefair || Order Show</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavbarTop />
            <NavbarBottom />

            <main>
                <div className="container order-show-container py-3">
                    <div className="row">
                        <div className="col-12 col-padding">
                            <div className="d-lg-flex">
                                <div className="profile-info-container mb-3 mb-lg-0">
                                    <ProfileComponent />
                                </div>
                                <div className="data-container flex-fill pl-lg-3">
                                    <div className="card border-0 shadow-sm">
                                        <div className="card-header bg-white p-4">
                                            <h6 className="mb-0">Invoice: {query.id}</h6>
                                        </div>
                                        <div className="card-body p-4">

                                            {/* Biller & Order info */}
                                            <div className="row mb-3">

                                                {/* Bill To */}
                                                <div className="col-12 col-lg-6 mb-3 mb-lg-0">
                                                    <h5>Bill To </h5>
                                                    <div className="d-flex">
                                                        <div style={{ width: 50 }}>
                                                            <ShortName
                                                                x={40}
                                                                y={40}
                                                                size={16}
                                                                name="Abdullah Al Mamun"
                                                            />
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="text-capitalize">abdullah al mamun</p>
                                                            <p className="text-capitalize">01XXXXXXXXX</p>
                                                            <p className="text-capitalize">ashulia, savar, dhaka</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Order info */}
                                                <div className="col-12 col-lg-6">
                                                    <h5>Order Info. </h5>
                                                    <div className="d-flex">
                                                        <div style={{ width: 120 }}>
                                                            <p className="text-muted">Date</p>
                                                            <p className="text-muted">Order Code</p>
                                                            <p className="text-muted">Order Status</p>
                                                            <p className="text-muted">Payment Status</p>
                                                            <p className="text-muted">Payment Method</p>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="text-capitalize">: {DateFormate(new Date())}</p>
                                                            <p>: FF12345</p>
                                                            <p className="text-capitalize">: created</p>
                                                            <p className="text-capitalize">: pending</p>
                                                            <p className="text-capitalize">: cash on delivery</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Sub-total & Delivery charge */}
                                            <div className="row subtotal-comission-total-container">
                                                <div className="col-12 col-padding">

                                                    {/* Subtotal */}
                                                    <div className="card">
                                                        <div className="body shadow-sm">
                                                            <h6>Tk. 500</h6>
                                                            <p>Sub-total</p>
                                                        </div>
                                                    </div>

                                                    {/* Delivery Charge */}
                                                    <div className="card">
                                                        <div className="body shadow-sm">
                                                            <h6>Tk. 60</h6>
                                                            <p>Delivery Charge</p>
                                                        </div>
                                                    </div>

                                                    {/* Total */}
                                                    <div className="card">
                                                        <div className="body shadow-sm">
                                                            <h6>Tk. 560</h6>
                                                            <p>total</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            {/* Ordered products */}
                                            <div>
                                                {/* Approved products */}
                                                {products && products.length &&
                                                    <ProductsList
                                                        products={products.slice(0, 3)}
                                                        type={'Approved products'}
                                                    />
                                                }
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

const styles = {
    smTd: { width: 100 },
    fontSz: { fontsize: 8 + 'px' }
}

export default withAuth(Order);