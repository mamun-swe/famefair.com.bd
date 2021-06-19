import Link from 'next/link'

const index = (props) => {
    return (
        <div>
            <table className="table table-sm table-borderless table-responsive-sm custom-review-table mb-0">
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
                            <td className="text-center" style={{ minWidth: 40 }}><p>{i + 1}</p></td>
                            <td style={{ minWidth: 210 }}>
                                <Link href={`/account/review`}><p className="link-text text-info mb-1">{item.product}</p></Link>
                                <p>{item.review}</p>
                            </td>
                            <td className="text-center" style={{ minWidth: 60 }}><p>{item.rating}</p></td>
                            <td className="text-center" style={{ minWidth: 120 }}>
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