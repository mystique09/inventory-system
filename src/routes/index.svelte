<script>
	import { session } from '$app/stores';
</script>

<p>Session: {JSON.stringify($session)}</p>
{#if $session != null}
	<h1>You are authenticated!</h1>
	<p>Welcome to Dashboard</p>
{:else}
	<h1>Not authenticated.</h1>
	<p>Click here to get authenticated: <a href="/auth">Sign In</a></p>
{/if}

