<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<!-- <li aria-current={$page.url.pathname.startsWith('/videos') ? 'page' : undefined}>
				<a href="/videos">Videos</a>
			</li> -->
			<li aria-current={$page.url.pathname.startsWith('/blog') ? 'page' : undefined}>
				<a href="/blog">Blog</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/about') ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	nav {

	}

	ul {
		list-style: none;
		margin: 2em 0;
		padding: 0;
	}

	li {
		padding: 0;
		margin: 0;
		display: inline-block;
		font-size: 16px;
		font-weight: 400;
		margin: 0;
		padding: 0.75em 1.5em;
	}

	a {
		color: #336699;
		text-decoration: none;
	}
</style>
