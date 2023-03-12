<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Blogs by Justin Harkey" />
</svelte:head>

<script>
	import { each } from "svelte/internal";

    /**
	 * @type {{ status: number; blogs: any; }}
	 */
     export let data;
</script>

<div id="page">
	<h1>Blog</h1>

	<div id="content">
		<div id="container">
			{#if data.status === 200}
                {#each data.blogs as blog, i}
                <a href={blog.link.replace(/(https:\/\/cms.justinharkey.com)/, 'blog')}>
                    <h2>{@html blog.title.rendered}</h2>
                    <h3>{new Date(blog.date).toLocaleDateString('en-US')}</h3>
                    <div class="excerpt">{@html blog.excerpt.rendered}</div>
                </a>
                {#if i !== data.blogs.length - 1}<hr>{/if}
                {/each}
            {:else}
                <h2>Blogs failed to load</h2>
            {/if}
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

    a {
        color: inherit;
    }

	h2 {
        font-size: 2rem;
        margin: 0 0 0.5rem;
        padding: 0;
    }

    h3 {
        font-size: 0.8rem;
        font-weight: normal;
        margin: 0;
        padding: 0;
    }

    .excerpt {
        font-size: 1.1rem;
        margin: 0;
        padding: 0;
    }

    hr {
        height: 1px;
        width: 100%;
        background: rgb(255, 15, 47);
        border: 0;
        margin: 2rem 0;
        padding: 0;
    }
</style>