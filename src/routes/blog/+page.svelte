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

<h1>Blogs bro</h1>
{#if data.status === 200}
    {#each data.blogs as blog}
    <a href={blog.link.replace(/(https:\/\/cms.justinharkey.com)/, 'blog')}>
        <h2>{@html blog.title.rendered}</h2>
        <h3>{new Date(blog.date).toLocaleDateString('en-US')}</h3>
        <p>{@html blog.excerpt.rendered}</p>
    </a>
    {/each}
{:else}
    <h2>Blogs failed to load</h2>
{/if}