<script context="module">
	export async function load({ session }) {
		if (!session) {
			return {
				status: 302,
				redirect: '/auth'
			};
		}
		return {
			props: {
				data: 'Welcome to Profile'
			}
		};
	}
</script>

<script>
	export let data;
</script>

<h1>Profile</h1>
<p>{data}</p>
