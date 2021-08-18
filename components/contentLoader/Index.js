import React, { useEffect, useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { ProducstLoader } from './Product'

// Carousel loader
export const CarouselLoader = (props) => {
    const container = useRef()
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setWidth(container.current.offsetWidth)
            setHeight(container.current.offsetHeight)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)

    }, [])


    return (
        <div className="custom-carousel-container">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="carousel-container">
                            <div className="carousel-card" ref={container}>
                                <Skeleton
                                    circle={props.circle}
                                    width={props.width ? props.width : width}
                                    height={props.height ? props.height : height}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

// Banner loader
export const BannerLoader = (props) => {
    const container = useRef()
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setWidth(container.current.offsetWidth)
            setHeight(container.current.offsetHeight)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div style={{ width: "100%", height: "100%" }} ref={container}>
            <Skeleton
                width={props.width ? props.width : width}
                height={props.height ? props.height : height}
            />
        </div>
    );
};

// Categories loader
export const CategoriesLoader = (props) => {
    return (
        <div>
            {props.items ?
                [...Array(props.items).keys()].map((item) =>
                    <div className="categories-container" key={item}>
                        <div className="container mb-4 mb-lg-5">
                            <div className="row">
                                <div className="col-12 mb-1" style={{ padding: "0px 20px" }}>
                                    <div className="d-flex">
                                        <div><Skeleton width={240} height={35} /></div>
                                        <div className="ms-auto">
                                            <Skeleton width={80} height={35} />
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12">
                                    <ProducstLoader items={12} />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
        </div>
    );
};