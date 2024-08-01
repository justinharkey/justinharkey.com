<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
	export let data: { status: number; page: any; };
</script>

<div id="page">
	<h1>{@html data.page.title.rendered}</h1>

	<div id="content">
		<div id="container">
			{@html data.page.content.rendered}
		</div>
	</div>
</div>

<style>

</style>