
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import Footer from '../../components/footer/index'
import GotoTop from '../../components/goTop/index'
import Product from '../../components/product/index'

import { CategoryBySlug, CategoryProducts } from '../api/index'
import { useQuery } from '../../components/useQuery/index'
import { BannerLoader } from '../../components/contentLoader/Index'
import { ProducstLoader } from '../../components/contentLoader/Product'

export default function Category() {
    const query = useQuery()
    const [page, setPage] = useState(2)
    const [loading, setLoading] = useState(true)

    const [category, setCategory] = useState({ value: null, loading: true })
    const [products, setProducts] = useState([])

    // Fetch category
    const fetchCategory = useCallback(async (slug) => {
        try {
            const response = await CategoryBySlug(slug)
            if (response.status === 200) {
                setCategory({ value: response.data.data, loading: false })
            }
        } catch (error) {
            if (error) console.log(error)
        }
    }, [])

    // Fetch products
    const fetchProducts = useCallback(async (id) => {
        try {
            const response = await CategoryProducts(id, 1)
            if (response.status === 200) {
                setProducts(response.data.data)
            }
        } catch (error) {
            if (error) console.log(error)
        }
    }, [])


    useEffect(() => {
        if (query) fetchCategory(query.slug)
    }, [query, fetchCategory])

    useEffect(() => {
        if (category.value) fetchProducts(category.value._id)
    }, [category, fetchProducts])


    //   Get more data
    const getMore = async () => {
        try {
            setLoading(true)
            const response = await CategoryProducts(category.value._id, page)
            if (response.status === 200) {
                if (response.data.data && response.data.data.length) {
                    setProducts([...products, ...response.data.data])
                    setPage(page + 1)
                } else {
                    setLoading(false)
                }
            }
        } catch (error) {
            if (error) console.log(error)
        }
    }

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
                                    {category.loading ? <BannerLoader /> :
                                        <img src={category.value.image} className="img-fluid" alt="..." />
                                    }
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
                                <InfiniteScroll
                                    dataLength={products.length}
                                    next={getMore}
                                    hasMore={loading}
                                    loader={<ProducstLoader items={14} />}
                                >
                                    {products && products.length ?
                                        products.map((item, j) =>
                                            <Product key={j} item={item} />
                                        ) : null
                                    }
                                </InfiniteScroll>
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
