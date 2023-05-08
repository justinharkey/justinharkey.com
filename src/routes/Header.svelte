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
		background: rgba(16, 80, 133, 0.7);
		border: 1px solid rgba(16, 80, 133, 0.7);
		border-width: 1px 0;
		margin-top: 16px;
	}

	header::before,
	header::after {
		content: '';
		display: block;
		width: 1px;
		height: 16px;
		background: #7a7a7a;
		position: absolute;
		top: 0;
		left: 16px;
	}

	header::after {
		left: auto;
		right: 16px;
	}

	nav {
		border: 1px solid rgba(16, 80, 133, 0.7);
		border-width: 0 1px;
		margin: 0 1rem;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 2em;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		list-style: none;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 4px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	li[aria-current='page']::after {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		background-image: url(https://media.tenor.com/rCTjuSKG7FAAAAAC/static-gif-animated-tv.gif);
		opacity: 0.6;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1.5rem;
		color: #fff;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		border-right: 1px solid rgba(16, 80, 133, 0.7);
	}

	a:hover {
		color: var(--color-theme-1);
		background:rgba(0, 0, 0, 0.1);
		transition: background 0.2s linear;
	}
</style>
