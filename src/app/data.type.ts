export interface UserInfo {
    id?: Number;
    Name: String,
    Password: String,
    Email: String
}
export interface Product {
    id?: Number;
    name: String,
    rate: number,
    type: String,
    desc: String,
    img: String,
}
export interface SignUp {
    Name: String,
    Password: String,
    Email: String
}
export interface Login {
    Email: String,
    Password: String,
}