import Link from 'next/link'
import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import Product from '../product/index'
import { CategoryWithProducts } from '../../pages/api/index'
import { CategoriesLoader } from '../contentLoader/Index'


const index = (props) => {
    const [page, setPage] = useState(2)
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const getMore = async () => {
        try {
            setLoading(true)
            const response = await CategoryWithProducts(page)
            if (response.status === 200) {
                if (response.data.data && response.data.data.length) {
                    setItems([...items, ...response.data.data])
                    setPage(page + 1)
                } else {
                    setLoading(false)
                }
            }
        } catch (error) {
            if (error) console.log(error)
        }
    }

    useEffect(() => {
        if (props.data && props.data.length) {
            setItems(props.data)
        }
    }, [props.data])

    return (
        <div className="categories-container">
            <InfiniteScroll
                dataLength={items.length}
                next={getMore}
                hasMore={loading}
                loader={<CategoriesLoader items={2} />}
            >

                {items && items.map((category, i) =>
                    <div className="container mb-4 mb-lg-5" key={i}>
                        <div className="row">
                            <div className="col-12 mb-1 px-4">
                                <div className="d-flex">
                                    <div><h5>{category.name}</h5></div>
                                    <div className="ms-auto">
                                        <Link href={`/category/${category.slug}`}><button type="button" className="btn shadow-none">View All</button></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                {category.products && category.products.length && category.products.map((item, j) =>
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