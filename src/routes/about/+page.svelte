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
	h1 {
		width: 100%;
		padding: 1rem;
		border: 1px solid #bbb;
		border-width: 0 1px;
		background: rgba(211, 211, 211, 0.4);
		box-sizing: border-box;
		margin: 0;
	}

	#content {
		padding: 1rem;
		border: 1px solid #f80;
		border-width: 0 1px;
		background: rgba(255,255,255,0.4);
		box-sizing: border-box;
	}

	#container {
		max-width: 1400px;
	}

	#content :global(.alignwide) {
		margin: 0;
		padding: 0;
		width: 100%;
		color: #323232
	}
	
	#content :global(.alignwide img) {
		width: 100% !important;
		height: auto !important;
	}

	#content :global(figcaption) {
		font-style: italic;
		color: #8a8a8a;
		font-size: 0.8rem;
		font-weight: bold;
	}
</style>