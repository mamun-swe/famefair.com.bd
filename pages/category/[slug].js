
import Head from 'next/head'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import Footer from '../../components/footer/index'
import GotoTop from '../../components/goTop/index'
import Product from '../../components/product/index'

import { categories, products } from '../../utils/data'

export default function Category() {

    return (
        <div className="category-index">
            <Head>
                <title>Famefair || Category</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavbarTop />
            <NavbarBottom />

            <main>
                {/* Category Banner */}
                <div className="banner-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card banner-card border-0">
                                    <img src={categories[0].banner} className="img-fluid" alt={categories[0].name} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products container */}
                <div className="products-container pb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {products && products.length && products.map((item, j) =>
                                    <Product
                                        key={j}
                                        item={item}
                                    />
                                )}
                                {products && products.length && products.map((item, j) =>
                                    <Product
                                        key={j}
                                        item={item}
                                    />
                                )}
                                {products && products.length && products.map((item, j) =>
                                    <Product
                                        key={j}
                                        item={item}
                                    />
                                )}
                                {products && products.length && products.map((item, j) =>
                                    <Product
                                        key={j}
                                        item={item}
                                    />
                                )}
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
