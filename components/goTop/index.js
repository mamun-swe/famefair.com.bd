import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'react-feather'

const index = () => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let isTop = window.scrollY > 400
            if (isTop !== true) {
                setShow(false)
            } else {
                setShow(true)
            }
        })
    }, [])

    const gotoTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <div className="go-to-top-container">
            {show ?
                <button type="button" className="btn shadow rounded-circle border-0" onClick={gotoTop}>
                    <ArrowUp size={22} />
                </button>
                : null}
        </div>
    );
};

export default index;