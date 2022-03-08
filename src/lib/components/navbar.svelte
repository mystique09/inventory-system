<script>
	import { goto } from '$app/navigation';

	import { session } from '$app/stores';
	let toggleNav = false;

	function toggleNavbar() {
		toggleNav = !toggleNav;
	}

	async function signOut() {
		let res = await fetch('http://localhost:3000/api/signout', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			}
		});

		let data = await res.json();
		if (data) {
			window.location.replace('/auth');
			goto(window.location.href);
		}
	}
</script>

<div class="nav">
	<div class="logo"><a href="/">Inventory System</a></div>
	{#if !$session}
		<ul class:show={toggleNav === true} class="nav_links">
			<li><a href="/auth">Login</a></li>
			<li><a href="/signup">Sign Up</a></li>
		</ul>
	{:else}
		<ul class="nav_links" class:show={toggleNav === true}>
			<li><a href="/settings">Settings</a></li>
			<li><button on:click={signOut}>Sign out</button></li>
		</ul>
	{/if}
	<div class="menu" on:click={toggleNavbar}>
		<span />
		<span />
		<span />
	</div>
</div>

<style lang="postcss">
	.nav {
		@apply flex flex-row items-center justify-between px-2 bg-black text-white h-20;
	}

	.logo {
		@apply font-bold text-xl text-orange-400;
	}

	.nav_links {
		@apply hidden rounded-md absolute right-2 text-gray-50 font-bold top-16 flex-col items-center justify-between bg-blue-500 w-[150px] py-2 px-4 gap-2;
	}

	.menu {
		@apply h-8 w-8 flex flex-col items-center justify-evenly gap-1;
	}

	.menu span {
		@apply h-1 w-full bg-gray-200 rounded-md;
	}

	.show {
		@apply flex;
	}
</style>
