<svelte:head>
	<title>Blog</title>
	<meta name="description" content="Blogs by Justin Harkey" />
    <link rel='stylesheet' id='wp-block-library-css'  href='https://cms.justinharkey.com/wp-includes/css/dist/block-library/style.min.css?ver=5.8.6' media='all' />
</svelte:head>

<script>
    /**
	 * @type {{ status: number; blog: any; }}
	 */
     export let data;
</script>

{#if data.status === 200}
    <div id="page">
        <h1>{@html data.blog.title.rendered}</h1>
    
        <div id="content">
            <h3>{new Date(data.blog.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>
            <div id="container">
                {@html data.blog.content.rendered}
            </div>
        </div>
    </div>
{:else}
    <h2>Blog failed to load</h2>
{/if}

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
        color: #fff;
		box-sizing: border-box;
	}

	#container {
		max-width: 1400px;
        margin: 0 auto;
	}

    #content :global(h2) {
        font-size: 2rem;
        color: #ffbb54;
    }

    #content :global(.wp-block-gallery ul) {
	    list-style: none;
	    margin: 0 0 -1.6rem 0;
    }

    #content :global(figure.wp-block-gallery.alignnone),
    #content :global(figure.wp-block-gallery.aligncenter) {
        margin-bottom: 3rem;
        margin-top: 3rem;
    }

    #content :global(figure.wp-block-gallery.alignleft) {
        margin: 0.3rem 2rem 2rem 0;
    }

    #content :global(figure.wp-block-gallery.alignright) {
        margin: 0.3rem 0 2rem 2rem;
    }

    #content :global(figure.wp-block-gallery.alignwide) {
        margin-bottom: 4rem;
        margin-top: 4rem;
    }

    #content :global(figure.wp-block-gallery.alignfull) {
        margin-bottom: 5rem;
        margin-top: 5rem;
    }

    #content :global(.is-layout-flex) {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
    }
</style>