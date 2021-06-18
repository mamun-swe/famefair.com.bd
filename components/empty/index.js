
const index = (props) => {
    return (
        <div className="empty-container">
            <div className="flex-center flex-column">
                <img src="/assets/empty.png" className="img-fluid" alt="empty" />
                <p>{props.message}</p>
            </div>
        </div>
    );
};

export default index;