import React, { useEffect, useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { ProducstLoader } from './Products'

// Category loader
export const CategoryLoader = () => {
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
        <div>

            <div className="banner-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="card banner-card border-0" ref={container}>
                                <Skeleton
                                    width={width}
                                    height={height}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="products-container pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ProducstLoader items={18} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

