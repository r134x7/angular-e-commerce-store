export interface Category {
    id: number;
    name: string;
};

export interface Order {
    id: number;
    purchaseDate: Date;
    products: [
        Product,
    ]
};

export interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    quantity: number;
    category: Category;
};

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    orders: [Order]
};
