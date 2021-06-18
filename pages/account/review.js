
import Head from 'next/head'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import ProfileComponent from '../../components/account/profile/index'

const Review = () => {
    return (
        <div className="account-container">
            <Head>
                <title>Famefair || Review</title>
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
                                            <h6 className="mb-0">Review</h6>
                                        </div>
                                        <div className="card-body p-3">

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

export default Review;