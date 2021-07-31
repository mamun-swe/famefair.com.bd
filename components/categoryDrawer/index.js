
import Link from 'next/link'
import { useState } from 'react'
import { Offcanvas } from 'react-bootstrap'
import { ChevronRight } from 'react-feather'

const Index = (props) => {
    const [data] = useState([
        {
            name: "Men fashion",
            slug: "men-fashion"
        },
        {
            name: "Women fashion",
            slug: "women-fashion"
        },
        {
            name: "Baby fashion",
            slug: "baby-fashion"
        },
        {
            name: "Electronics",
            slug: "electronics"
        },
        {
            name: "Computer",
            slug: "computer"
        },
        {
            name: "Mobile",
            slug: "mobile"
        }
    ])

    return (
        <div className="category-drawer-container d-lg-none">
            <Offcanvas show={props.show} onHide={props.onHide} style={{ width: 300, border: 0 }} placement={'start'}>
                <Offcanvas.Header>
                    <p className="fs-6 fw-bolder mt-1 mb-0">Categories</p>
                </Offcanvas.Header>

                <Offcanvas.Body bsPrefix="category-drawer-body" className="px-3">

                    {data && data.map((item, i) =>
                        <Link
                            key={i}
                            href={`/category/${item.slug}`}
                        >
                            <button className="btn shadow-none w-100 rounded-0 text-muted px-0 py-1">
                                <div className="d-flex">
                                    <div><p className="mb-0" style={{ fontSize: 15 }}>{item.name}</p></div>
                                    <div className="ms-auto"> <ChevronRight size={14} /></div>
                                </div>
                            </button>
                        </Link>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default Index;