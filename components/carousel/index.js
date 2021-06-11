import React from 'react'
import Link from 'next/link'
import { Carousel } from 'react-bootstrap'
import { carousels } from '../../utils/data'

const index = () => {
    return (
        <div className="custom-carousel-container">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <div className="carousel-container">
                            <Carousel controls={false}>
                                {carousels.length > 0 && carousels.map((slider, i) =>
                                    <Carousel.Item key={i}>
                                        <div className="carousel-card">
                                            <Link href={`/`}>
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