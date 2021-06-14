
import Head from 'next/head'
import { Icon } from 'react-icons-kit'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import Footer from '../../components/footer/index'
import GotoTop from '../../components/goTop/index'

import { products } from '../../utils/data'
import { x } from 'react-icons-kit/feather'

const index = () => {
    const lastItem = products.length - 1

    return (
        <div>
            <Head>
                <title>Famefair || Favorite List</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavbarTop />
            <NavbarBottom />

            <main>
                <div className="favorite-list-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card shadow-sm">

                                    {products && products.map((item, i) =>
                                        <div
                                            key={i}
                                            className={i === lastItem ? "card-body p-2 py-3 p-lg-4" : "card-body p-2 py-3 p-lg-4 border-bottom"}
                                        >
                                            <div className="d-flex">
                                                <div className="image-container">
                                                    <img src={item.image} className="img-fluid" alt={item.name} />
                                                </div>

                                                <div className="flex-fill px-2 px-lg-4">
                                                    <h6>{item.name}</h6>
                                                    <p><span>SKU</span> sku</p>
                                                    <p><span>BRAND</span> brand</p>
                                                </div>

                                                <div>
                                                    <button type="button" className="btn shadow-none">
                                                        <Icon icon={x} size={15} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

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