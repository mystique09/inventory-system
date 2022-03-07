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
				data: 'Welcome to Dashbord'
			}
		};
	}
</script>

<script>
	export let data;
</script>

<h1>Dashbord</h1>
<p>{data}</p>
