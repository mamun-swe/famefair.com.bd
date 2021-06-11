

const index = (props) => {
    return (
        <div className="product-card card border-0">
            <div className="card-body text-center">
                <div className="img-container">
                    <img src={props.item.image} className="img-fluid" alt={props.item.name} />
                </div>
                <p>{props.item.name}</p>
            </div>
        </div>
    );
};

export default index;