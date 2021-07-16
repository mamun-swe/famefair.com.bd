
const index = (props) => {
    return (
        <div className="ordered-products">
            <table className="table table-sm table-responsive-sm table-borderless">
                <thead>
                    <tr>
                        <td className="text-center" style={{ width: 50 }}>SL</td>
                        <td></td>
                        <td>Product</td>
                        <td>Price <small>(Tk)</small></td>
                        <td>Quantity</td>
                        <td>Sub-total <small>(Tk)</small></td>
                    </tr>
                </thead>
                <tbody>
                    {props.products && props.products.map((product, i) =>
                        <tr key={i}>
                            <td className="text-center" style={{ width: 50 }}><p>{i + 1}</p></td>
                            <td className="text-center" style={{ minWidth: 60 }}>
                                <img src={product.image} className="img-fluid" alt="..." />
                            </td>
                            <td style={{ minWidth: 200 }}><p>{<Attributes product={product} />}</p></td>
                            <td style={{ minWidth: 100 }}><p>{product.price}</p></td>
                            <td style={{ minWidth: 100 }}><p>1</p></td>
                            <td style={{ minWidth: 100 }}><p>{product.price * 1}</p></td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="text-right d-flex pr-2 pr-lg-4 py-2" style={{ width: 180, marginLeft: 'auto' }}>
                <div>
                    <p>Sub-total : </p>
                    <p>Delivery charge : </p>
                    <p>Total : </p>
                </div>
                <div className="ml-auto">
                    <p>Tk. 500</p>
                    <p>Tk. 60</p>
                    <p>Tk. 560</p>
                </div>
            </div>
        </div>
    )
}

export default index;

// Product attributes
const Attributes = ({ product }) => {
    return (
        <div>
            <p className="mb-2">{product.name}</p>
            <div className="d-flex">
                <div style={{ width: 50 }}>
                    <p className="text-muted"><b>SKU</b></p>
                    <p className="text-muted"><b>Brand</b></p>
                </div>
                <div className="flex-fill">
                    <p>: {product.sku}</p>
                    <p>: N/A</p>
                </div>
            </div>
        </div>
    )
}
