
interface Product {
    namePrd: String,
    quantity: Number,
    price: Number
}


export interface Order {
    id: Number,
    orderCode: String,
    name: String,
    userId?: Number,
    product?: Product[]
}