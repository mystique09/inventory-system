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

<div class="dashboard">
	<div class="product-stock-cards">
		<h2>Dashboard</h2>
		<div class="card" />
		<div class="card" />
		<div class="card" />
	</div>
	<div class="chart">
		<h2>Chart</h2>
		<div class="chart-cards">
			<div class="chart-card" />
			<div class="chart-card" />
			<div class="chart-card" />
		</div>
	</div>
</div>

<style lang="postcss">
	.dashboard {
		@apply m-auto bg-gray-50 p-4 md:px-10 h-full w-full flex flex-col items-start justify-between;
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
