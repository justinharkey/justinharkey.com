<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
	export let data: { status: number; page: any; };
</script>

<div class="text-column">
	<h1>{@html data.page.title.rendered}</h1>

	{@html data.page.content.rendered}
</div>
