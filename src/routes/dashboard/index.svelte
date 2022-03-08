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
</script>

<main>
	<div class="wrap">
		<div class="sidebar">
			<h2>Navigation</h2>
			<ul class="pages">
				<li><a href="/">Dashboard</a></li>
				<li><a href="/dashboard/location">Location</a></li>
				<li><a href="/dashboard/inventory">Inventory</a></li>
			</ul>
		</div>
		<div class="dashboard">
			<h1>Dashboard</h1>
			<div class="product-stock-cards">
				<div class="card"></div>
				<div class="card"></div>
				<div class="card"></div>
			</div>
		</div>
		<div class="chart">
			<h1>Chart</h1>
			<div class="chart-cards">
				<div class="chart-card"></div>
				<div class="chart-card"></div>
				<div class="chart-card"></div>
			</div>
		</div>
	</div>
</main>

<style lang="postcss">
	main {
		@apply max-w-4xl mt-auto bg-gray-50;
	}
	.wrap {
		@apply grid grid-cols-2;
	}
	.sidebar {
		@apply w-1/2 h-screen p-4 pt-10;
	}
	.sidebar h2 {
		@apply font-bold text-lg;
	}
	.sidebar .pages {
		@apply flex flex-col gap-8 mt-10;
	}
	a {
		@apply hover:underline hover:text-orange-500;
	}
</style>