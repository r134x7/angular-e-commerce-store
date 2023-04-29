import { User } from "./models";
import { products } from "./mock-product";

export const users: User[] = [
    {
        id: 1,
        firstName: 'Pamela',
        lastName: 'Washington',
        email: 'pamela@testmail.com',
        password: 'password12345',
        orders: [
          { id: 1,
            purchaseDate: new Date(),
            products: [products[0], products[0], products[1]]
          },
          {
            id: 2,
            purchaseDate: new Date(),
            products: [products[3], products[4], products[5]]
          }
        ]
    },
    {
        id: 2,
        firstName: 'Elijah',
        lastName: 'Holt',
        email: 'eholt@testmail.com',
        password: 'password12345',
        orders: [],
    }
]