import Head from 'next/head'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import Footer from '../../components/footer/index'
import GotoTop from '../../components/goTop/index'

export default function Product() {

    return (
        <div className="product-show">
            <Head>
                <title>Famefair || Product</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavbarTop />
            <NavbarBottom />

            <main>

                <Footer />
                <GotoTop />
            </main>
        </div>
    )
}