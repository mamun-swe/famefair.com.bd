import Link from 'next/link';

import Product from '../product/index'
import { categories, products } from '../../utils/data'

const index = () => {
    return (
        <div className="categories-container">
            {categories && categories.map((category, i) =>
                <div className="container mb-4 mb-lg-5" key={i}>
                    <div className="row">
                        <div className="col-12 mb-1 px-4">
                            <div className="d-flex">
                                <div><h5>{category.name}</h5></div>
                                <div className="ml-auto">
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
        </div>
    );
};

export default index;