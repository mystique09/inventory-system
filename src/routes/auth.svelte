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
	let error = '';
	async function submitForm() {
		let res = await fetch('http://localhost:3000/api/auth', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			}
		});

		const data = await res.json();
		if (data) {
			window.location.reload();
			return;
		}
		error = data.error;
	}
</script>

<main>
	<form on:submit|preventDefault={submitForm}>
		<h1>Welcome Back!</h1>
		<div class="input-wrapper">
			<label for="username">Username</label>
			<input type="text" name="username" id="username" />
		</div>
		<div class="input-wrapper">
			<label for="password">Password</label>
			<input type="password" name="password" id="password" />
		</div>
		<div class="error">
			{error}
		</div>
		<button id="submit" type="submit">Login</button>
		<div class="info">
			Doesn't have an account? <a href="/signup">Sign Up</a>
		</div>
	</form>
</main>

<style lang="postcss">
	main {
		@apply max-w-4xl mt-16 h-full flex flex-col justify-center m-auto;
	}
	form {
		@apply m-auto w-[98%] p-8 rounded-md flex flex-col items-center justify-center bg-orange-100;
	}
	form h1 {
		@apply font-bold text-orange-400 text-4xl mb-8;
	}
	.input-wrapper {
		@apply flex flex-col items-start justify-start p-2;
	}
	.input-wrapper label {
		@apply font-light pb-2 text-sm;
	}
	.input-wrapper input[type='text'],
	input[type='password'] {
		@apply focus:ring focus:ring-orange-500 hover:border-none outline-none rounded-md py-4 px-10 text-left w-full;
	}
	#submit {
		@apply bg-orange-300 rounded-md px-24 py-4 m-4;
	}
	.error {
		@apply p-2 text-red-700;
	}
	.info {
		@apply pt-4;
	}
	a {
		@apply underline text-orange-500;
	}
</style>

