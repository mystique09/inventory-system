<script>
    import DashboardSidebar from "$lib/components/dashboard_sidebar.svelte";
</script>

<div class="wrap">
    <DashboardSidebar />
    <slot></slot>
</div>

<style lang="postcss">
.wrap {
		@apply h-full flex flex-col md:flex-row items-start md:justify-between justify-evenly;
	}
</style>