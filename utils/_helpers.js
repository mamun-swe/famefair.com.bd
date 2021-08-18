
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
        image: data.images.small
    }

    return product
}


// Total price of cart
export const TotalPrice = products => {
    let total = 0

    if (products && products.length) {
        for (let i = 0; i < products.length; i++) {
            const element = products[i]
            total += parseInt(element.price) * parseInt(element.quantity)
        }
    }

    return total
}

// Date formate
export const DateFormate = (date) => {
    date = new Date(date)
    const cdate = date.toDateString()
    return cdate
}