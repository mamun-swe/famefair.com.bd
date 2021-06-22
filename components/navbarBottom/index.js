import { useState } from 'react'
import { Icon } from 'react-icons-kit'
import { useRouter } from 'next/router'
import { heart, shoppingCart, user } from 'react-icons-kit/feather'

import CartComponent from '../cart/index'

const index = () => {
    const router = useRouter()
    const [isCart, setCart] = useState(false)

    return (
        <div>
            {/* Navbar footer fixed in mobile */}
            <div className="navbar-fixed-footer d-lg-none">
                <div className="d-flex justify-content-between button-container">
                    <div>
                        <button
                            type="button"
                            className="btn shadow-none badge-btn"
                            onClick={() => router.push('/favorite-list')}
                        >
                            <Icon icon={heart} size={23} />
                            <span className="badge">0</span>
                        </button>
                    </div>

                    <div
                        className="logo-container flex-center flex-column"
                        onClick={() => router.push('/')}
                    >
                        <img src="/assets/logo-sm.png" className="img-fluid" alt="Famefair logo" />
                    </div>

                    <div className="ml-auto">
                        <button
                            type="button"
                            className="btn shadow-none badge-btn"
                            onClick={() => setCart(true)}
                        >
                            <Icon icon={shoppingCart} size={23} />
                            <span className="badge">0</span>
                        </button>
                        <button
                            type="button"
                            className="btn shadow-none badge-btn"
                            onClick={() => router.push('/login')}
                        >
                            <Icon icon={user} size={25} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Shopping cart */}
            {isCart ?
                <CartComponent
                    show={isCart}
                    onHide={() => setCart(false)}
                />
                : null}
        </div>
    );
};

export default index;