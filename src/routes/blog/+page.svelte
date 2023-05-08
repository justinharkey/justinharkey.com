<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Blogs by Justin Harkey" />
</svelte:head>

<script lang="ts">
    export let data: { status: number; blogs: any; };
</script>

<div id="page">
	<h1>Blog</h1>

	<div id="content">
		<div id="container">
			{#if data.status === 200}
                {#each data.blogs as blog, i}
                <a href={blog.link.replace(/(https:\/\/cms.justinharkey.com)/, '/blog').replace(/\/$/, "")} style="overflow: hidden; display:block;">
                    {#if blog._embedded && blog._embedded['wp:featuredmedia'] && blog._embedded['wp:featuredmedia']['0']}
                        <img src={blog._embedded['wp:featuredmedia']['0'].source_url} style="max-width: 300px; max-height: 300px; float: right; margin: 0 0 0 20px" />
                    {/if}
                    <h2>{@html blog.title.rendered}</h2>
                    <h3>{new Date(blog.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>
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
		background: url(https://media.tenor.com/uoJ_AcqxoPkAAAAC/typing.gif) 50% 80% no-repeat;
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

    a {
        color: inherit;
        padding: 2rem;
        position: relative;
    }

    a:hover {
        text-decoration: none;
    }

    a:hover h2 {
        color: #f80;
    }

    a:hover::after {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		background-image: url(https://media.tenor.com/rCTjuSKG7FAAAAAC/static-gif-animated-tv.gif);
        background-size: cover;
		opacity: 0.1;
	}

	h2 {
        font-size: 2rem;
        margin: 0 0 0.5rem;
        padding: 0;
        color: #ffffff;
    }

    h3 {
        font-size: 0.8rem;
        font-weight: normal;
        margin: 0;
        padding: 0;
        color: #a1a1a1;
    }

    .excerpt {
        font-size: 1.1rem;
        margin: 0;
        padding: 0;
        color: #ecfffd;
    }

    hr {
        height: 1px;
        width: 100%;
        background: rgb(102, 0, 14);
        border: 0;
        margin: 0;
        padding: 0;
    }
</style>