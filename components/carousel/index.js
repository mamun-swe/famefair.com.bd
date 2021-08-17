import React from 'react'
import Link from 'next/link'
import { Carousel } from 'react-bootstrap'
import { CarouselLoader } from '../contentLoader/Index'
import { carousels } from '../../utils/data'

const index = (props) => {

    if (props.loading) return <CarouselLoader />

    return (
        <div className="custom-carousel-container">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <div className="carousel-container">
                            <Carousel controls={false}>
                                {props.data && props.data.length && props.data.map((slider, i) =>
                                    <Carousel.Item key={i}>
                                        <div className="carousel-card">
                                            <Link href={`/category/${slider.category}`}>
                                                <img src={slider.image} className="img-fluid" alt="..." />
                                            </Link>
                                        </div>
                                    </Carousel.Item>
                                )}
                            </Carousel>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default index;