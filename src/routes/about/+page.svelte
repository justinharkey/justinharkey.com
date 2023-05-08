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
		background: rgba(77, 77, 77, 0.4);
		box-sizing: border-box;
		margin: 0;
        position: relative;
        color: #fff;
	}

    h1::after {
		content: '';
		width: 100%;
		height: 100%;
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		background: url(https://media.tenor.com/wClLBYSWIgEAAAAC/yosemite.gif) 50% 50% no-repeat;
		background-size: cover;
		opacity: 0.7;
	}

	#content {
		padding: 1rem;
		border: 1px solid #f80;
		border-width: 0 1px;
		background: rgba(87, 87, 87, 0.3);
		box-sizing: border-box;
		color: #fff;
	}

	#container {
		max-width: 1400px;
		margin: 0 auto;
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