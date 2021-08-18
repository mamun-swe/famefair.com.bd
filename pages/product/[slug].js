import Head from 'next/head'
import { useState, useEffect, useCallback } from 'react'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import Footer from '../../components/footer/index'
import GotoTop from '../../components/goTop/index'
import ProductImages from '../../components/productImages/index'
import ProductContent from '../../components/productContent/index'
import ProductTab from '../../components/productTab/index'

import { ProductLoader } from '../../components/contentLoader/Product'
import { useQuery } from '../../components/useQuery/index'
import { ProductBySlug } from '../../pages/api/index'

import { products } from '../../utils/data'

export default function Product() {
    const query = useQuery()
    const [data, setData] = useState({ value: null, loading: true })

    // Fetch Product
    const fetchProduct = useCallback(async (slug) => {
        try {
            const response = await ProductBySlug(slug)
            if (response.status === 200) {
                setData({ value: response.data.data, loading: false })
            }
        } catch (error) {
            if (error) console.log(error)
        }
    }, [])

    useEffect(() => {
        if (query) fetchProduct(query.slug)
    }, [query, fetchProduct])


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

                        {/* Product images */}
                        <div className="col-12 col-lg-7 mb-3 mb-lg-0 pr-lg-2">
                            <div className="card border-0 shadow-sm" style={card}>
                                <div className="card-body">
                                    {data.loading ? <ProductLoader height={250} /> :
                                        <ProductImages data={data.value.images} />}
                                </div>
                            </div>
                        </div>

                        {/* Product information */}
                        <div className="col-12 col-lg-5 pl-lg-2">
                            <div className="card border-0 shadow-sm" style={card}>
                                <div className="card-body p-4">
                                    {data.loading ? <ProductLoader height={250} /> :
                                        <ProductContent data={data.value} />}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product desc / Review */}
                    <div className="row">

                        {/* Tags */}
                        {data.value ?
                            <div className="col-12 mb-3">
                                {data.value.tags && data.value.tags.map((item, i) =>
                                    <span className="px-3 py-2 bg-white shadow-sm text-capitalize rounded me-1 mb-1" style={{ fontSize: 14 }} key={i}>{item}</span>
                                )}
                            </div>
                            : null
                        }

                        {/* Reviews */}
                        <div className="col-12 mb-4">
                            <div className="card border-0 shadow-sm" style={card}>
                                <div className="card-body">
                                    {data.loading ? <ProductLoader height={250} /> :
                                        <ProductTab />}
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