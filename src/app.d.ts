/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/typescript
// for information about these interfaces
declare namespace App {
	interface Locals {}

	interface Platform {}

	interface Session {}

	interface Stuff {}
}

interface Product {
	name: string;
	price: number;
	stock: number;
	status: boolean;
	owner: User;
}

interface User {
	id: number;
	username: string;
	email: string;
}