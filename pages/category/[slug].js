
import Head from 'next/head'
import InfiniteScroll from 'react-infinite-scroll-component'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import Footer from '../../components/footer/index'
import GotoTop from '../../components/goTop/index'
import Product from '../../components/product/index'

import { CategoryLoader } from '../../components/contentLoader/Category'
import { ProducstLoader } from '../../components/contentLoader/Products'

import { categories } from '../../utils/data'
import { CategoryProducts } from '../api/index'

import { useCallback, useEffect, useState } from 'react'

import { products } from '../../utils/data'

export default function Category() {
    const [page, setPage] = useState(0)
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    // Fetch data
    const fetchData = useCallback(async () => {
        try {
            const response = await CategoryProducts(0)
            if (response.status === 200) {
                setTimeout(() => {
                    setItems(response.data)
                }, 500)
            }
            setLoading(false)
        } catch (error) {
            if (error) {
                console.log(error)
            }
        }
    }, [])


    useEffect(() => {
        fetchData()
    }, [fetchData])


    //   Get more data
    const getMore = async () => {
        try {
            setPage(page + 1)
            const response = await CategoryProducts(page + 1)
            if (response.status === 200) {
                setItems([...items, ...response.data])
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
                {loading ?
                    <CategoryLoader />
                    :
                    <div>

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
                                        <InfiniteScroll
                                            dataLength={items.length}
                                            next={getMore}
                                            hasMore={true}
                                            loader={<ProducstLoader items={18} />}
                                            endMessage={
                                                <p style={{ textAlign: 'center' }}>
                                                    <b>Yay! You have seen it all</b>
                                                </p>
                                            }
                                        >
                                            {items && items.length ?
                                                items.map((item, j) =>
                                                    <Product
                                                        key={j}
                                                        item={products[1]}
                                                    />
                                                )
                                                : null}

                                        </InfiniteScroll>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <Footer />
                <GotoTop />

            </main>



        </div>
    )
}
