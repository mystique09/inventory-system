<script>
	import { session } from '$app/stores';
	console.log($session);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
Session: {$session}
