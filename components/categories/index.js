import Link from 'next/link'
import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import Product from '../product/index'
import { Products } from '../../pages/api/index'
import { CategoriesLoader } from '../contentLoader/Index'
import { products } from '../../utils/data'


const index = ({ data, loading }) => {
    const [page, setPage] = useState(0)
    const [items, setItems] = useState([data])

    const getMore = async () => {
        try {
            setPage(page + 1)
            const response = await Products(page + 1)
            if (response.status === 200) {
                setTimeout(() => {
                    setItems([...items, ...response.data])
                }, 1000)
            }
        } catch (error) {
            if (error) console.log(error)
        }
    }

    if (loading) return <CategoriesLoader items={3} />

    return (
        <div className="categories-container">
            <InfiniteScroll
                dataLength={items.length}
                next={getMore}
                hasMore={true}
                loader={<h4 className="text-center">Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >

                {items && items.map((category, i) =>
                    <div className="container mb-4 mb-lg-5" key={i}>
                        <div className="row">
                            <div className="col-12 mb-1 px-4">
                                <div className="d-flex">
                                    <div><h5>ABC {category.id}</h5></div>
                                    <div className="ms-auto">
                                        <Link href={`/category/${category._id}`}><button type="button" className="btn shadow-none">View All</button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                {products && products.length && products.map((item, j) =>
                                    <Product
                                        key={j}
                                        item={item}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                )}

            </InfiniteScroll>
        </div>
    );
};

export default index;