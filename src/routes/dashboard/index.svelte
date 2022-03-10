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
			<div class="product-stock-cards">
				<h2>Dashboard</h2>
				<div class="card"></div>
				<div class="card"></div>
				<div class="card"></div>
			</div>
			<div class="chart">
				<h2>Chart</h2>
				<div class="chart-cards">
					<div class="chart-card"></div>
					<div class="chart-card"></div>
					<div class="chart-card"></div>
				</div>
			</div>
		</div>
	</div>
</main>

<style lang="postcss">
	main {
		@apply m-auto bg-gray-50 h-screen;
	}
	.wrap {
		@apply h-full flex flex-col md:flex-row items-start md:justify-between justify-evenly;
	}
	.sidebar {
		@apply w-full md:w-auto md:h-screen p-4 pt-10 h-1/2;
	}
	.sidebar h2 {
		@apply font-bold text-base md:text-lg;
	}
	.sidebar .pages {
		@apply flex flex-col gap-8 mt-10;
	}
	a {
		@apply hover:underline hover:text-orange-500;
	}
	.dashboard {
		@apply p-10 h-full w-full flex flex-col items-start justify-between;
	}
	.dashboard .product-stock-cards {
		@apply h-1/2;
	}
	.chart {
		@apply h-1/2;
	}
	.dashboard h2,
	 .chart h2 {
		@apply font-bold text-xl md:text-3xl;
	}
</style>