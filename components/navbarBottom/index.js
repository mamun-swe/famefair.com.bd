import { Icon } from 'react-icons-kit'
import { heart, shoppingCart, user } from 'react-icons-kit/feather'

const index = () => {
    return (
        <div>
            {/* Navbar footer fixed in mobile */}
            <div className="navbar-fixed-footer d-lg-none">
                <div className="d-flex justify-content-between button-container">
                    <div>
                        <button type="button" className="btn shadow-none badge-btn">
                            <Icon icon={heart} size={25} />
                            <span className="badge">0</span>
                        </button>
                    </div>
                    <div>
                        <button type="button" className="btn shadow-none badge-btn">
                            <Icon icon={shoppingCart} size={25} />
                            <span className="badge">0</span>
                        </button>
                    </div>
                    <div>
                        <button type="button" className="btn shadow-none badge-btn">
                            <Icon icon={user} size={25} />
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default index;