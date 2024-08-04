<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

</div>

<style>
	main {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 3vw 4em;
	}
</style>
