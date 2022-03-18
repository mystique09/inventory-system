import { writable, type Writable } from 'svelte/store';

export interface Product {
  name: string;
  price: number;
  category: string;
  brand: string;
  stock: number;
  owner: User;
}

export interface User {
  id: number;
  username: string;
  email: string;
}

export const products: Writable<Array<Product>> = writable([
  { name: "Camera", category: "Digital Device", price: 2000, stock: 200, brand: "Sony", owner: { id: 1, username: "mystique09", email: "test@email.com" } },
  { name: "iPhone 12", category: "Phone", price: 20000, stock: 50, brand: "Sony", owner: { id: 1, username: "mystique09", email: "test@email.com" } },
  { name: "XBox", category: "Gaming", price: 50000, stock: 0, brand: "Sony", owner: { id: 1, username: "mystique09", email: "test@email.com" } }

]);

// TODO:
export function addProduct(payload: Product) {
  // TODO:
  products.update(product => {
    product.push(payload);
    return product;
  });
}

export function updateProduct(payload: Product) {
  // TODO:
}

export function deleteProduct(payload: Product) {
  // TODO:
}
