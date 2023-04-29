export interface Category {
    name: string;
};

export interface Order {
    purchaseDate: Date;
    products: [
        Product,
    ]
};

export interface Product {
    name: string;
    description: string;
    image: string;
    price: number;
    quantity: number;
    category: Category;
};

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    orders: [Order]
};
