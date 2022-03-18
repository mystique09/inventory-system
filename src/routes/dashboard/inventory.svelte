<script context="module">
	export async function load({ session }) {
		if (!session) {
			return {
				status: 302,
				redirect: '/auth'
			};
		}
		return {
			props: {}
		};
	}
</script>

<script>
	import ProductCard from '$lib/components/product_card.svelte';
	import { products } from '../../stores/product';
</script>

<div class="inventory">
	<div class="head">
		<h1>Inventory</h1>
		<button type="button">Add New Product</button>
	</div>

	<div class="products">
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Category</th>
					<th>Brand</th>
					<th>Price</th>
					<th>Stock</th>
					<th>Status</th>
					<th>Option</th>
				</tr>
			</thead>
			<tbody>
				{#each $products as product}
					<ProductCard {...product} />
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style lang="postcss">
	.inventory {
		@apply h-full w-screen p-4;
	}
	.head {
		@apply flex flex-row items-center justify-between pb-4;
	}
	.products {
		@apply w-full overflow-auto;
	}

	h1 {
		@apply font-bold text-2xl;
	}

	table {
		@apply w-full border-collapse border border-slate-500 bg-gray-300 table-auto;
	}

	th {
		@apply text-sm font-semibold border-collapse border border-slate-500;
	}
</style>
