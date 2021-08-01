import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import Footer from '../../components/footer/index'
import GotoTop from '../../components/goTop/index'
import Product from '../../components/product/index'

import { products } from '../../utils/data'
import { ProducstLoader } from '../../components/contentLoader/Products'


export default function SearchResult() {
    const { query } = useRouter()
    const [loading, setLoading] = useState(true)

    return (
        <div>
            <Head>
                <title>Famefair || Search Results</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavbarTop />
            <NavbarBottom />

            <main>
                <div className="search-results-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 header-column mb-2">
                                <div className="card border-0 shadow-sm">
                                    <div className="card-body p-3">
                                        <h6 className="mb-0">Found products 101</h6>
                                    </div>
                                </div>
                            </div>

                            {/* Products */}
                            <div className="col-12">
                                {loading ? <ProducstLoader items={18} />
                                    : products && products.length && products.map((item, j) =>
                                        <Product
                                            key={j}
                                            item={item}
                                        />
                                    )
                                }
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