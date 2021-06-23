import Head from 'next/head'
import { useRouter } from 'next/router'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import Footer from '../../components/footer/index'
import GotoTop from '../../components/goTop/index'
import ProductImages from '../../components/productImages/index'
import ProductContent from '../../components/productContent/index'
import ProductTab from '../../components/productTab/index'

import { products } from '../../utils/data'

export default function Product() {
    let product
    const router = useRouter()
    const slug = router.query.slug

    if (slug) product = products.find(x => x._id === parseInt(slug))

    return (
        <div className="product-show">
            <Head>
                <title>Famefair || Product</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavbarTop />
            <NavbarBottom />

            <main>
                <div className="container py-3">
                    <div className="row mb-3 mb-lg-4">
                        <div className="col-12 col-lg-7 mb-3 mb-lg-0 pr-lg-2">
                            <div className="card border-0 shadow-sm" style={card}>
                                <div className="card-body">
                                    <ProductImages products={products.slice(0, 6)} />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-5 pl-lg-2">
                            <div className="card border-0 shadow-sm" style={card}>
                                <div className="card-body p-lg-4">
                                    <ProductContent data={product} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 mb-4">
                            <div className="card border-0 shadow-sm" style={card}>
                                <div className="card-body">
                                    <ProductTab />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
                <GotoTop />
            </main>
        </div>
    )
}

const card = { borderRadius: 6 }