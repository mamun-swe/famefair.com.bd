
// Prepare product for add to cart
export const PrepareForCart = data => {
    const product = {
        _id: data._id,
        slug: data.slug,
        name: data.name,
        sku: data.sku,
        price: data.price,
        stock_amount: data.stock_amount,
        quantity: data.quantity,
        brand: data.brand ? data.brand : null,
        vendor: data.vendor ? data.vendor : null,
        category: data.category ? data.category : null,
        discount_amount: data.discount_amount ? data.discount_amount : null,
        image: data.image
    }

    return product
}