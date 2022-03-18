<script>
    let toggle = false;
    function toggleSidebar() {
        toggle = !toggle;
        console.log(toggle)
    }
</script>

<div class="sidebar">
    <h2 on:click={toggleSidebar}>Navigation</h2>
    <ul class="pages" class:hidden={!toggle}>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/dashboard/location">Location</a></li>
        <li><a href="/dashboard/inventory">Inventory</a></li>
    </ul>
</div>

<style lang="postcss">
    .sidebar {
		@apply w-full md:w-auto md:h-auto p-4 pt-10;
	}
	.sidebar h2 {
		@apply font-bold text-base md:text-lg cursor-pointer;
	}
	.sidebar .pages {
		@apply flex-col gap-8 mt-10 h-1/2;
	}
	a {
		@apply hover:underline hover:text-orange-500;
	}
</style>