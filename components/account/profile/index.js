import { useRouter } from 'next/router'
import Icon from "react-icons-kit"
import {
    edit2,
    grid,
    settings,
    user,
    clock,
    logOut,
    pieChart
} from "react-icons-kit/feather"

const index = () => {
    const router = useRouter()

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
                            <Icon icon={edit2} size={18} />
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
                        className="btn shadow-none btn-block"
                        onClick={() => router.push('/account')}
                    >
                        <Icon icon={grid} size={18} />Dashboard
                    </button>
                    <button
                        type="button"
                        className="btn shadow-none btn-block"
                        onClick={() => router.push('/account/order-list')}
                    >
                        <Icon icon={pieChart} size={18} />Order List
                    </button>
                    <button
                        type="button"
                        className="btn shadow-none btn-block"
                        onClick={() => router.push('/account/review')}
                    >
                        <Icon icon={clock} size={18} />Review
                    </button>
                    <button
                        type="button"
                        className="btn shadow-none btn-block"
                        onClick={() => router.push('/account/basic-information')}
                    >
                        <Icon icon={user} size={18} />Basic Information
                    </button>
                    <button
                        type="button"
                        className="btn shadow-none btn-block"
                        onClick={() => router.push('/account/change-password')}
                    >
                        <Icon icon={settings} size={18} />Change Password
                    </button>
                    <button
                        type="button"
                        className="btn shadow-none btn-block"
                    >
                        <Icon icon={logOut} size={18} />Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default index;