export interface UserInfo {
    id?: number;
    Name: string,
    Password?: string,
    Email: string
}
export interface Product {
    id?: number;
    productId?: number;
    description?: string;
    quantity?: number;
    name: string,
    rate: number,
    type: string,
    desc: string,
    img: string,
}
export interface Cart {
    id?: number;
    description?: string;
    quantity?: number;
    name: string,
    rate: number,
    type: string,
    desc: string,
    img: string,
    userId: number,
    productId: number,
}
export interface SignUp {
    Name: string,
    Password: string,
    Email: string
}
export interface Login {
    Email: string,
    Password: string,
}
export interface Summary {
    price: number,
    discount: number,
    tax: number,
    delivery: number,
    total: number
}