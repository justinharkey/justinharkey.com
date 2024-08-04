<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Blogs by Justin Harkey" />
</svelte:head>

<script>
    /**
	 * @type {{ status: number; blog: any; }}
	 */
     export let data;
</script>

{#if data.status === 200}
    <div id="page">
        <div id="header">
            <!-- <img src={data.blog._embedded['wp:featuredmedia']['0'].source_url} alt="Featured" /> -->
            <h1>{@html data.blog.title.rendered}</h1>
            <h3>{new Date(data.blog.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>
        </div>
    
        <div id="content">
            <div id="container">
                {@html data.blog.content.rendered}
            </div>
        </div>
    </div>
{:else}
    <h2>Blog failed to load</h2>
{/if}

<style>
    #page {
        padding: 0 3em;
    }
    :global(h1, h2, h3, h4, h4, h5) {
        font-family: Nunito, 'sans-serif';
    }
    :global(p) {
        font-size: 1.1em;
        line-height: 1.5;
    }
    :global(.wp-block-gallery) {
        display: flex;
        gap: 1em;
        margin: 4em 0;
    }
    :global(.is-layout-flex) {
        flex-wrap: wrap;
    }
    :global(.alignwide) {
        margin-left: -3em;
        margin-right: -3em;
    }
</style>