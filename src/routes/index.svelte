<script lang="ts" context="module">
	export async function load({ session }) {
		if (session) {
			return {
				status: 301,
				redirect: "/dashboard"
			}
		}
		return {}
	}
</script>

<main>
	<div class="wrap">
		<div class="img">
			<img src="/undraw_real_time_analytics_re_yliv.svg" alt="Data">
		</div>
		<div class="content">
			<h1>Inventory System</h1>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam atque quidem cum mollitia laudantium fugit dignissimos saepe quia ad, modi deserunt quod amet velit maxime? Fuga quasi aspernatur quisquam exercitationem?</p>
		</div>
		<a class="signup-btn" href="/signup">Create your own account</a>
	</div>
</main>

<style lang="postcss">
	main {
		@apply max-w-4xl h-screen;
	}
	.wrap {
		@apply flex flex-col gap-4 items-center justify-start h-full;
	}
	.wrap .img {
		@apply w-1/2 flex items-center justify-center m-4 h-1/2;
	}
	.img img {
		@apply w-full h-full;
	}
	.wrap .content {
		@apply flex flex-col gap-4 px-4;
	}
	.content h1 {
		@apply font-bold text-4xl;
	}
	.content p {
		@apply font-light text-base;
	}
	.wrap .signup-btn {
		@apply bg-orange-300 py-4 px-7 mt-5 rounded-md;
	}
</style>