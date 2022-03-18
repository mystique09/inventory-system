import { writable, type Writable } from "svelte/store";

export const sample_products: Writable<Array<Product>> = writable([]);