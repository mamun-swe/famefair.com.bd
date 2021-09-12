import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import NavbarTop from '../../components/navbarTop/index'
import NavbarBottom from '../../components/navbarBottom/index'
import Footer from '../../components/footer/index'
import GotoTop from '../../components/goTop/index'
import Product from '../../components/product/index'

import { products } from '../../utils/data'
import { ProducstLoader } from '../../components/contentLoader/Product'
import { SearchResults } from '../../pages/api/index'


export default function SearchResult() {
    const { query } = useRouter()
    const [data, setData] = useState([])
    const [page, setPage] = useState(2)
    const [loading, setLoading] = useState(true)

    // fetch search results
    const fetchData = useCallback(async (query) => {
        try {
            const response = await SearchResults(query, 1, 10)
            if (response.status === 200) setData(response.data.data)
            setLoading(false)
        } catch (error) {
            if (error) console.log(error)
        }
    }, [])

    useEffect(() => {
        if (query) fetchData(query.query)
    }, [query, fetchData])

    // get more data
    const getMoreData = async () => {
        try {
            setLoading(true)
            const response = await SearchResults(query.query, page, 10)
            if (response.status === 200) {
                if (response.data.data && response.data.data.length) {
                    setData([...data, ...response.data.data])
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
                                        <h6 className="mb-0">Found products {data ? data.length : 0}</h6>
                                    </div>
                                </div>
                            </div>

                            {/* Products */}
                            <div className="col-12">
                                {loading ?
                                    <ProducstLoader items={14} />
                                    : data && data.length ?
                                        <InfiniteScroll
                                            dataLength={data.length}
                                            next={getMoreData}
                                            hasMore={loading}
                                            loader={<ProducstLoader items={14} />}
                                        >
                                            {data.map((item, j) =>
                                                <Product key={j} item={item} />
                                            )}
                                        </InfiniteScroll>
                                        : null
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