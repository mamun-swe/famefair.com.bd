

const index = () => {
    return (
        <div className="feature-container">
            <div className="container">
                <div className="row">
                    <div className="col-3 text-center">
                        <div className="feature-item">
                            <div className="icon-container rounded-circle flex-center flex-column">
                                <img src="/icons/delivery.png" className="img-fluid" alt="feature" />
                            </div>
                            <p>Fast Delivery to</p>
                        </div>
                    </div>
                    <div className="col-3 text-center">
                        <div className="feature-item">
                            <div className="icon-container rounded-circle flex-center flex-column">
                                <img src="/icons/customer.png" className="img-fluid" alt="feature" />
                            </div>
                            <p>Customer Service</p>
                        </div>
                    </div>
                    <div className="col-3 text-center">
                        <div className="feature-item">
                            <div className="icon-container rounded-circle flex-center flex-column">
                                <img src="/icons/refund.png" className="img-fluid" alt="feature" />
                            </div>
                            <p>100% Refund</p>
                        </div>
                    </div>
                    <div className="col-3 text-center">
                        <div className="feature-item">
                            <div className="icon-container rounded-circle flex-center flex-column">
                                <img src="/icons/cart.png" className="img-fluid" alt="feature" />
                            </div>
                            <p>Safe Shopping</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;