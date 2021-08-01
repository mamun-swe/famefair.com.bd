import React, { useEffect, useRef, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

export const ProducstLoader = (props) => {
    const container = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        const handleResize = () => setWidth(container.current.offsetWidth)

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)

    }, [])


    return (
        <div>
            {props.items ?
                [...Array(props.items).keys()].map((item) =>
                    <div className="product-card" key={item}>
                        <div ref={container}>
                            <Skeleton
                                circle={props.circle}
                                width={props.width ? props.width : width}
                                height={props.height ? props.height : 220}
                            />
                        </div>
                    </div>
                ) : null}
        </div>
    )
};
