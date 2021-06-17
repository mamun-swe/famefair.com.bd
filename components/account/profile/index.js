import Icon from "react-icons-kit"
import { edit2 } from "react-icons-kit/feather";

const index = () => {
    return (
        <div className="profile-card-container">
            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white border-0 p-3">

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

                <div className="card-body p-3">
                    <div className="btn-container">
                        <button type="button" className="btn shadow-none btn-block text-center">Profile</button>
                        <button type="button" className="btn shadow-none btn-block text-center">Orders</button>
                        <button type="button" className="btn shadow-none btn-block text-center">Update</button>
                        <button type="button" className="btn shadow-none btn-block text-center">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;