import Axios from "axios"
const api = "http://157.245.192.70:4000/api/v1/web/"
// const api = "http://localhost:4000/api/v1/web/"

// Banner
export async function Banner() {
    const response = await Axios.get(`${api}banner`)
    return response
}

// fetch categories with products
export async function CategoryWithProducts(page) {
    const response = await Axios.get(`${api}category?page=${page}`)
    return response
}

// fetch category products with pagination
export async function CategoryProducts(page) {
    const response = await Axios.get(`${api}photos?_page=${page}&_limit=18`)
    return response
}