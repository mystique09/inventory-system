import { writable, type Writable } from "svelte/store";

export const sample_products: Writable<Array<Product>> = writable([]);

// TODO:
export function addProduct(payload: Product) {
    // TODO:
}

export function updateProduct(payload: Product) {
    // TODO:
}

export function deleteProduct(payload: Product) {
    // TODO:
}