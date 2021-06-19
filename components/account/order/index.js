import Link from 'next/link'

const index = (props) => {
    return (
        <div>
            <table className="table table-sm table-borderless table-responsive-md custom-review-table mb-0">
                <thead>
                    <tr>
                        <td className="pl-3">Order ID</td>
                        <td>Order Date</td>
                        <td>Amount</td>
                        <td className="text-center">Payment</td>
                        <td className="text-center">Status</td>
                    </tr>
                </thead>
                <tbody>
                    {props.orders && props.orders.map((item, i) =>
                        <tr key={i}>
                            <td
                                className="pl-3"
                                style={{ minWidth: 120 }}
                            >
                                <Link href={`/account/order-list`}><p className="link-text text-info mb-0">{item.orderId}</p></Link>
                            </td>
                            <td style={{ minWidth: 180 }}>
                                <p>{item.date}</p>
                            </td>
                            <td style={{ minWidth: 100 }}><p>Tk. {item.amount}</p></td>
                            <td
                                style={{ minWidth: 100 }}
                                className="text-center">
                                {item.payment === "paid" ?
                                    <span className="approved">{item.payment}</span>
                                    :
                                    <span className="pending">{item.payment}</span>
                                }
                            </td>
                            <td
                                className="text-center"
                                style={{ minWidth: 120 }}>
                                <span className="approved">{item.status}</span>
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