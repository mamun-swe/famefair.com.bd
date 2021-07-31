import { useRouter } from 'next/router'
import { Clock, Edit2, Grid, LogOut, PieChart, Settings, ShoppingBag, User } from 'react-feather'

const index = () => {
    const router = useRouter()
    const path = router.pathname

    const isActive = activePath => {
        if (activePath === path) return true
        return false
    }

    // Remove token from localStorage & Logout
    const doLogout = () => {
        localStorage.removeItem("token")
        router.push("/")
    }

    return (
        <div className="profile-card-container">
            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white border-0 p-4">

                    {/* Image container */}
                    <div className="image-container flex-center flex-column">
                        <div className="image">
                            <img src="/assets/user.png" className="img-fluid" alt="User profile" />
                        </div>
                        <button type="button" className="btn shadow-sm rounded-circle">
                            <Edit2 size={18} />
                        </button>
                    </div>

                    {/* Content container */}
                    <div className="content-container">
                        <h6>abdullah al mamun</h6>
                        <p>mamun.swe.277@gmail.com</p>
                        <p>01533592610</p>
                    </div>
                </div>

                <div className="card-body px-0 pt-0">
                    <button
                        type="button"
                        onClick={() => router.push('/')}
                        className="btn shadow-none w-100"
                    >
                        <ShoppingBag size={18} className="me-2" />Back to Shopping
                    </button>
                    <button
                        type="button"
                        onClick={() => router.push('/account')}
                        className={isActive("/account") ? "btn shadow-none w-100 active" : "btn shadow-none w-100"}
                    >
                        <Grid size={18} className="me-2" />Dashboard
                    </button>
                    <button
                        type="button"
                        onClick={() => router.push('/account/order-list')}
                        className={isActive("/account/order-list") ? "btn shadow-none w-100 active" : "btn shadow-none w-100"}
                    >
                        <PieChart size={18} className="me-2" />Order List
                    </button>
                    <button
                        type="button"
                        onClick={() => router.push('/account/review')}
                        className={isActive("/account/review") ? "btn shadow-none w-100 active" : "btn shadow-none w-100"}
                    >
                        <Clock size={18} className="me-2" />Review
                    </button>
                    <button
                        type="button"
                        onClick={() => router.push('/account/basic-information')}
                        className={isActive("/account/basic-information") ? "btn shadow-none w-100 active" : "btn shadow-none w-100"}
                    >
                        <User size={18} className="me-2" />Basic Information
                    </button>
                    <button
                        type="button"
                        onClick={() => router.push('/account/change-password')}
                        className={isActive("/account/change-password") ? "btn shadow-none w-100 active" : "btn shadow-none w-100"}
                    >
                        <Settings size={18} className="me-2" />Change Password
                    </button>
                    <button
                        type="button"
                        className="btn shadow-none w-100"
                        onClick={doLogout}
                    >
                        <LogOut size={18} className="me-2" />Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default index;