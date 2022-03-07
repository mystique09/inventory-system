<script context="module">
	export async function load({ session }) {
		if (session) {
			return {
				status: 302,
				redirect: '/dashboard'
			};
		}
		return {
			props: {}
		};
	}
</script>

<script>
	async function submitForm() {
		let res = await fetch('http://localhost:3000/api/auth', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			}
		});

		const data = await res.json();
		console.log(data);
	}
</script>

<main>
	<form on:submit|preventDefault={submitForm}>
		<button type="submit">Login</button>
	</form>
</main>
