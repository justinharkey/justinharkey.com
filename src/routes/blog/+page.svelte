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
    
</style>