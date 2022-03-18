<script lang="ts">
	export let name: string;
	export let brand: string;
	export let category: string;
	export let price: number;
	export let stock: number;
</script>

<tr>
	<td>{name}</td>
	<td>{category}</td>
	<td>{brand}</td>
	<td>{price}</td>
	<td>{stock}</td>
	<td>{stock !== 0 ? 'In Stock' : 'Out of Stock'}</td>
	<td class="option">
		<button type="button">Delete</button>
		<button>Edit</button>
	</td>
</tr>

<style lang="postcss">
	td {
		@apply text-xs font-light border-collapse border border-slate-500 px-8;
	}
</style>
