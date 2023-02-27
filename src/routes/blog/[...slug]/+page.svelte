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
    <h1>{@html data.blog.title.rendered}</h1>
    <h3>{new Date(data.blog.date).toLocaleDateString('en-US')}</h3>
    <p>{@html data.blog.content.rendered}</p>
{:else}
    <h2>Blog failed to load</h2>
{/if}