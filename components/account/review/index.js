import Link from 'next/link'

const index = (props) => {
    return (
        <div>
            <table className="table table-sm table-borderless custom-review-table mb-0">
                <thead>
                    <tr>
                        <td className="text-center">SL</td>
                        <td>Product & Review</td>
                        <td className="text-center">Rating</td>
                        <td className="text-center">Status</td>
                    </tr>
                </thead>
                <tbody>
                    {props.reviews && props.reviews.map((item, i) =>
                        <tr key={i}>
                            <td className="text-center" style={{ width: 50 }}><p>{i + 1}</p></td>
                            <td>
                                <Link href={`/account/review`}><h6>Product: {item.product}</h6></Link>
                                <p>Review: {item.review}</p>
                            </td>
                            <td className="text-center" style={{ width: 60 }}><p>{item.rating}</p></td>
                            <td className="text-center" style={{ width: 120 }}>
                                <span className="approved">Approved</span>
                                {/* <span className="pending">Pending</span> */}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default index;