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
                        <img src={blog._embedded['wp:featuredmedia']['0'].source_url} class="featuredImage" />
                    {/if}
                    <h2>
                        {#if blog.sticky}<img src="/pin.svg" class="sticky" alt="Sticky" />{/if}
                        {@html blog.title.rendered}
                    </h2>
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
    a {
        text-decoration: none;
        color: #323232;
    }
    hr {
        margin: 1em 0;
        padding: 0;
        height: 1px;
        background: #ccc;
        border: 0;
    }
    h2 {
        color: #336699;
    }
    h2, h3 {
        font-family: Nunito, sans-serif;
    }
    .sticky {
        rotate: 45deg;
        margin: -4px 0 0 0;
        padding: 0;
        vertical-align: middle;
    }
    .featuredImage {
        max-width: 300px; 
        max-height: 300px; 
        float: right; 
        margin: 0 0 0 20px;
        border-radius: 4px;
    }

    @media (max-width: 700px) {
        a {
            display: flex;
        }
        .featuredImage {
            float: none;
            margin: 0;
        }
    }

    @media (max-width: 400px) {
        .featuredImage {
            max-width: 100%; 
            max-height: 100%; 
        }
    }
</style>