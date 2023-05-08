<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import type { IVideo, IVideoThumbnails } from '../models/video';

	export let data: { videos: IVideo[] };

	const getThumbnailUrl = (thumbnails: IVideoThumbnails) => {
		let url = thumbnails?.medium?.url || '';
		if (!url) {
			url = thumbnails?.default?.url;
		}
		if (!url) {
			url = '';
		}
		return url;

		// TODO: Inline all images
		// let response = await fetch(url);
		// let blob = await response.blob();
		// let buffer = Buffer.from(await blob.text());
		// let imageData = "data:" + blob.type + ';base64,' + buffer.toString('base64');
		// return imageData;
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>


	<h1>Videos</h1>

	<div id="videos">
		{#each data.videos as video}
		<a
			rel="external noreferrer"
			href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
			style={`background-image: url(${getThumbnailUrl(video.snippet.thumbnails)})`}
			class="video"
			target="_blank"
		>
		</a>
		{/each}
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
		color: #fff;
		position: relative;
		text-shadow: 1px 1px 0 #000;
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
		background: url(https://i.pinimg.com/originals/e3/0e/74/e30e74fa2839e6bc66cf0e7ce196801e.gif) no-repeat 50% 50%;
		background-size: cover;
		opacity: 0.7;
	}

	#videos {
		display: grid;
		gap: 10px;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		padding: 1rem;
		border: 1px solid #f80;
		border-width: 0 1px;
		background: rgba(87, 87, 87, 0.3);
	}

	#videos a {
		background-color: #000;
		aspect-ratio: 16/9;
		width: 100%;
		background-size: 120%;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		transition: all 200ms ease-in-out;
		opacity: 0.8;
		/* clip-path: polygon(2% 0, 100% 0%, 98% 100%, 0% 100%); */
	}

	#videos a:hover {
		background-size: 100%;
		transition: all 200ms ease-in-out;
		opacity: 1;
		/* clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%); */
	}
</style>
